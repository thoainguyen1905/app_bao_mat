import React from "react";
import {TouchableOpacity, View} from "react-native";
import {AppText} from "@components";
import {t} from "i18next";
import {IconAdd, Minus} from "@assets";
import {styles} from "./styles";
import {showMessage} from "react-native-flash-message";
import {Colors} from "@theme";
type AppQuantityType={
    amount?:any,
    setAmount?:any,
    style?:any,
    isTitle?:boolean,
    maxCount:number
}
export const AppQuantity =(props:AppQuantityType)=>{
    const { amount=0, setAmount,style,isTitle=false,maxCount}=props
    const checkQuantity=()=>{
        return false
    }
    const adjustAmount = (type: number) => {
        const availability = checkQuantity();

        if (availability) {
            if (type === 1 && amount > 1) {
                setAmount(amount - 1);
            } else if (type === 2 ) {
                setAmount(amount + 1);
            } else if (type === 2 && maxCount===amount) {
                showMessage({
                    message:t("quantity_maximum"),
                    type: "info",
                    backgroundColor: Colors.error,
                    color: Colors.white,
                });
            }
        } else {
            if (type === 1 && amount > 1) {
                setAmount(amount - 1);
            } else if (type === 2) {
                setAmount(amount + 1);
            }
        }
    };
    return(
        <View style={[styles.container,style]}>
            {isTitle&& <AppText>{t("quantity")}</AppText>}
            <View style={styles.adjustContainer}>
                <TouchableOpacity
                    onPress={() => adjustAmount(1)}
                    style={styles.adjustAmount}
                    disabled={amount === 0}
                >
                    <Minus/>
                </TouchableOpacity>
                <AppText style={styles.amount}>{amount}</AppText>
                <TouchableOpacity
                    onPress={() => adjustAmount(2)}
                    style={styles.adjustAmount}
                    disabled={amount === 0}
                >
                    <IconAdd/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
