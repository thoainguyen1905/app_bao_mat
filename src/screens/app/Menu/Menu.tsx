import React from "react";
import {useModel} from "./Menu.hook";
import {FlatList, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {AppImage, AppText, HeaderScreen} from "@components";
import {Colors, FontSize, Spacing} from "@theme";
import { t } from "i18next";
import {Device} from "../../../assets/device";
import {IconLeft} from "@assets";

export const Menu =(props:any)=>{
    const {listCategory,childCategory,onSelectCategory,count,onViewProduct}=useModel(props)
    // @ts-ignore
    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity style={index!==count?styles.viewCategory:styles.viewCategorySelect} onPress={()=>onSelectCategory(item,index)}>
                <AppImage uri={item?.icon} style={styles.iconImage}/>
                <AppText>{item?.name?.toUpperCase()}</AppText>
            </TouchableOpacity>
        )
    }
    // @ts-ignore
    const renderItemChild=({item,index})=>{
        return(
            <TouchableOpacity style={styles.viewCategoryChild} onPress={()=>onViewProduct(item)}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <AppImage uri={item?.icon} style={styles.iconImageChild}/>
                    <AppText style={{fontSize:FontSize.Font12}}>{item?.name?.toUpperCase()}</AppText></View>
                    <IconLeft/>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('category')} isIconClose={false}/>
            <FlatList
                data={listCategory}
                contentContainerStyle={{
                    height:Spacing.height82,

                    marginVertical:Spacing.height16
                }}
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                keyExtractor={(item,index)=>`categories_menu_${index.toString()}`}
            />
            <FlatList
                data={childCategory}
                // style={{marginVertical:Spacing.height16}}
                renderItem={renderItemChild}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                   height:Device.height-Spacing.height125-Spacing.height16-Spacing.height16-Spacing.height16,
                    marginHorizontal:Spacing.width16

                }}
                ListFooterComponent={() => {
                    return(
                        <TouchableOpacity style={styles.viewCategoryChild} onPress={()=>onViewProduct(listCategory[count])}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <AppText style={{fontSize:FontSize.Font12}}>{t("view_product")}</AppText></View>
                            <IconLeft/>
                        </TouchableOpacity>
                    )

                }}
                keyExtractor={(item,index)=>`categories_child_menu_${index.toString()}`}
            />
        </View>
    )
}
