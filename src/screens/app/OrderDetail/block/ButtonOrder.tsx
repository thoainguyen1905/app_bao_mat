import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {Spacing} from "@theme";
import {AppButton} from "@components";
import { t } from "i18next";
import {IconShop} from "@assets";
import {navigate, SCREEN_ROUTE} from "@navigation";

type ButtonOrderType={
    status:number,
    onCancel:()=>void
}


export const ButtonOrder =(props:ButtonOrderType)=> {
    const {status,onCancel} = props;

   const renderBody=()=>{
       if(status===1 ||status===2){
           return (
               <View style={styles.viewRow} >
                   <TouchableOpacity style={styles.btn1} onPress={()=>navigate(SCREEN_ROUTE.ABOUT_US)}>
                       <IconShop/>
                   </TouchableOpacity>

                   <AppButton onPress={onCancel} label={t("cancel").toUpperCase()} style={styles.btn2} labelStyle={styles.txtBtn2}/>
               </View>
           )
       }else {
           return (
               <TouchableOpacity style={{...styles.btn1,width:"100%"}} onPress={()=>navigate(SCREEN_ROUTE.ABOUT_US)}>
                   <IconShop/>
               </TouchableOpacity>
           )
       }
    }
    return (
        <View style={{marginTop:16,height:Spacing.height70,alignItems:'stretch',justifyContent:'center',marginHorizontal:Spacing.width16}}>
            {renderBody()}
        </View>
    )
}
