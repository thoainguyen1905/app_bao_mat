import React from "react";
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors, FontSize, FontWithBold_Barlow, Shadow} from "@theme";
import {useTranslation} from "react-i18next";
import {Spacing} from "@assets";
import {styles} from "./styles";
import {AppImage} from "@components";
import {navigate, SCREEN_ROUTE} from "@navigation";
type CategoryRowType={
    data:any
}
export const CategoryRow =(props:CategoryRowType)=>{
    const {data}=props
    const {t} = useTranslation();
    // @ts-ignore
    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity onPress={()=>{
                navigate(SCREEN_ROUTE.FORM_PRODUCT,{name:item?.name,type:"category",item:item})
            }} style={styles.viewCategory} >

                <View style={styles.viewImg}>
                    <AppImage uri={item?.icon} style={styles.img} resizeMode={"contain"}/>
                </View>
                <Text style={styles.txt} numberOfLines={1}>{item?.name?.toUpperCase()}</Text>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.viewRow}>
                <Text style={styles.title}>{t('category')}</Text>
                {/*<Text style={styles.des}>{t('viewAll')}</Text>*/}
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal={true}/>
        </View>
    )
}
