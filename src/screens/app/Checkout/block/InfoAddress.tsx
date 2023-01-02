import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {styles} from './styes';
import {AppText} from '@components';
import {t} from 'i18next';
import {Spacing} from '@theme';
type InfoAddressType = {
  address: any;
  onEdit: () => void;
};
export const InfoAddress = (props: InfoAddressType) => {
  const {address, onEdit} = props;

  if (address) {
    return (
      <TouchableOpacity style={styles.containerAddress} onPress={onEdit}>
        <View style={styles.viewRow}>
          <AppText style={styles.txtTitle}>{t('infoAddress')}</AppText>
          <AppText style={styles.txtEdit}>{t('edit')}</AppText>
        </View>

        <View style={{marginTop: Spacing.width8}}>
          <AppText style={styles.txtName}>
            {t('full_name')} :{' '}
            <AppText style={{...styles.txtName, fontWeight: '400'}}>
              {address?.name}
            </AppText>
          </AppText>
          <AppText style={styles.txtName}>
            {t('phone')} :{' '}
            <AppText style={{...styles.txtName, fontWeight: '400'}}>
              {address?.phone}
            </AppText>
          </AppText>
          <AppText style={styles.txtAddress}>
            {t('address1')} :{' '}
            <AppText style={{...styles.txtAddress, fontWeight: '400'}}>
              {address?.address}
            </AppText>
          </AppText>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity style={styles.containerAddress} onPress={onEdit}>
        <AppText>{t('AddAddress')}</AppText>
      </TouchableOpacity>
    );
  }
};
