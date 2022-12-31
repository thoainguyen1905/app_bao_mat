import React from "react";
import {Image, SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import {Field, FieldArray, useFormik} from "formik";
import {setAccountToken} from "@redux";
import {AppButton, AppImage, AppImageAvatar, AppText, HeaderScreen, NotLoginApp} from "@components";
import {styles} from "./styles";
import {useModel} from "./Profile.hook";
import {t} from "i18next";
import {
    IconAbout,
    IconAddress,
    IconLeft,
    IconOrder,
    IconPassword,
    IconQA,
    IconSetting,
    IconUser, logoApp2,
    NoAvatar
} from "@assets";
import {Colors, Spacing} from "@theme";
import {navigate, SCREEN_ROUTE} from "@navigation";
const initialValues = {
    friends: [
        {
            name: '',
            email: '',
        },
    ],
};
export const Profile =(props:any)=>{

    const {token,infoUser,logoutApp}=useModel(props)
    const RenderInfo=()=>{
        return(
            <View style={styles.viewInfo}>
                <AppImageAvatar uri={infoUser?.avatar} style={styles.imageUser}/>
                <View style={{marginLeft:Spacing.width16}}>
                    <AppText style={styles.txtName}>{infoUser?.fullName}</AppText>
                    <AppText style={styles.txtEmail}>{infoUser?.email}</AppText>
                </View>
            </View>
        )
    }
    // @ts-ignore
    const RenderView=({name,icon,callback})=>{
        return(
            <TouchableOpacity style={styles.viewRow} onPress={callback}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={{backgroundColor:"rgba(242, 239, 239, 0.77)",padding:10,marginRight:10,borderRadius:8}}>
                        {icon()}
                    </View>
                    <AppText style={styles.txtTitle}>{name}</AppText>
                </View>
                <IconLeft/>
            </TouchableOpacity>
        )
    }

    const renderView=()=>{
        if(token){
            return(
                <ScrollView style={{height:"100%"}} showsVerticalScrollIndicator={false}>
                    <RenderInfo/>
                    <RenderView icon={()=>{
                        return(<IconUser/>)
                    }} name={t("infoUser")} callback={()=>navigate(SCREEN_ROUTE.INFO_USER)}/>
                    <RenderView icon={()=>{
                        return(<IconPassword/>)
                    }} name={t("changePassword")} callback={()=>navigate(SCREEN_ROUTE.CHANGE_PASSWORD)}/>
                    <RenderView icon={()=>{
                        return(<IconSetting/>)
                    }} name={t("setting")} callback={()=>navigate(SCREEN_ROUTE.SETTING)}/>
                    <RenderView icon={()=>{
                        return(<IconOrder/>)
                    }} name={t("order")} callback={()=>navigate(SCREEN_ROUTE.ORDER)}/>
                    <RenderView icon={()=>{
                        return(<IconAddress/>)
                    }} name={t("address")} callback={()=>navigate(SCREEN_ROUTE.ADDRESS)}/>

                    <RenderView icon={()=>{
                        return(<IconQA/>)
                    }} name={t("privacyPolicy")} callback={()=>navigate(SCREEN_ROUTE.PrivacyPolicy)}/>
                    <RenderView icon={()=>{
                        return(<IconAbout/>)
                    }} name={t("termsOfUse")} callback={()=>navigate(SCREEN_ROUTE.TermsOfUse)}/>
                    <RenderView icon={()=>{
                        return(<Image style={{width:24,height:24}} source={logoApp2} />)
                    }} name={t("aboutUS")} callback={()=>navigate(SCREEN_ROUTE.ABOUT_US)}/>
                    <TouchableOpacity style={{...styles.viewRow,backgroundColor:Colors.colorMain2,marginHorizontal:Spacing.height16,marginTop:Spacing.height30,borderRadius:8,justifyContent:'center'}} onPress={logoutApp}>
                            <AppText style={{...styles.txtTitle,color:Colors.white}}>{t("logout").toUpperCase()}</AppText>
                    </TouchableOpacity>
                </ScrollView>
            )
        }else {
            return <NotLoginApp/>
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeaderScreen name={t('profile')} isIconClose={false}/>
            {renderView()}
        </SafeAreaView>
    )
}
