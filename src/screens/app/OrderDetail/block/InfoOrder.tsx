import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {AppText} from "@components";
import {BackgroundOrder, ColorTxtOrder, formatDate, TxtOrderStatus} from "@utils";

type InfoOrderType={
    detail:any,
}


export const InfoOrder =(props:InfoOrderType)=> {
    const {detail} = props;

    return (
        <View style={{...styles.containerAddress, flexDirection:'row',
            alignItems:'center',justifyContent:'space-between'}}>
            <View>
                <AppText style={styles.orderId}>#{detail?.code}</AppText>
                <AppText style={styles.orderDate}>
                    {formatDate(detail?.createdDate,"DD/MM/YYYY")}
                </AppText>
            </View>
            <View style={{backgroundColor:BackgroundOrder(detail?.status),padding:8,borderRadius:8}}>
                <AppText style={{color:ColorTxtOrder(detail?.status)}}>{TxtOrderStatus(detail?.status)}</AppText>
            </View>
        </View>
    )
}
