import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {AppText} from "@components";
import {t} from "i18next";
import {Spacing} from "@theme";

type AddressOrderType={
    detail:any,
}


export const AddressOrder =(props:AddressOrderType)=> {
    const {detail} = props;

    return (
        <View style={styles.containerAddress}>
            <View style={styles.viewRow}>
                <AppText style={styles.txtTitle}>{t("infoAddress")}</AppText>
            </View>

            <View style={{marginTop:Spacing.width8}}>
                <AppText style={styles.txtName}>{t("full_name")} : <AppText style={{...styles.txtName,fontWeight:'400'}}>{detail?.name}</AppText></AppText>
                <AppText style={styles.txtName}>{t("phone")} : <AppText style={{...styles.txtName,fontWeight:'400'}}>{detail?.phone}</AppText></AppText>
                <AppText style={styles.txtAddress}>{t("address1")} : <AppText style={{...styles.txtAddress,fontWeight:'400'}}>{detail?.address}</AppText></AppText>
            </View>
        </View>
    )
}
