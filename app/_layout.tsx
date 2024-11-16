import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import * as Linking from 'expo-linking';
import { Stack } from 'expo-router';
import "expo-router/entry";
import React, { useEffect, useRef } from 'react';
import ErrorBoundary from './@generic/error-boundary';

export default function Main() {
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('../assets/fonts/Inter/Inter-Black.ttf'),
        'Inter-ExtraBold': require('../assets/fonts/Inter/Inter-ExtraBold.ttf'),
        'Inter-Bold': require('../assets/fonts/Inter/Inter-Bold.ttf'),
        'Inter-SemiBold': require('../assets/fonts/Inter/Inter-SemiBold.ttf'),
        'Inter-Light': require('../assets/fonts/Inter/Inter-Light.ttf'),
        'Inter-Regular': require('../assets/fonts/Inter/Inter-Regular.ttf'),
        'Inter-Medium': require('../assets/fonts/Inter/Inter-Medium.ttf'),
        'Inter-Thin': require('../assets/fonts/Inter/Inter-ExtraLight.ttf'),

        'PlusJakartaSans-Medium': require('../assets/fonts/PlusJakartaSans/PlusJakartaSans-Medium.ttf'),
        'PlusJakartaSans-SemiBold': require('../assets/fonts/PlusJakartaSans/PlusJakartaSans-SemiBold.ttf'),
        'PlusJakartaSans-Bold': require('../assets/fonts/PlusJakartaSans/PlusJakartaSans-Bold.ttf'),
        'PlusJakartaSans-ExtraBold': require('../assets/fonts/PlusJakartaSans/PlusJakartaSans-ExtraBold.ttf'),
    });

    if (!fontsLoaded) {
        // return <SplashScreen />;
    }

    // notifications 
    return (
        <ErrorBoundary>
            <></>
        </ErrorBoundary>
    );
}
