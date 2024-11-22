import { Tabs } from "expo-router";
import { Image, Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import colors from "../../config/colors";
import * as Haptics from 'expo-haptics'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';

export default function DefaultLayout() {

    const canViewDesk: boolean = false

    return (
        <SafeAreaProvider>
            <ExpoStatusBar backgroundColor="white" />
            <SafeAreaView style={{
                flex: 1,
                justifyContent: "center",
                paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
            }}>
                <Tabs
                    screenListeners={() => ({
                        tabPress: _ => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light),
                    })}
                    screenOptions={{
                        headerShown: false,
                        tabBarLabelStyle: {
                            fontWeight: "500",
                            marginBottom: Platform.OS == "ios" ? 4 : 12
                        },
                        tabBarActiveTintColor: colors.SECONDARY.SECONDARY_500,
                        tabBarInactiveTintColor: colors.SECONDARY.SECONDARY_200,
                        tabBarStyle: {
                            paddingBottom: 0,
                            height: Platform.OS == "ios" ? 60 : 65,
                            paddingTop: Platform.OS == "ios" ? 8 : 6,
                            shadowColor: '#000000',
                            shadowOffset: { width: 0, height: -6 },
                            shadowOpacity: 0.08,
                            shadowRadius: 4,
                        },
                        // unmountOnBlur: true
                    }}
                >
                    <Tabs.Screen
                        name="features"
                        options={{
                            tabBarLabel: 'Home',
                            title: '',
                            tabBarIcon: ({ focused }) => (
                                focused ?
                                    <Image style={styles.tabIcon} source={require(`../../assets/icons/tab/home-filled.png`)} /> :
                                    <Image style={styles.tabIcon} source={require(`../../assets/icons/tab/home.png`)} />),
                        }}
                        initialParams={{}}
                    />

                    <Tabs.Screen
                        name="desk"
                        options={{
                            tabBarLabel: 'My Desk',
                            title: '',
                            ...(!canViewDesk ? { href: null } : {}),
                            tabBarIcon: ({ focused }) => (
                                focused ?
                                    <Image style={styles.tabIcon} source={require(`../../assets/icons/tab/apps-filled.png`)} /> :
                                    <Image style={styles.tabIcon} source={require(`../../assets/icons/tab/apps.png`)} />),
                        }}
                        initialParams={{}}
                    />

                    <Tabs.Screen
                        name="notifications/index"
                        options={{
                            tabBarLabel: 'Alerts',
                            title: '',
                            tabBarIcon: ({ focused }) => (
                                focused ?
                                    <Image style={styles.tabIcon} source={require(`../../assets/icons/tab/notifications-filled.png`)} /> :
                                    <Image style={styles.tabIcon} source={require(`../../assets/icons/tab/notifications.png`)} />),
                        }}
                        initialParams={{}}

                    />
                    <Tabs.Screen
                        name="my-account/index"
                        options={{
                            tabBarLabel: 'My Account',
                            title: '',
                            tabBarIcon: ({ focused }) => (focused ?
                                <Image style={styles.tabIcon} source={require(`../../assets/icons/tab/user-filled.png`)} /> :
                                <Image style={styles.tabIcon} source={require(`../../assets/icons/tab/user.png`)} />),
                        }}
                        initialParams={{}}

                    />
                </Tabs>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 22,
        height: 22,
        resizeMode: 'contain'
    }
})