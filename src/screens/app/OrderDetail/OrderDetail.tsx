import React from "react";
import {useModel} from "./OrderDetail.hook";
import {ScrollView, View} from "react-native";
import {styles} from "./styles";
import {HeaderScreen} from "@components";
import {t} from "i18next";
import {InfoOrder} from "./block/InfoOrder";
import {InfoCartOrder} from "./block/InfoCartOrder";
import {AddressOrder} from "./block/AddressOrder";
import {PaymentOrder} from "./block/PaymentOrder";
import {DeliveryProgressOrder} from "./block/DeliveryProgressOrder";
import {ButtonOrder} from "./block/ButtonOrder";
export const OrderDetail =(props:any)=>{
    const {params,onCancelOrder}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('orderDetail')}/>
            <ScrollView showsVerticalScrollIndicator={false}>
                <InfoOrder detail={params?.item}/>
                <InfoCartOrder
                    detail={params?.item}
                    product={params?.item?.orderDetails?params?.item?.orderDetails:[]}/>
                <AddressOrder  detail={params?.item} />
                <PaymentOrder detail={params?.item}/>
                <DeliveryProgressOrder
                    list={params?.item?.deliveryProgress?params?.item?.deliveryProgress:[]}
                />
                <ButtonOrder status={params?.item?.status} onCancel={onCancelOrder} />
            </ScrollView>
        </View>
    )
}
