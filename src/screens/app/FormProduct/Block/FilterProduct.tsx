import React, {useState} from "react";
import {ScrollView, TextInput, TouchableOpacity, View} from "react-native";
import {AppButton, AppText} from "@components";
import {styles} from "./styles";
import {t} from "i18next";
import {Colors, Spacing} from "@theme";
import {Dropdown} from "@assets";
import MultiSlider from "@ptomasroos/react-native-multi-slider";

type FilterProductType={
    onClose?:any,
    onFilter:(value:any)=>void
}
type formViewType={
    title:string,value:any,setValue:any,
    text1:string,
    text2:string
}
export const FilterProduct=(props:FilterProductType)=>{

    const {onClose,onFilter}=props;
    const [sortBy,setSortBy]=useState<number>(0)
    const [sortPrice,setSortPrice]=useState<any>(0)
    const [sortDate,setSortDate]=useState<number>(0)
    const [priceStart,setPriceStart]=useState<any>()
    const [priceEnd,setPriceEnd]=useState<any>()
    // 0 not select
    // 1 select (tang ,a-z, ms nhat)
    // 2 select (giam ,z-a ,cu nhat)

    const onReset =()=>{
        setSortBy(0)
        setSortDate(0)
        setPriceEnd('')
        setPriceStart('')
        setSortPrice(0)
    }
    const FormView =(data:formViewType)=>{
        const {title,value,text2,text1,setValue}=data;
        return(
            <View style={styles.formView}>
                <AppText style={styles.txt_formView}>{title}</AppText>
                <View style={styles.formViewBtn}>
                    <TouchableOpacity style={styles.btnFormView} onPress={()=>setValue(1)}>
                        {value===1?( <View style={styles.radioButtonSelect}>
                            <View style={styles.radioButtonChild}/>
                        </View>):(<View style={styles.radioButton}/>)}
                        <AppText style={styles.txtText}>{text1}</AppText>
                    </TouchableOpacity>
                    <TouchableOpacity style={{...styles.btnFormView}} onPress={()=>setValue(2)}>
                        {value===2?( <View style={styles.radioButtonSelect}>
                            <View style={styles.radioButtonChild}/>
                        </View>):(<View style={styles.radioButton}/>)}
                        <AppText style={styles.txtText}>{text2}</AppText>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const renderPrice=()=>{
        return(
            <View style={styles.formView2}>
                <AppText style={{...styles.txt_formView,width:'100%',marginBottom:Spacing.height8}}>{t("txt_about_price")}</AppText>
                <View style={{...styles.formViewBtn,marginBottom:Spacing.height16,width:'90%'}}>
                    <TextInput
                        value={priceStart}
                        style={styles.input}
                        placeholderTextColor={Colors.placeholder}
                        placeholder={'đ'}
                        keyboardType={"numeric"}
                        onChangeText={(text:any)=>{
                            setPriceStart(text)
                        }}
                    />
                    <AppText style={{marginHorizontal:Spacing.width10}}>-</AppText>
                    <TextInput
                        value={priceEnd}
                        style={{...styles.input,}}
                        placeholderTextColor={Colors.placeholder}
                        placeholder={'đ'}
                        keyboardType={"numeric"}
                        onChangeText={(text:any)=>{
                            setPriceEnd(text)
                        }}
                    />
                </View>
            </View>
        )
    }
    const onFilterProduct =()=>{
        let params={
            sortName:sortBy,
            sortPrice:sortPrice,
            sortDate:sortDate,
            priceStart:priceStart,
            priceEnd:priceEnd
        }
            onFilter(params)
    }
    return(
        <View style={styles.container}>
            <View style={styles.viewHeader}>
                <TouchableOpacity onPress={onClose} style={{...styles.viewDropDown,paddingLeft:Spacing.width16}}>
                   <Dropdown/>
                </TouchableOpacity>
                {/*<AppText style={styles.txtFilter}>{t("txt_filter")}</AppText>*/}
                <TouchableOpacity onPress={onReset} style={{...styles.viewDropDown,paddingRight:Spacing.width16}}>
                    <AppText style={styles.txtReset}>{t("reset")}</AppText>
                </TouchableOpacity>
            </View>

        {/*    price*/}
           <ScrollView>
               <FormView
                   title={t("txt_price")}
                   value={sortPrice}
                   setValue={(num:number)=>setSortPrice(num)}
                   text1={t('txt_tang')}
                   text2={t('txt_giam')}
               />


               <FormView
                   title={t("txt_sort")}
                   value={sortBy}
                   setValue={(num:number)=>setSortBy(num)}
                   text1={t('a_z')}
                   text2={t('z_a')}
               />

               <FormView
                   title={t("txt_date")}
                   value={sortDate}
                   setValue={(num:number)=>setSortDate(num)}
                   text1={t('news')}
                   text2={t('old')}
               />
               {renderPrice()}
               <AppButton label={t('txt_filter')} style={styles.btnFilter} onPress={onFilterProduct}/>
           </ScrollView>
        </View>
    )
}
