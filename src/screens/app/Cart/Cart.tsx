import React from "react";
import {useModel} from "./Cart.hook";
import {FlatList, RefreshControl, View} from "react-native";
import {AppButton, AppDialog, AppText, HeaderScreen, NotLoginApp} from "@components";
import {t} from "i18next";
import {styles} from "./styles";
import {ItemCart} from "./block/ItemCart";
import {IconCart3} from "@assets";
import {Spacing} from "@theme";
import {Device} from "../../../assets/device";
import {NavigationUtils, SCREEN_ROUTE} from "@navigation";
import {renderPrice} from "../../../utils/PriceUtils";
export const Cart =(props:any)=>{
    const {infoCart,isVisible,setIsVisible,onDeleteCart,setItemCartDelete,onSelectCart,
        indexCartDelete,setIndexCartDelete,checkoutCart,token,refreshing,onRefresh,onSaveCart
    }=useModel(props)
    console.log(infoCart)
    // @ts-ignore
    const renderItem=({item,index})=>{
        return (
            <ItemCart
                item={item}
                index={index}
                onSelect={(value)=>{
                    onSelectCart(value,index)
                }}
                onUpdate={(value)=>{
                    onSaveCart(value,index)
                }}
                onClose={()=> {
                    setItemCartDelete(item)
                    setIsVisible(true)
            }}/>
        )

    }
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('cart')} isIconClose={false}/>
            {infoCart.count!==0 && token &&<AppText style={styles.txtTitle}>- {t('countCart').replace('count',infoCart?.count)}</AppText>}

            {token?(
                <View>
                    <FlatList
                        data={infoCart.list}
                        renderItem={renderItem}
                        style={{
                            height: Device.height - Spacing.height160 - Spacing.height160,
                        }}
                        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                        ListEmptyComponent={()=>{
                            return(
                                <View style={{alignItems:'center',justifyContent:'center',flex:1, height: Device.height - Spacing.height50 - Spacing.height90,}}>
                                    <IconCart3
                                        width={Spacing.width110}
                                        height={Spacing.height100}
                                    />
                                    <AppText style={styles.txtTitleEmpty}>{t('empty_cart')}</AppText>
                                    <AppText  style={styles.txtDesEmpty}>{t('how_to_choice')}</AppText>
                                    <AppButton style={styles.btn} label={t("shop_now")} onPress={()=>NavigationUtils.navigate(SCREEN_ROUTE.HOME_PAGE)}/>
                                </View>
                            )
                        }}
                    />
                    {infoCart?.count !==0&&(
                        <View style={styles.viewBottom}>
                            <AppText style={styles.txtPrice}>{t("txt_price")+" "+renderPrice(infoCart?.total)}</AppText>
                            <AppButton onPress={checkoutCart} label={t('checkout').toUpperCase()} style={styles.btnCheckout}/>
                        </View>    )}
                </View>

            ):(
                <NotLoginApp/>
                )}
            <AppDialog
                onClose={()=>{setIsVisible(false)}}
                title={t('remove_item')}
                content={t('how_to_remove')}
                modalVisible={isVisible}
                onSuccess={()=>onDeleteCart()}
            />
        </View>
    )
}
