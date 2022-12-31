import React from "react";
import {useModel} from "./Checkout.hook";
import {ActivityIndicator, Modal, ScrollView, View} from "react-native";
import {styles} from "./styles";
import {AppButton, AppText, HeaderScreen} from "@components";
import { t } from "i18next";
import {InfoAddress} from "./block/InfoAddress";
import {InfoCart} from "./block/InfoCart";
import {InfoPayment} from "./block/InfoPayment";
import {Colors} from "@theme";
import {IconOrderSuccess} from "@assets";
import {goBack, navigate, SCREEN_ROUTE} from "@navigation";
export const Checkout =(props:any)=>{
    const {params,onCheckout,addressDef,showSuccess,setShowSuccess,loading,onEditAddress,isPayment,setIsPayment}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t("checkout")}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InfoAddress
                    address={addressDef}
                    onEdit={onEditAddress}/>
                <InfoCart product={params?.items}/>
                <InfoPayment
                    status={isPayment}
                    setStatus={(value:boolean)=>{setIsPayment(value)}}
                />
                <AppButton label={t("checkout").toUpperCase()} style={styles.btnCheckout} onPress={onCheckout}/>
            </ScrollView>

            <Modal
                animationType={"fade"}
                style={styles.modalContainer}
                visible={showSuccess}
                onDismiss={()=>setShowSuccess(false)}
                transparent={true}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.mainContent}>
                        {loading?(
                            <View>
                                <AppText style={{color:Colors.colorMain2,marginBottom:20}}>{t("loading")}</AppText>
                                <ActivityIndicator size="large" color={Colors.colorMain2} />
                            </View>
                        ):(
                            <View style={{alignItems:'center'}}>
                                <IconOrderSuccess/>
                                <AppText style={{color:Colors.colorMain2,marginVertical:20}}>{t("checkoutCartSuccess")}</AppText>
                                <AppButton label={t("gotoOrder")} style={styles.btnGotoProduct} labelStyle={{color:Colors.white}} onPress={()=>{
                                    setShowSuccess(false)
                                   setTimeout(()=>{
                                       navigate(SCREEN_ROUTE.ORDER,{type:'checkout'})
                                   },200)

                                }}/>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
    )
}
