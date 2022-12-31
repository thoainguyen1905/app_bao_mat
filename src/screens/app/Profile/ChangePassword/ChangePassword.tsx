import React from "react";
import {useModel} from "./ChangePassword.hook";
import {View} from "react-native";
import {styles} from "./styles";
import {AppButton, AppInput, AppInputAddress, HeaderScreen} from "@components";
import { t } from "i18next";
import {Colors} from "@theme";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
export const ChangePassword =(props:any)=>{
    const {loading,values, errors, touched, setFieldValue,handleSubmit,}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('changePassword')}/>
            <KeyboardAwareScrollView style={{marginTop:16}}>
            <AppInputAddress
                value={values.passwordOld}
                onChangeText={(value) => setFieldValue('passwordOld', value)}
                placeholder={t('plpPassword')}
                label={t('passwordOld')}
                returnKeyType={'next'}
                // onSubmitEditing={()=>{refPassword.current.focus()}}
                keyboardType="email-address"
                error={errors.passwordOld}
                placeholderTextColor={Colors.border}
                touched={touched.passwordOld}
                secureTextEntry
            />
            <AppInputAddress
                value={values.passwordNew}
                onChangeText={(value) => setFieldValue('passwordNew', value)}
                placeholder={t('plpPassword')}
                label={t('passwordNew')}
                returnKeyType={'next'}
                // onSubmitEditing={()=>{refPassword.current.focus()}}
                keyboardType="email-address"
                error={errors.passwordNew}
                secureTextEntry
                placeholderTextColor={Colors.border}
                touched={touched.passwordNew}
            />
            <AppInputAddress
                value={values.re_password}
                onChangeText={(value) => setFieldValue('re_password', value)}
                placeholder={t('plpPassword')}
                label={t('re_password')}
                secureTextEntry
                returnKeyType={'next'}
                // onSubmitEditing={()=>{refPassword.current.focus()}}
                keyboardType="email-address"
                error={errors.re_password}
                placeholderTextColor={Colors.border}
                touched={touched.re_password}
            />
            </KeyboardAwareScrollView>
            <AppButton label={t("save").toUpperCase()} style={styles.btnCheckout} onPress={handleSubmit}/>
        </View>
    )
}
