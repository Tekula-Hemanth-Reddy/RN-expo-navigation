import * as ACTION_TYPES from './action-types';
import { IUser } from '../models';

export const saveToken = (Token: string) => ({
  type: ACTION_TYPES.SAVE_TOKEN,
  token: Token,
});

export const removeToken = () => ({
  type: ACTION_TYPES.REMOVE_TOKEN,
});

export const saveRefreshToken = (refreshToken: string) => ({
  type: ACTION_TYPES.SAVE_REFRESH_TOKEN,
  refreshToken: refreshToken,
});

export const removeRefreshToken = () => ({
  type: ACTION_TYPES.REMOVE_REFRESH_TOKEN,
})

export const saveTokenPayload = (payload: string) => ({
  type: ACTION_TYPES.SAVE_TOKEN_PAYLOAD,
  tokenPayload: payload,
});

export const loading = (showLoading: boolean) => ({
  type: ACTION_TYPES.LOADING,
  isLoading: showLoading
});

export const saveInternetState = (isInternetReachable: boolean) => ({
  type: ACTION_TYPES.IS_INTERNET_REACHABLE,
  isInternetReachable: isInternetReachable
})

export const saveUserDetails = (userDetails: IUser) => ({
  type: ACTION_TYPES.USER_DETAILS,
  userDetails: userDetails
})