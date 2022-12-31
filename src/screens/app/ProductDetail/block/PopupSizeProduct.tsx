import React from "react";
import {View} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import {AppText} from "@components";
type PopupSizeProductType={
    ref:any
}
export const PopupSizeProduct =(props:PopupSizeProductType)=>{
    const {ref}=props;
    return(
        <RBSheet
            ref={ref}
            height={300}
            openDuration={250}
            customStyles={{
                container: {
                    justifyContent: "center",
                    alignItems: "center"
                }
            }}
        >
            <View>
                <AppText>hieu</AppText>
            </View>
        </RBSheet>
    )
}
