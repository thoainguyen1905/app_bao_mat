import React from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {Colors, FontSize, Shadow, Spacing} from "@theme";
import {IconHome, IconNotifile, SearchIcon} from "@assets";
import {useTranslation} from "react-i18next";
import {NavigationUtils, SCREEN_ROUTE} from "@navigation";

export const HeaderBar =()=>{
    const {t} = useTranslation();
    return(
        <View style={styles.container}>
            <View style={{...styles.viewRow,justifyContent:'space-between',marginBottom:Spacing.height8}}>
                <View style={styles.viewRow}>
                    <IconHome iconFillColor={Colors.placeholder} style={{marginRight:8}}/>
                    <Text style={styles.txtAddress}>123 Cau Giay, Ha Noi</Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    NavigationUtils.navigate(SCREEN_ROUTE.NOTIFICATION)
                }}>
                    <IconNotifile/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerSearch}>

                <TouchableOpacity style={styles.viewSearch} onPress={()=>NavigationUtils.navigate(SCREEN_ROUTE.SEARCH)}>
                    <Text numberOfLines={1} style={styles.txtSearch}>{t('txtSearch')}</Text>
                    <SearchIcon/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export const styles=StyleSheet.create({
    container:{
        paddingHorizontal:Spacing.width16,
    },
    containerSearch:{
        paddingVertical:Spacing.height8,
        // paddingHorizontal:Spacing.width16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    txtAddress:{
        fontSize:FontSize.Font12,
        fontFamily:'Poppins-Light',
        color:Colors.placeholder,
    },
    viewSearch:{
        width:'100%',
        height:Spacing.height50,
       backgroundColor:Colors.white,
        ...Shadow.normal,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:Spacing.width16,
        borderRadius:Spacing.height8
    },
    txtSearch:{
      fontSize:FontSize.Font14,
      fontFamily:'Poppins-Light',
        color:Colors.placeholder,
        maxWidth:'90%'
    },
    btnNotification:{
        width:'15%',
        height:Spacing.height50,
        backgroundColor:'green',
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
    }
})
