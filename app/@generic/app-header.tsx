import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { useRouter } from "expo-router"
import { Platform, useWindowDimensions } from 'react-native'
import useRnNavigation from './navigation'
import colors from '../../config/colors'
import cssConstants from '../../config/css-constants'
import { RnButton, RnIcon, RnText, RnView, RnDatePicker } from 'rn-input-libary'
import { useEffect } from 'react'

const AppHeader = (props: NativeStackHeaderProps | BottomTabHeaderProps) => {
    const navigation = useRnNavigation();

    const { width: deviceWidth } = useWindowDimensions();


    return <RnView col style={{ backgroundColor: cssConstants.PRIMARY_COLOR, paddingBottom: cssConstants.DEFAULT_PADDING }}>
        <RnView row paddingBottom={4}
            paddingTop={Platform.OS === 'ios' ? 10 : 0}
            style={{
                width: deviceWidth,
                shadowColor: Platform.OS == 'ios' ? 'rgba(0,0,0,.2)' : 'rgba(0,0,0,.5)',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 20,
                backgroundColor: cssConstants.BACKGROUND_COLOR
            }}>
            {
                'headerLeft' in (props as NativeStackHeaderProps)?.options ?
                    <>
                        {((props as NativeStackHeaderProps).options as any).headerLeft(props as any)}
                    </>
                    :
                    <RnButton
                        transparent
                        text={''}
                        onPress={
                            () => {
                                navigation.goBack()
                            }
                        }
                        icon={
                            <RnIcon
                                name="arrow-back"
                                size={24}
                                color={colors.NEUTRAL.NEUTRAL_500}>
                            </RnIcon>
                        }>
                    </RnButton>
            }
            <RnText
                fontWeight={600}
                textAlignCenter
                style={
                    [
                        { flex: 1, fontSize: cssConstants.MEDIUM_FONT_SIZE, color: colors.SECONDARY.SECONDARY_500 },
                        (props as NativeStackHeaderProps)?.options?.headerTitleStyle
                    ]
                }>
                {(props.options?.headerTitle || props.options?.title)?.toString()}
            </RnText>
            {
                'headerRight' in (props as NativeStackHeaderProps)?.options ?
                    <>
                        {((props as NativeStackHeaderProps).options as any).headerRight(props as any)}
                    </>
                    :
                    <RnView style={{ width: 52 }}></RnView>
            }
        </RnView>
    </RnView>

}

export default AppHeader