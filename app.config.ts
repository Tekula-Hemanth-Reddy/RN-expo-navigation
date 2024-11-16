import { ExpoConfig } from '@expo/config';

module.exports = ({ config }: { config: ExpoConfig }) => {
    return {
        ...config,
        name: "RN-expo-navigation",
        scheme: "rn-expo-navigation",
        slug: "rn-expo-navigation",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/icon.png",
        userInterfaceStyle: "light",
        newArchEnabled: true,
        splash: {
            "image": "./assets/splash-icon.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        ios: {
            "supportsTablet": true
        },
        android: {
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            }
        },
        web: {
            "favicon": "./assets/favicon.png"
        },
        plugins: [
            "expo-router"
        ]
    } as ExpoConfig
}