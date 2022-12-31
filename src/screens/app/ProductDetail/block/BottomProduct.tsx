import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors, FontSize, FontWithBold_Barlow, Spacing} from '@theme';
import {useTranslation} from 'react-i18next';
import {IconCart} from '@assets';
import {useSelector} from 'react-redux';
import {getTokenUserFromStore} from '@redux';
import {navigate, SCREEN_ROUTE} from '@navigation';

type BottomProductType = {
  onBuy: () => void;
  onCart: () => void;
  status: boolean;
};
export const BottomProduct = (props: BottomProductType) => {
  const {t} = useTranslation();
  const token = useSelector(getTokenUserFromStore);
  const {onBuy, onCart, status} = props;
  if (token) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            ...styles.btnBuy,
            backgroundColor: !status ? Colors.colorMain : Colors.gray,
          }}
          disabled={false}
          onPress={onBuy}
        >
          <Text style={styles.txtBuy}>{t('buy')}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.btnCart,
            backgroundColor: !status ? Colors.colorMain2 : Colors.gray,
          }}
          disabled={false}
          onPress={onCart}
        >
          <Text style={styles.txtBuy}>
            <IconCart iconFillColor={Colors.white} />
          </Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={{...styles.container, justifyContent: 'center'}}>
        <TouchableOpacity
          style={styles.btnLogin}
          disabled={false}
          onPress={() => navigate(SCREEN_ROUTE.LOGIN)}
        >
          <Text style={styles.txtBuy}>{t('txtSignIn')}</Text>
        </TouchableOpacity>
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: Spacing.height62,
    paddingHorizontal: Spacing.width16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
  },
  btnBuy: {
    backgroundColor: Colors.colorMain,
    height: Spacing.height50,
    width: '75%',
    borderRadius: Spacing.height8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCart: {
    backgroundColor: Colors.colorMain2,
    height: Spacing.height50,
    width: '20%',
    borderRadius: Spacing.height8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnLogin: {
    backgroundColor: Colors.colorMain2,
    height: Spacing.height50,
    width: '70%',
    borderRadius: Spacing.height8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBuy: {
    ...FontWithBold_Barlow.Bold_Barlow_700,
    fontSize: FontSize.Font16,
    color: Colors.white,
  },
});
