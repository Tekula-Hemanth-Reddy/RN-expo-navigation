import * as actionTypes from "./action-types";
import { combineReducers } from 'redux';


export const initialState = {
    token: {},
    isInternetReachable: false,
    userDetails: {},
}

const rootReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.SAVE_TOKEN:
            return { ...state, token: action.token };
        case actionTypes.REMOVE_TOKEN:
            return { ...state, token: action.token };
        case actionTypes.IS_INTERNET_REACHABLE:
            return { ...state, isInternetReachable: action.isInternetReachable }
        case actionTypes.USER_DETAILS:
            return { ...state, userDetails: action.userDetails }
        default:
            return state;
    }
};


export default combineReducers({
    data: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>