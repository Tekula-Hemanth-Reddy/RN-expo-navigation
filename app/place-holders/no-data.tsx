
import React from "react";
import { RnView, RnText } from "rn-input-libary";

const NoDataComponent = (props: { message?: string }) => {
    return (
        <RnView style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
            <RnText padding textAlignCenter note style={{ fontStyle: "italic" }}>
                {props.message ? props.message : "No data"}
            </RnText>
        </RnView>
    )
}

export default NoDataComponent;