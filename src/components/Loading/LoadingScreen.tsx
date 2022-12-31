import { loadingGlobal } from '@assets';
import React from 'react';
import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import {Colors} from "@theme";
import {AppText} from "../AppText";
import { t } from 'i18next';
type LoadingScreenType={
  status:boolean
}
export const LoadingScreen = (props:LoadingScreenType) => {
  const {status}=props
  if(status){
    return (
        <View style={styles.absoluteFill}>
          <View style={styles.square}>
            <AppText style={{color:Colors.white,marginBottom:16}}>{t("loading")}</AppText>
            <ActivityIndicator size="large" color={Colors.white} />
          </View>
        </View>
    );
  }else {
    return null
  }
};
const styles = StyleSheet.create({
  absoluteFill: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    elevation: 999,
  },
  square: {
    padding: 20,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor:Colors.colorMain2,
    borderRadius:8
  },
  imgGif: {
    height: 150,
    width: 150,
    resizeMode: 'contain',
  },
});
