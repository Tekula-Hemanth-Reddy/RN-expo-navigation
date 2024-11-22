import axios, { AxiosResponse } from "axios";
import { saveToken } from "../redux/actions";
import { REMOVE_REFRESH_TOKEN, REMOVE_TOKEN, } from "../redux/action-types";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as TaskManager from 'expo-task-manager';
import axiosRetry from 'axios-retry';
import NetInfo from "@react-native-community/netinfo";
import store from "../redux/store";
import serviceConstants from "../app/@generic/service-constants";
import TokenService from "./token.service";
import { IUser } from "../models";
import { error_code } from "../config/error-codes";



const axiosInstance = axios.create();
let refreshTokenInProgress = false;
let requestsInQueue: ((token: any) => void)[] = [];
const CancelToken = axios.CancelToken;

axiosRetry(axiosInstance, { retries: 3, retryCondition: (error) => { return error.response?.status === 404; } });

const handle401Error = (response: AxiosResponse<any>, authContextData: {
  refreshToken: string,
  user: IUser,
  logout: () => void,
}): Promise<AxiosResponse<any>> => {
  const originalRequest = response.config;
  // const { logout } = useContext(AuthContext); // TODO: error thrown for using this hook from component.


  if (!refreshTokenInProgress) {
    refreshTokenInProgress = true;
    const client = new TokenService();
    const state = store.getState();
    const refreshToken = state.data.refreshToken;
    const user = state.data.tokenPayload;
    if (!refreshToken) {
      authContextData.logout();
    }
    client.getRefreshToken(refreshToken, user).then(async (res: any) => {
      if (res && res.data && typeof res.data.data === 'string') {
        refreshTokenInProgress = false;
        onAccessTokenRefreshed(res.data.data);
        requestsInQueue = [];
        AsyncStorage.setItem('jwt_token', res.data.data);
        store.dispatch(saveToken(res.data.data));
      } else {
        authContextData.logout();
      }
    }).catch((err: any) => {
      authContextData.logout();
    });
  }
  // meantime queue all the existing requests and retry them. 
  const onGoingRequests = new Promise<AxiosResponse<any>>(resolve => {
    accessTokenRefreshInProgress(token => {
      originalRequest.headers.authorization = `Bearer ${token}`;
      resolve(axios(originalRequest));
    });
  });
  return onGoingRequests;
}

function accessTokenRefreshInProgress(cb: (token: any) => void) {
  requestsInQueue.push(cb);
}

function onAccessTokenRefreshed(token: any) {
  requestsInQueue.map(cb => cb(token));
}

axiosInstance.interceptors.request.use(async function (config) {
  const state = store.getState();
  const token: string = state.data.token;
  if (!config.params) {
    config.params = {}
  }
  if (!config.params.time_zone)
    config.params['time_zone'] = Intl.DateTimeFormat().resolvedOptions().timeZone;;
  if (config.socketPath) {
    config.params['socketId'] = config.socketPath
  }
  if (token) {
    config.headers.authorization = `Bearer ${token}`
  }
  return config;
}, function (error) {
  if (axios.isCancel(error))
    return true;
  throw new Error(error);
});

const removeItemValue = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
    return true;
  }
  catch (exception) {
    return false;
  }
}

const logout = () => {
  removeItemValue('jwt_token');
  TaskManager.unregisterAllTasksAsync();

  store.dispatch({ type: REMOVE_REFRESH_TOKEN });
  store.dispatch({ type: REMOVE_TOKEN });
}

axiosInstance.interceptors.response.use(function (response): any {
  const state = store.getState();
  if (!response.data.success && response.data.code === error_code[1001] && (response as any).config.url.includes(serviceConstants.API_URL)) {
    return handle401Error(response, { refreshToken: state.data.refreshToken, user: state.data.userDetails, logout });
  }
  else if (!response.data.success && response.data.code == error_code[1002]) {
    refreshTokenInProgress = false;
    alert('Session Timed Out!');
    logout();
  } else {
    return response;
  }

}, function (error) {
  console.log('error response', error);
  if (error && error.response && error.response.status === error_code[404]) {
    NetInfo.fetch().then(state => {
      if (!state.isConnected) {
        alert('Please check your internet connection');
      }
      else {
        throw new Error(error.message);
      }
    });
  }
  if (axios.isCancel(error))
    return true;
  throw new Error(error.message);

});


export default axiosInstance;