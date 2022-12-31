import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {AppImage, AppText} from "@components";
import {BackgroundOrder, ColorTxtOrder, formatDate, TxtOrderStatus} from "@utils";
import {t} from "i18next";
import {Colors, FontSize, Spacing} from "@theme";
import {renderPrice} from "../../../../utils/PriceUtils";
import unionBy from "lodash/unionBy";

type DeliveryProgressOrderType={
    list:any,
}


export const DeliveryProgressOrder =(props:DeliveryProgressOrderType)=> {
    const {list} = props;
    const data= unionBy(list, 'status')
    const renderItem =(item:any)=>{
        return(
            <TouchableOpacity style={{...styles.viewRow,marginTop:4}}>
                <AppText>{TxtOrderStatus(item?.status)}</AppText>
                <AppText style={{fontSize:12}}>{formatDate(item?.time,"hh:mm DD/MM/YYYY")}</AppText>


            </TouchableOpacity>
        )
    }
    if(list?.length>0){
        return (
            <View style={{...styles.containerAddress,}}>
                <AppText style={styles.txtTitle}>{t("deliveryProgress")}</AppText>
                <View style={{marginTop:8}}>
                    {data.map((elm:any)=>{
                        return renderItem(elm)
                    })}
                </View>
            </View>
        )
    }else return null
}
