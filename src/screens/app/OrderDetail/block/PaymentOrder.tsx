import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {AppText} from "@components";
import {t} from "i18next";
import {Colors, Spacing} from "@theme";

type PaymentOrderType={
    detail:any,
}


export const PaymentOrder =(props:PaymentOrderType)=> {
    const {detail} = props;

    return (
        <View style={styles.containerAddress}>
          <AppText style={styles.txtTitle}>{t("payment")}</AppText>
            <AppText style={{color:Colors.gray}}>{detail?.paymentMethod!==0?t("payment1"):t("payment2")}</AppText>
        </View>
    )
}
