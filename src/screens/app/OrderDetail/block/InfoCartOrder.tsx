import React from "react";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styes";
import {AppImage, AppText} from "@components";
import {t} from "i18next";
import {Colors, FontSize, Spacing} from "@theme";
import {renderPrice} from "../../../../utils/PriceUtils";
import {IconDots} from "@assets";
import {Device} from "../../../../assets/device";

type InfoCartOrderType={
    product:any,
    detail:any
}


export const InfoCartOrder =(props:InfoCartOrderType)=> {
    const {product,detail} = props;
    // @ts-ignore
    const renderItem =({item,index})=>{
        return(
            <TouchableOpacity style={styles.viewCart}>
                <AppImage uri={item?.product?.imageUrl[0]} style={styles.imgCart}/>
                <View style={{marginLeft:8}}>
                    <AppText style={{fontWeight:'500',maxWidth:Spacing.width150}} numberOfLines={2}>{item?.product?.name}</AppText>
                    <AppText style={{fontSize:FontSize.Font14,color:Colors.gray,marginVertical:8,fontWeight:'500'}}>{item?.product?.color?.length>0?item?.product?.color:''} {item.product?.size?.length>0?', '+item.product?.size:''}</AppText>
                    <AppText style={{fontSize:FontSize.Font12,color:Colors.red,fontWeight:'500'}}>{renderPrice(item?.product?.price)}</AppText>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.containerAddress}>
                <AppText style={styles.txtTitle}>{t("infoCart")}</AppText>
                <AppText style={styles.txtCountPrice}>({product?.length+" "+t("product")})</AppText>
            <FlatList data={product}
                      contentContainerStyle={{
                          marginVertical:16
                      }}
                      renderItem={renderItem}
                      showsHorizontalScrollIndicator={false}
                      horizontal={true}/>

            <View style={{borderTopColor:Colors.borderColor,borderTopWidth:1}}>
                <View style={{...styles.viewRow,marginTop:12}}>
                    <AppText style={styles.txtAddress}>{t("numProduct")}</AppText>
                    <AppText style={styles.txtTitle}>{product?.length}</AppText>
                </View>
                <View style={{...styles.viewRow,marginTop:12}}>
                    <AppText style={styles.txtAddress}>{t("price2")}</AppText>
                    <AppText style={styles.txtTitle}>{renderPrice(detail?.price)}</AppText>
                </View>
                <View style={{...styles.viewRow,marginVertical:12}}>
                    <AppText style={styles.txtAddress}>{t("shipping")}</AppText>
                    <AppText style={styles.txtTitle}>{renderPrice(0)}</AppText>
                </View>
                <IconDots width={Device.width - Spacing.width70} />
                <View style={{...styles.viewRow,marginTop:12}}>
                    <AppText style={{...styles.txtAddress}}>{t("totalPrice").toUpperCase()}</AppText>
                        <AppText style={{...styles.txtTitle,fontSize:FontSize.Font18}}>{renderPrice(detail?.price)}</AppText>
                </View>
            </View>
        </View>
    )
}
