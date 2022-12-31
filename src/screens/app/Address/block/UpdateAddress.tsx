import React from "react";
import {ScrollView, View} from "react-native";
import {
    AppButton,
    AppCheckbox, AppDropDown,
    AppInput,
    AppInputAddress,
    AppText,
    HeaderScreen,
    LoadingScreen,
    SelectDrop
} from "@components";
import {t} from "i18next";
import {styles} from "../styles";
import {Colors, Shadow, Spacing} from "@theme";
import {useModel} from "./UpdateAddress.hook";
import {getAllWard} from "@services";

export const UpdateAddress =(props:any)=>{
    const {loading,values, errors, touched,refName,
        callApiDistricts,callApiWards,
        setFieldValue,handleSubmit,params,city,districts,wards}=useModel(props)
    console.log("values:",values?.wardName)
    return(
        <View style={styles.container}>
            <HeaderScreen name={params?t('updateAddress'):t('addAddress')}/>
            {/*<KeyboardAwareScrollView*/}
            {/*    contentContainerStyle={styles.containerAddress}>*/}

                <ScrollView style={styles.containerAddress} showsVerticalScrollIndicator={false}>
                    <AppInputAddress
                        value={values.name}
                        onChangeText={(value) => setFieldValue('name', value)}
                        placeholder={t('plpName')}
                        label={t('full_name')}
                        ref={refName}
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
                        ref={refName}
                        returnKeyType={'next'}
                        // onSubmitEditing={()=>{refPassword.current.focus()}}
                        keyboardType="email-address"
                        error={errors.name}
                        placeholderTextColor={Colors.border}
                        touched={touched.name}
                    />



                    {/*<AppText style={{fontWeight:'400',marginHorizontal:Spacing.width16,marginBottom:10}}>{t("titleAddressDef")}</AppText>*/}
                    <AppDropDown
                        onSelect={(item:any)=>{
                            setFieldValue('cityName',  item.name)
                            setFieldValue('cityId',  item.id)
                            callApiDistricts(item.id)
                        }}
                        defaultValue={values?.cityName}
                        keyName={'name'}
                        data={city}
                        label={t("city")}
                        placeholder={t("plpCity")}
                        styleContainer={{
                            marginBottom:Spacing.width16,
                            borderWidth:1,
                            borderColor:'rgba(0, 0, 0, 0.08)',
                            borderRadius:8
                        }}
                        style={{backgroundColor:Colors.white,}}
                        touched={touched.cityName}
                        error={errors.cityName}
                    />
                    <AppDropDown
                        onSelect={(item:any)=>{
                            // setFieldValue('district', item)
                            setFieldValue('districtName', item.name)
                            setFieldValue('districtId', item.id)
                            callApiWards(item.id)
                        }}
                        defaultValue={values?.districtName}
                        data={districts}
                        keyName={'name'}
                        label={t("district")}
                        placeholder={t("plpDistrict")}
                        styleContainer={{
                            marginBottom:Spacing.width16,
                            borderWidth:1,
                            borderColor:'rgba(0, 0, 0, 0.08)',
                            borderRadius:8
                        }}
                        style={{backgroundColor:Colors.white,}}
                        touched={touched.districtName}
                        error={errors.districtName}
                    />
                    <AppDropDown
                        onSelect={(item:any)=>{
                            setFieldValue('wardName',  item.name)
                            setFieldValue('wardId',  item.id)
                        }}
                        defaultValue={values?.wardName}
                        data={wards}
                        keyName={'name'}
                        label={t("ward")}
                        placeholder={t("plpWard")}
                        styleContainer={{
                            marginBottom:Spacing.width16,
                            borderWidth:1,
                            borderColor:'rgba(0, 0, 0, 0.08)',
                            borderRadius:8
                        }}
                        style={{backgroundColor:Colors.white,}}
                        touched={touched.wardName}
                        error={errors.wardName}
                    />
                    <AppInputAddress
                        value={values.address}
                        onChangeText={(value) => setFieldValue('address', value)}
                        placeholder={t('plpAddressDetail')}
                        label={t('addressDetail')}
                        ref={refName}
                        returnKeyType={'next'}
                        // onSubmitEditing={()=>{refPassword.current.focus()}}
                        keyboardType="email-address"
                        error={errors.address}
                        placeholderTextColor={Colors.border}
                        touched={touched.address}
                    />
                    <AppCheckbox
                        status={values.defaultAddress}
                        style={{marginHorizontal:Spacing.width16}}
                        onSelect={(value)=>{
                            setFieldValue('defaultAddress', value)
                        }}
                        label={t("defAddress")}
                    />
                    <AppButton
                        onPress={()=>handleSubmit()}
                        label={params?t("save").toUpperCase():t("add").toUpperCase()} style={styles.btnSave}/>
                </ScrollView>
            {/*</KeyboardAwareScrollView>*/}
            <LoadingScreen status={loading}/>
        </View>
    )
}
