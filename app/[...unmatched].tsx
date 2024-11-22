import * as Linking from "expo-linking";
import React, { useEffect, useState } from 'react';
import cssConstants from "../config/css-constants";
import colors from "../config/colors";
import useRnNavigation from "./@generic/navigation";
import { RnButton, RnIcon, RnText, RnView } from "rn-input-libary";
import strings from "../config/strings";
import { Image } from "react-native";

export default function UnmatchedRoutePage() {

    const url = Linking.useURL();
    const innNavigation = useRnNavigation();
    // added # in the end as it is angular url
    const [loading, setIsLoading] = useState(true);
    const [isURLMatch, setIsURLMatch] = useState(true);


    useEffect(() => {
        // added # in the end as it is angular url
        const regex = new RegExp("https:\/\/arena\..*.\.inncircles\.com\/\#.*");
        const isURLMatch = regex.test(url || '');
        setIsURLMatch(isURLMatch);
        setIsLoading(false);
    }, [url]);

    return <RnView full padding justifyCenter style={{ alignItems: 'center' }}>
        {!isURLMatch && !loading && <><Image source={require('../assets/404.png')} style={{
            width: 350,
            height: '80%',
            resizeMode: 'contain'
        }} />
            <RnText fontWeight={600} style={{ position: 'absolute', bottom: '18%', fontSize: cssConstants.MEDIUM_FONT_SIZE }}>
                Oops! {strings.NO_PATH_FOUND}
            </RnText>
            <RnButton brightBorder outline iconLeft={<RnIcon name="chevron-left" color={colors.SECONDARY.SECONDARY_400}></RnIcon>}
                style={{ paddingHorizontal: cssConstants.DEFAULT_PADDING * 2.5, borderRadius: cssConstants.BASE_BORDER_RADIUS * 1.5 }}
                onPress={() => innNavigation.goBack()}>
                <RnText fontWeight={600} style={{ color: colors.SECONDARY.SECONDARY_400 }}>Go Back</RnText>
            </RnButton>
        </>
        }
        {
            isURLMatch && !loading && <RnText title style={{ position: 'absolute', bottom: '18%' }}>{strings.PLEASE_WAIT}</RnText>
        }
    </RnView>
};