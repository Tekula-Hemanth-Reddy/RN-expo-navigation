import { Platform } from "react-native";
import cssConstants from "./css-constants";
import * as FileSystem from 'expo-file-system';

export const constants = {
    URL_NOT_FOUND: "404",
    IS_ENV_DEVELOPMENT: __DEV__,
    IS_ANDROID: Platform.OS === "android",
    IS_IOS: Platform.OS === "ios",
    IS_DEBUG_MODE_ENABLED: Boolean(window.navigator.userAgent),
};