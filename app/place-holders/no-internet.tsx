import React, { Component } from 'react';
import { Image, StyleSheet, Text } from 'react-native';
import colors from '../../config/colors';
import cssConstants from '../../config/css-constants';
import { RnView } from 'rn-input-libary';

type IProps = {
    isInternetAvailable: boolean
}

class NoInternetScreen extends Component<IProps, {}> {

    render() {
        return (
            <RnView style={styles.container}>
                <Image source={require('../../assets/no-internet.gif')} style={styles.logo} />
                <Text style={{ fontWeight: 'bold', fontSize: cssConstants.LARGE_FONT_SIZE }}>No Internet Connection</Text>
                <Text>You are not connected to internet</Text>
                <Text style={{ padding: cssConstants.DEFAULT_PADDING, textAlign: 'center' }}>Please sync and set-up/download a project to use it while you're off the network</Text>
            </RnView>
        )
    }
}

const styles = StyleSheet.create({
    noDataText: {
        fontSize: cssConstants.MEDIUM_FONT_SIZE,
        fontStyle: 'italic',
        justifyContent: 'center',
        alignItems: 'center',
        padding: cssConstants.DEFAULT_PADDING
    },
    container: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        backgroundColor: colors.WHITE,
        position: "relative"
    },
    icon: {
        height: 250,
        width: 250,
    },
    logo: {
        width: 150,
        height: 150,
        marginTop: '10%',
        resizeMode: "contain",
    },
});

export default (NoInternetScreen);