import {api, API_URL} from '@api';
import {showMessage} from 'react-native-flash-message';
import {Colors} from '@theme';
import {t} from 'i18next';

export const getAllAddress = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.get(API_URL.address, undefined, payload);
    console.log('address:', res);

    if (res.data) {
      return onSuccess ? onSuccess(res.data) : null;
    } else {
      return onError ? onError(res.data) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const addAddress = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.address, payload);

    if (res.data) {
      showMessage({
        message: t('addAddressSuccess'),
        type: 'info',
        backgroundColor: Colors.lightBlue,
        color: Colors.white,
      });
      return onSuccess ? onSuccess(res.data) : null;
    } else {
      showMessage({
        message: t('addAddressError'),
        type: 'info',
        backgroundColor: Colors.error,
        color: Colors.white,
      });
      return onError ? onError(res) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const updateAddress = async (
  id: string,
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.put(API_URL.address + '/' + id, payload);

    if (res) {
      showMessage({
        message: t('updateAddressSuccess'),
        type: 'info',
        backgroundColor: Colors.lightBlue,
        color: Colors.white,
      });
      return onSuccess ? onSuccess(res.data) : null;
    } else {
      showMessage({
        message: t('updateAddressError'),
        type: 'info',
        backgroundColor: Colors.error,
        color: Colors.white,
      });
      return onError ? onError(res.data) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const deleteAddress = async (
  id?: string,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.delete(API_URL.address + '/' + id, undefined);

    showMessage({
      message: t('deleteAddressSuccess'),
      type: 'info',
      backgroundColor: Colors.lightBlue,
      color: Colors.white,
    });
    return onSuccess ? onSuccess(res.data) : null;
  } catch (e) {
    showMessage({
      message: t('deleteAddressError'),
      type: 'info',
      backgroundColor: Colors.error,
      color: Colors.white,
    });
    return onError ? onError(e) : null;
  }
};
export const getAllCity = async (
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.get(API_URL.city, undefined, undefined);
    if (res.data) {
      return onSuccess ? onSuccess(res.data) : [];
    } else {
      return onError ? onError(res) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const getAllDistrict = async (
  id?: string,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.get(API_URL.district + id, undefined, undefined);
    if (res.data) {
      return onSuccess ? onSuccess(res.data) : [];
    } else {
      return onError ? onError(res) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const getAllWard = async (
  id?: string,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.get(API_URL.ward + id, undefined, undefined);
    if (res.data) {
      return onSuccess ? onSuccess(res.data) : [];
    } else {
      return onError ? onError(res) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
