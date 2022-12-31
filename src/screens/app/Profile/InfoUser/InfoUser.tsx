import React from "react";
import {useModel} from "./InfoUser.hook";
import {TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {AppButton, AppImageAvatar, AppInputAddress, AppText, HeaderScreen, LoadingScreen} from "@components";
import {t} from "i18next";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Colors, Spacing} from "@theme";
import {IconSetting} from "@assets";
export const InfoUser =(props:any)=>{
    const {loading,values, errors, touched, setFieldValue,handleSubmit,onAvatar}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('infoUser')}/>
            <KeyboardAwareScrollView style={{marginTop:16}}>
                <View style={{...styles.viewAvatar, marginBottom:Spacing.width16}}>
                    <AppImageAvatar uri={values.avatar} style={styles.viewAvatar}/>
                    <TouchableOpacity onPress={()=>onAvatar()} style={{position:'absolute',bottom:0,right:0,backgroundColor:Colors.colorMain,borderRadius:100,padding:3}}>
                        <IconSetting/>
                    </TouchableOpacity>
                </View>
                <AppInputAddress
                    value={values.name}
                    onChangeText={(value) => setFieldValue('name', value)}
                    placeholder={t('plpName')}
                    label={t('full_name')}
                    returnKeyType={'next'}
                    // onSubmitEditing={()=>{refPassword.current.focus()}}
                    keyboardType="email-address"
                    error={errors.name}
                    placeholderTextColor={Colors.border}
                    touched={touched.name}
                />

                <AppInputAddress
                    value={values.phone}
                    onChangeText={(value) => setFieldValue('phone', value)}
                    placeholder={t('plpPhone')}
                    label={t('phone')}
                    returnKeyType={'next'}
                    // onSubmitEditing={()=>{refPassword.current.focus()}}
                    keyboardType="numeric"
                    error={errors.phone}
                    placeholderTextColor={Colors.border}
                    touched={touched.phone}
                />
               <View style={{marginHorizontal:Spacing.width16}}>
                   <AppText style={{fontWeight:'400',marginBottom:8}}>{t("gender")}</AppText>
                  <View style={styles.viewRow}>
                      <TouchableOpacity style={styles.viewRow2} onPress={()=>setFieldValue('isMale', !values?.isMale)}>
                          <View style={values?.isMale?styles.iconCheckbox:styles.iconCheckBoxSelect}/>
                          <AppText style={styles.txtMale}>{t('male')}</AppText>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.viewRow2} onPress={()=>setFieldValue('isMale', !values?.isMale)}>
                          <View style={!values?.isMale?styles.iconCheckbox:styles.iconCheckBoxSelect}/>
                          <AppText style={styles.txtMale}>{t('female')}</AppText>
                      </TouchableOpacity>
                  </View>
               </View>

            </KeyboardAwareScrollView>
            <AppButton label={t("save").toUpperCase()} style={styles.btnCheckout} onPress={()=>handleSubmit()}/>
            <LoadingScreen status={loading}/>
        </View>
    )
}
