import * as ACTION_TYPES from './action-types';
import { IUser } from '../models';

export const saveToken = (Token: string) => ({
  type: ACTION_TYPES.SAVE_TOKEN,
  token: Token,
});

export const removeToken = () => ({
  type: ACTION_TYPES.REMOVE_TOKEN,
});

export const saveInternetState = (isInternetReachable: boolean) => ({
  type: ACTION_TYPES.IS_INTERNET_REACHABLE,
  isInternetReachable: isInternetReachable
})

export const saveUserDetails = (userDetails: IUser) => ({
  type: ACTION_TYPES.USER_DETAILS,
  userDetails: userDetails
})