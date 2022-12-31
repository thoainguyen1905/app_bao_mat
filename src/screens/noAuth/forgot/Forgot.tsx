import React from "react";
import {useModel} from "./Forgot.hook";
import {TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {AppButton, AppInput, AppText, HeaderScreen} from "@components";
import { t } from "i18next";
import {Colors} from "@theme";
export const Forgot =(props:any)=>{
    const {step,values, errors, touched, setFieldValue,handleSubmit,onForgot,
        SignupSchema,setStep}=useModel(props)

    const renderVerifyEmail=()=>{
        return(
            <View style={styles.form}>
                <AppText style={styles.txt}>{t("desForgot")}</AppText>
                <AppInput
                    value={values.email}
                    onChangeText={(value) => setFieldValue('email', value)}
                    placeholder={t('plpUserName')}
                    label={t('email')}
                    keyboardType="email-address"
                    placeholderTextColor={Colors.border}
                    error={errors.email}
                    returnKeyType={'done'}
                    touched={touched.email}
                />
                <AppButton
                    label={t('verify').toUpperCase()}
                    onPress={() => {
                        handleSubmit()
                    }}
                    style={styles.btnForgot}
                />
            </View>
        )
    }
    const renderVerifyCode=()=>{
        return(
            <View style={styles.form}>
                <AppText style={styles.txt}>{t("desVerifyCode").replace('EMAIL',values.email)}</AppText>
                <AppInput
                    value={values.code}
                    onChangeText={(value) => setFieldValue('code', value)}
                    placeholder={t('plpOTP')}
                    label={t('codeOTP')}
                    keyboardType="numeric"
                    placeholderTextColor={Colors.border}
                    error={errors.code}
                    returnKeyType={'done'}
                    touched={touched.code}
                />

                <TouchableOpacity style={{alignItems:'center'}} onPress={()=>onForgot(values.email)}>
                    <AppText style={{fontWeight:'400',textDecorationLine:'underline'}}>{t("resetCode")}</AppText>
                </TouchableOpacity>
              <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:16}}>
                  <AppButton
                      label={t('back').toUpperCase()}
                      onPress={() => {
                          setStep(1)
                      }}
                      style={styles.btnCansel}
                  />
                  <AppButton
                      label={t('verifyCode').toUpperCase()}
                      onPress={() => {
                          handleSubmit()
                      }}
                      style={styles.btnForgot}
                  />
              </View>
            </View>
        )
    }
    const renderChangePassword=()=>{
        return(
            <View style={styles.form}>
                <AppText style={styles.txt}>{t("desForgot")}</AppText>
                <AppInput
                    value={values.password}
                    onChangeText={(value) => setFieldValue('password', value)}
                    placeholder={t('plpPassword')}
                    label={t('title_password')}
                    keyboardType="email-address"
                    placeholderTextColor={Colors.border}
                    error={errors.password}
                    returnKeyType={'done'}
                    secureTextEntry
                    touched={touched.password}
                />
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginHorizontal:16}}>
                    <AppButton
                        label={t('back').toUpperCase()}
                        onPress={() => {
                            setStep(2)
                        }}
                        style={styles.btnCansel}
                    />
                    <AppButton
                        label={t('changePassword').toUpperCase()}
                        onPress={() => {
                            handleSubmit()
                        }}
                        style={styles.btnForgot}
                    />
                </View>
            </View>
        )
    }
    const renderBody=()=>{
        switch (step) {
            case 1:
                return renderVerifyEmail()
            case 2:
                return renderVerifyCode()
            case 3:
                return renderChangePassword()
        }
    }
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('forgot')}/>
            {renderBody()}
        </View>
    )
}
