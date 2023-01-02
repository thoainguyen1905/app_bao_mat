import {api, API_URL} from '@api';
import {showMessage} from 'react-native-flash-message';
import {t} from 'i18next';
import {Colors} from '@theme';
export const getCart = async (
  payload: any,
  onSuccess: (res: any) => void,
  onError: (res: any) => void,
) => {
  try {
    const res: any = await api.get(API_URL.cart);
    console.log('cart:', res);
    return onSuccess(res.data);
  } catch (e) {
    return onError(e);
  }
};
export const addCart = async (
  payload: any,
  onSuccess: (res: any) => void,
  onError: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.cart, payload);

    showMessage({
      message: t('addCartSuccess'),
      type: 'info',
      backgroundColor: Colors.lightBlue,
      color: Colors.white,
    });
    return onSuccess(res.data);
  } catch (e) {
    showMessage({
      message: t('addCartError'),
      type: 'info',
      backgroundColor: Colors.error,
      color: Colors.white,
    });
    return onError(e);
  }
};
export const deleteCart = async (
  id: string,
  onSuccess: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.delete(API_URL.cart + '/' + id, undefined);
    showMessage({
      message: t('deleteCartSuccess'),
      type: 'info',
      backgroundColor: Colors.lightBlue,
      color: Colors.white,
    });
    return onSuccess(res.data);
  } catch (e) {
    showMessage({
      message: t('deleteCartError'),
      type: 'info',
      backgroundColor: Colors.error,
      color: Colors.white,
    });
    return onError ? onError(e) : null;
  }
};
export const updateCart = async (
  id: string,
  payload: any,
  onSuccess: (res: any) => void,
  onError: (res: any) => void,
) => {
  try {
    const res: any = await api.put(API_URL.cart + '/' + id, payload);

    return onSuccess(res.data);
  } catch (e) {
    return onError(e);
  }
};
export const onCheckoutCart = async (
  payload: any,
  onSuccess: (res: any) => void,
  onError: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.checkout, payload);

    // showMessage({
    //     message:t("checkoutCartSuccess"),
    //     type: "info",
    //     backgroundColor: Colors.lightBlue,
    //     color: Colors.white,
    // });
    return onSuccess(res.data);
  } catch (e) {
    showMessage({
      message: t('checkoutCartError'),
      type: 'info',
      backgroundColor: Colors.error,
      color: Colors.white,
    });
    return onError(e);
  }
};
export const onCheckoutOnePay = async (
  payload: any,
  onSuccess: (res: any) => void,
  onError: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.onepay, payload);

    return onSuccess(res.data);
  } catch (e) {
    showMessage({
      message: t('checkoutCartError'),
      type: 'info',
      backgroundColor: Colors.error,
      color: Colors.white,
    });
    return onError(e);
  }
};

export const getUrlOnepay = async (
  payload: any,
  onSuccess: (res: any) => void,
  onError: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.onepay, payload);
    return onSuccess(res.data);
  } catch (e) {
    return onError(e);
  }
};
