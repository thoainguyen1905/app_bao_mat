import React, {useEffect, useState} from 'react';
import {FlatList, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Box, Colors, useTheme} from '@theme';
import {AppButton, AppInput, AppScrollWrapBottomTab, GlobalService, LargeList, VirtualList} from '@components';
import {AppchangeLanguage} from '@instances';
import {ENUM_LANGUAGE} from '@translations';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {useModel} from "./Home.hook";
import {HeaderBar} from "./block/HeaderBar";
import {BannerRow} from "./block/Banner";
import {CategoryRow} from "./block/CategoryRow";
import {FormRow} from "./block/FormRow";
import {DataTest} from "./block/DataTest";
import {NavigationApp, NavigationUtils, SCREEN_ROUTE} from "@navigation";

const Home = (props:any) => {
  const {updateTheme} = useTheme();
  const {t} = useTranslation();
  const [isDark, setDark] = useState(true);
  const [value, setValue] = useState('');

  useEffect(() => {
    GlobalService.hideLoading();
  }, []);
  const onSwitchLang = AppchangeLanguage();
  const insets = useSafeAreaInsets();

  const {banners,categories,bestSells,saleProduct,newProduct}=useModel(props)

  return (
    <View style={styles.container}>
      <HeaderBar/>
     <ScrollView>
       <BannerRow data={banners}/>
       <CategoryRow data={categories}/>
       <FormRow data={bestSells} name={t('bestSell').toUpperCase()} callback={()=>{NavigationUtils.navigate(SCREEN_ROUTE.FORM_PRODUCT,{name:t('bestSell')})}}/>
       <FormRow data={newProduct} name={t('newProduct').toUpperCase()} callback={()=>{NavigationUtils.navigate(SCREEN_ROUTE.FORM_PRODUCT,{name:t('newProduct')})}}/>
       <FormRow data={saleProduct} name={t('saleProduct').toUpperCase()} callback={()=>{NavigationUtils.navigate(SCREEN_ROUTE.FORM_PRODUCT,{name:t('saleProduct')})}}/>
     </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  btn1: {marginBottom: 20},
  container:{
    flex:1,
    backgroundColor:Colors.background,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  }
});

export {Home};
