import React from "react";
import {useModel} from "./Setting.hook";
import {View} from "react-native";
import {styles} from "../ChangePassword/styles";
import {HeaderScreen} from "@components";
import {t} from "i18next";
export const Setting =(props:any)=>{
    const {}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('setting')}/>
        </View>
    )
}
