import Device from "react-native-device-detection";

const cssConstants = {

    // margin
    DEFAULT_MARGIN: 10,
    //padding
    DEFAULT_PADDING: 10,

    isTablet: Device.isTablet, //(Platform.OS == 'ios' && (Platform as PlatformIOSStatic).isPad),
    isIos: Device.isIos,
};

export default cssConstants;
