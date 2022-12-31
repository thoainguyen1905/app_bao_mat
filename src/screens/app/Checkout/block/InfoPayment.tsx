import React from "react";
import {TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {AppText} from "@components";
import { t } from "i18next";
type InfoPaymentType={
    status:boolean,
    setStatus:any
}
export const InfoPayment =(props:InfoPaymentType)=>{
    const {status,setStatus}=props;


    return(
        <View style={styles.containerAddress}>
            <AppText style={styles.txtTitle}>{t("payment")}</AppText>
            <TouchableOpacity onPress={()=>setStatus(!status)} style={{...styles.viewRow,justifyContent:'flex-start',marginTop:16}}>
                <View style={status?styles.iconCheckbox:styles.iconCheckBoxSelect}/>
                <AppText style={{marginLeft:8}}>{t("payment1")}</AppText>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>setStatus(!status)} style={{...styles.viewRow,justifyContent:'flex-start',marginTop:16}}>
                <View style={!status?styles.iconCheckbox:styles.iconCheckBoxSelect}/>
                <AppText style={{marginLeft:8}}>{t("payment2")}</AppText>
            </TouchableOpacity>
        </View>
    )
}
