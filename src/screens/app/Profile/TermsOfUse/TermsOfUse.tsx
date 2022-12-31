import React from "react";
import {useModel} from "./TermsOfUse.hook";
import {ScrollView, View} from "react-native";
import {styles} from "../ChangePassword/styles";
import {AppText, HeaderScreen} from "@components";
import {t} from "i18next";
export const TermsOfUse =(props:any)=>{
    const {}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('termsOfUse')}/>
            <ScrollView style={{margin:16}} showsVerticalScrollIndicator={false}>
                <AppText>{t("destermsOfUse")}</AppText>
            </ScrollView>
        </View>
    )
}
