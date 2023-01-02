import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {styles} from './styes';
import {AppImage, AppText} from '@components';
import {t} from 'i18next';
import {renderPrice} from '../../../../utils/PriceUtils';
import {Colors, FontSize, Spacing} from '@theme';
import {IconDots} from '@assets';
import {Device} from '../../../../assets/device';
type InfoCartType = {
  product: any;
};
export const InfoCart = (props: InfoCartType) => {
  const {product} = props;
  const {products, total} = product;
  // @ts-ignore
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.viewCart}>
        <AppImage uri={item?.product?.imageUrl[0]} style={styles.imgCart} />
        <View style={{marginLeft: 8}}>
          <AppText style={{fontWeight: '500'}} numberOfLines={2}>
            {item?.product?.name}
          </AppText>
          <AppText
            style={{
              fontSize: FontSize.Font14,
              color: Colors.gray,
              marginVertical: 8,
              fontWeight: '500',
            }}
          >
            {item?.product?.color?.length > 0 ? item?.product?.color : ''}{' '}
            {item?.product?.size?.length > 0 ? ', ' + item?.product?.size : ''}
          </AppText>
          <AppText style={{fontSize: FontSize.Font12, fontWeight: '500'}}>
            x{item?.quantity}{' '}
            <AppText
              style={{
                fontSize: FontSize.Font12,
                color: Colors.red,
                fontWeight: '500',
              }}
            >
              {renderPrice(item?.product?.price)}
            </AppText>
          </AppText>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.containerAddress}>
      <AppText style={styles.txtTitle}>{t('infoCart')}</AppText>
      <AppText style={styles.txtCountPrice}>
        ({products?.length + ' ' + t('product')})
      </AppText>
      <FlatList
        data={products}
        contentContainerStyle={{
          marginVertical: 16,
        }}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={true}
        horizontal={true}
      />

      <View style={{borderTopColor: Colors.borderColor, borderTopWidth: 1}}>
        <View style={{...styles.viewRow, marginTop: 12}}>
          <AppText style={styles.txtAddress}>{t('numProduct')}</AppText>
          <AppText style={styles.txtTitle}>{products?.length}</AppText>
        </View>
        <View style={{...styles.viewRow, marginTop: 12}}>
          <AppText style={styles.txtAddress}>{t('price2')}</AppText>
          <AppText style={styles.txtTitle}>{renderPrice(total)}</AppText>
        </View>
        <View style={{...styles.viewRow, marginVertical: 12}}>
          <AppText style={styles.txtAddress}>{t('shipping')}</AppText>
          <AppText style={styles.txtTitle}>{renderPrice(0)}</AppText>
        </View>
        <IconDots width={Device.width - Spacing.width70} />
        <View style={{...styles.viewRow, marginTop: 12}}>
          <AppText style={{...styles.txtAddress}}>
            {t('totalPrice').toUpperCase()}
          </AppText>
          <View
            style={{
              backgroundColor: Colors.colorMain2,
              padding: 16,
              borderRadius: 8,
            }}
          >
            <AppText
              style={{
                ...styles.txtTitle,
                fontSize: FontSize.Font18,
                color: Colors.white,
              }}
            >
              {renderPrice(total)}
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
};
