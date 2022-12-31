import React from "react";
import {useModel} from "./Address.hook";
import {FlatList, Image, RefreshControl, Text, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {AppButton, AppImage, AppText, HeaderScreen, LoadingScreen, SelectDrop} from "@components";
import {t} from "i18next";
import {navigate, NavigationUtils, SCREEN_ROUTE} from "@navigation";
import {DataFilter} from "@utils";
import {Colors, Spacing} from "@theme";
import {IconClose, IconNoProduct, IconSold} from "@assets";
import {renderImage} from "../../../utils/ImageUtils";
import {renderPrice} from "../../../utils/PriceUtils";
export const Address =(props:any)=>{
    const {data,loading, onRefresh,refreshing, goToClick,onDeleteAddress}=useModel(props)
    // @ts-ignore
    const renderItem =({item,index})=>{
        return (
            <TouchableOpacity style={item?.defaultAddress===1?styles.viewItemAddressSelect:styles.viewItemAddress} onPress={()=>goToClick(item)}>
                    <AppText style={{...styles.txtName,color:item?.defaultAddress===1?Colors.white:Colors.black}}>{item?.name}</AppText>
                    <AppText style={{...styles.txtPhone,color:item?.defaultAddress===1?Colors.white:Colors.black}}>{item?.phone}</AppText>
                    <AppText style={{...styles.txtAddress,color:item?.defaultAddress===1?Colors.white:Colors.black}}>{item?.address}</AppText>
                    <TouchableOpacity
                        onPress={()=>{
                            onDeleteAddress(item)
                        }}
                        style={styles.btnClose}>
                        <IconClose width={Spacing.width20} height={Spacing.width20}/>
                    </TouchableOpacity>
            </TouchableOpacity>
        )
    }
    console.log({data})
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('address')} onAdd={()=>{
                navigate(SCREEN_ROUTE.ADD_ADDRESS)
            }}/>

            <FlatList
                data={data}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                contentContainerStyle={{
                    margin:Spacing.width16,
                    // flex:1
                }}
                renderItem={renderItem}
                ListEmptyComponent={()=>{
                    return(
                        <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
                            <AppButton label={t("addAddress").toUpperCase()}
                                       onPress={()=>navigate(SCREEN_ROUTE.ADD_ADDRESS)}
                                       style={styles.btnEmpty}/>
                        </View>
                    )
                }}
                keyExtractor={(item,index)=>`list_address_${index.toString()}`}
            />
            <LoadingScreen status={loading}/>
        </View>
    )
}
