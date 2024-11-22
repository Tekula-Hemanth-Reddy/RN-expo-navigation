
import React from "react";
import { Image, StyleSheet } from "react-native";
import colors from "../../config/colors";
import cssConstants from "../../config/css-constants";
import { RnView, RnText, RnIcon } from "rn-input-libary";
import { NoImageProps } from "../../models";

export default function NoImage(props: NoImageProps) {
  return (
    <RnView>
      {
        props.noImageData ?
          <RnView style={[styles.container, { backgroundColor: '#F4F8FF' }]}>
            <Image source={require("../../assets/no-image-found.png")} resizeMode="contain" style={
              {
                width: cssConstants.DEFAULT_MARGIN * 20,
                height: cssConstants.DEFAULT_MARGIN * 20
              }
            } />
            <RnText textAlignCenter light style={{ position: 'absolute', bottom: '5%' }}>No Image</RnText>
          </RnView>
          :
          <RnView style={styles.container}>
            <RnIcon name="camera-alt" color={colors.NEUTRAL.NEUTRAL_100} size={50} style={styles.icon} />
            <RnText textAlignCenter style={styles.text}>Image Not Uploaded</RnText>
          </RnView>
      }
    </RnView>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.NEUTRAL.NEUTRAL_30,
    height: 200,
    width: '100%',
    flex: 1,
    borderTopLeftRadius: cssConstants.BASE_BORDER_RADIUS,
    borderTopRightRadius: cssConstants.BASE_BORDER_RADIUS,
    display: 'flex',
    justifyContent: 'center',
    borderColor: cssConstants.BORDER_COLOR,
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    width: 50,
    height: 50
  },
  text: {
    color: colors.NEUTRAL.NEUTRAL_100,
    fontWeight: 'bold'
  }
});