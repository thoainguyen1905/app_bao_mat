import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {AppImage, AppQuantity, AppText} from '@components';
import {renderPrice} from '../../../../utils/PriceUtils';
import {IconClose} from '@assets';
import {showMessage} from 'react-native-flash-message';
import {t} from 'i18next';
import {Colors} from '@theme';
import debounce from 'lodash/debounce';
import {updateCart} from '@services';
type ItemCartType = {
  item: any;
  index: number;
  onSelect: (value: any) => void;
  onClose?: () => void;
  onUpdate?: (value: any) => void;
};
export const ItemCart = (props: ItemCartType) => {
  const {item, onUpdate, onSelect, onClose} = props;
  const [amount, setAmount] = useState(1);
  useEffect(() => {
    setAmount(item?.quantity);
  }, [item?.quantity]);
  const updateCartProduct = debounce((value: number) => {
    let param = {
      quantity: value,
    };
    updateCart(
      item?.id,
      param,
      () => {
        let newItem = item;
        newItem = {
          ...newItem,
          quantity: value,
        };
        if (onUpdate) {
          onUpdate(newItem);
        }
      },
      () => {
        setAmount(item?.quantity);
      },
    ).then();
  }, 1000);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        onSelect(item);
      }}
    >
      {/*<View style={item?.select?styles.checkboxSelect:styles.checkbox}/>*/}
      <View style={styles.containerView}>
        <AppImage
          uri={
            typeof item?.product?.imageUrl === 'string'
              ? `[${item?.product?.imageUrl}][0]`
              : item?.product?.imageUrl[0]
          }
          style={styles.image}
          resizeMode={'contain'}
        />
        <View style={{width: '68%', marginLeft: 8}}>
          <View
            style={{...styles.containerView, justifyContent: 'space-between'}}
          >
            <AppText style={styles.txt_name}>{item?.product?.name}</AppText>
            <TouchableOpacity style={styles.btnClose} onPress={onClose}>
              <IconClose />
            </TouchableOpacity>
          </View>
          <AppText style={styles.txt_price}>
            {renderPrice(item?.product?.price)}
          </AppText>
          <AppText style={styles.txt_size}>Den/M</AppText>
          <View
            style={{...styles.containerView, justifyContent: 'space-between'}}
          >
            <AppQuantity
              maxCount={item?.product?.quantity}
              style={styles.containerQuantity}
              amount={amount}
              setAmount={(value: any) => {
                setAmount(value);
                updateCartProduct(value);
              }}
            />
            <AppText>{renderPrice(item?.price)}</AppText>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
