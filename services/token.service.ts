// import BaseService from "./base.service";
import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios';
import { IUser, ResponseJson } from "../models";
import serviceConstants from '../app/@generic/service-constants';

class TokenService {

    private cancelToken: CancelTokenSource;
    constructor() {
        this.cancelToken = axios.CancelToken.source();
    }

    public userTokenUrl = serviceConstants.API_URL + '/userToken';

    get = <T>(url: string, requestBody: any, showLoading?: boolean, config?: AxiosRequestConfig) => {
        // if (this.requestApiMiddleware()) {
        return axios.get<ResponseJson<T>>(url, { params: requestBody, ...config, cancelToken: this.cancelToken.token })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                if (!url.includes('/mobile/validateurl')) {
                    alert(url + '\n' + error);
                }
                return Promise.reject(error);
            });

        // }
    }

    post = <T>(url: string, requestBody: any, showLoading?: boolean, config?: AxiosRequestConfig) => {
        // this.requestApiMiddleware();
        return axios.post<ResponseJson<T>>(url, requestBody, { ...config, cancelToken: this.cancelToken.token })
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                alert(url + '\n' + error);
                return Promise.reject(error);
            });
    }

    getRefreshToken = (refreshToken: string, user: IUser) => {
        return this.post(serviceConstants.API_URL + '/refreshToken', { refreshToken, user });
    }
}

export default TokenService;