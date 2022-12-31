import React from "react";
import {useModel} from "./PrivacyPolicy.hook";
import {ScrollView, View} from "react-native";
import {styles} from "../ChangePassword/styles";
import {AppText, HeaderScreen} from "@components";
import {t} from "i18next";
export const PrivacyPolicy =(props:any)=>{
    const {}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('privacyPolicy')}/>
            <ScrollView style={{margin:16}} showsVerticalScrollIndicator={false}>
                <AppText>{t("desPri")}</AppText>
            </ScrollView>
        </View>
    )
}
