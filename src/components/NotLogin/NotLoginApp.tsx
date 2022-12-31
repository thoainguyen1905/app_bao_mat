import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {FontWithBold, IconUserName, Spacing} from "@assets";
import {useSelector} from "react-redux";
import {navigate, SCREEN_ROUTE} from "@navigation";
import {Colors, FontSize} from "@theme";
import {useTranslation} from "react-i18next";
export interface NotLoginAppType {

}
export const NotLoginApp =(props:NotLoginAppType)=>{
    const {t} = useTranslation();
    const {}=props
    return(
        <View style={styles.container}>
           {/*<View style={{alignItems:'center',alignSelf:'center',backgroundColor:'red'}}>*/}
               <IconUserName/>
               <Text style={styles.warnTxt}>{t('txtNotLogin')}</Text>
               <TouchableOpacity style={styles.btnSignIn} onPress={() => navigate(SCREEN_ROUTE.LOGIN)}>
                   <Text style={styles.signinBtn}>{t('txtSignIn')}</Text>
               </TouchableOpacity>
               {/*<TouchableOpacity style={styles.btnNotRegistered}>*/}
                   <Text style={styles.txtNotRegistered}>{t('notRegistered')}</Text>
               {/*</TouchableOpacity>*/}
                <TouchableOpacity onPress={() => navigate(SCREEN_ROUTE.SIGNUP)}>
                    <Text style={styles.txtCreateAccount}>{t('createAccount')}</Text></TouchableOpacity>
           {/*</View>*/}
                   </View>
    )
}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: "center",
        justifyContent:'center'
    },
    warnTxt: {
        width:Spacing.width240,
        textAlign:'center',
        marginTop: Spacing.height20,
        fontSize:FontSize.Font21,
        ...FontWithBold.Bold_600,
        color:Colors.colorMain
    },
    btnSignIn:{
        marginTop: Spacing.height50,
       backgroundColor:Colors.colorMain2,
        width:Spacing.width200,
        height:52,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:Spacing.height8
    },
    signinBtn: {
        fontSize:FontSize.Font18,
        color:Colors.white,
        ...FontWithBold.Bold_500,
    },
    txtNotRegistered:{
        fontSize:FontSize.Font15,
        ...FontWithBold.Bold_400,
        color:'#ACACAC',
        marginTop:Spacing.height20
    },
    btnNotRegistered:{
        marginTop:Spacing.height20
    },
    txtCreateAccount:{
        fontSize:FontSize.Font16,
        ...FontWithBold.Bold_600,
        color:Colors.dark
    },
})
