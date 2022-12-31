import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BackIcon, Spacing} from "@assets";
import {Colors} from "@theme";
import {useNavigation} from "@react-navigation/native";
export const HeaderAuth =(props:any)=>{
    const nav: any = useNavigation();
    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={{ alignItems: "center", flexDirection: "row" }}
                onPress={() => {
                    if (props?.customBack) {
                        props?.customBack();
                        props?.additionalFunc && props?.additionalFunc();
                    } else {
                        nav.goBack();
                        props?.additionalFunc && props?.additionalFunc();
                    }
                }}
            >
               <BackIcon/>
                <Text
                    style={{marginLeft: Spacing.width10 }}
                >
                    {props?.backTitle}
                </Text>
            </TouchableOpacity>
            <Text style={{  }}>{props.name}</Text>
        </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingHorizontal: Spacing.width20,
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: Spacing.height12,
        borderBottomColor: Colors.gray,
    },
});
