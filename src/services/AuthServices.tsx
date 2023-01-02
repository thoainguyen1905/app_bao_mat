import {api, API_URL} from '@api';
import {showMessage} from 'react-native-flash-message';
import {t} from 'i18next';
import {Colors} from '@theme';
export const loginApp = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.login, payload);

    if (res.data) {
      return onSuccess ? onSuccess(res.data) : null;
    } else {
      return onError ? onError(res) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const registerApp = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.register, payload);

    if (res) {
      return onSuccess ? onSuccess(res.data) : null;
    } else {
      return onError ? onError(res.data) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const forgotApp = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.forgot, payload);

    if (res?.success) {
      showMessage({
        message: t('forgotSuccess'),
        type: 'info',
        backgroundColor: Colors.lightBlue,
        color: Colors.white,
      });
      return onSuccess ? onSuccess(res.data) : null;
    } else {
      showMessage({
        message: t('forgotError'),
        type: 'info',
        backgroundColor: Colors.error,
        color: Colors.white,
      });
      return onError ? onError(res) : null;
    }
  } catch (e) {
    showMessage({
      message: t('forgotError'),
      type: 'info',
      backgroundColor: Colors.error,
      color: Colors.white,
    });
    return onError ? onError(e) : null;
  }
};
export const verifyCodeApp = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.verifyCode, payload);

    if (res?.success) {
      showMessage({
        message: t('verifyCodeSuccess'),
        type: 'info',
        backgroundColor: Colors.lightBlue,
        color: Colors.white,
      });
      return onSuccess ? onSuccess(res) : null;
    } else {
      showMessage({
        message: t('verifyCodeError'),
        type: 'info',
        backgroundColor: Colors.error,
        color: Colors.white,
      });
      return onError ? onError(res) : null;
    }
  } catch (e) {
    showMessage({
      message: t('verifyCodeError'),
      type: 'info',
      backgroundColor: Colors.error,
      color: Colors.white,
    });
    return onError ? onError(e) : null;
  }
};
export const ResetPasswordApp = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.put(API_URL.resetPassword, payload);

    if (res?.success) {
      return onSuccess ? onSuccess(res?.data ? res?.data : []) : null;
    } else {
      return onError ? onError(res) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const changePasswordApp = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.put(API_URL.changePassword, payload);

    if (res === 'PASSWORD UPDATE SUCCESSFUL') {
      showMessage({
        message: t('changePasswordSuccess'),
        type: 'info',
        backgroundColor: Colors.lightBlue,
        color: Colors.white,
      });
      return onSuccess ? onSuccess(res.data ? res.data : null) : null;
    } else {
      return onError ? onError(res) : null;
    }
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const getUserDetail = async (
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.get(API_URL.user, undefined, undefined);

    return onSuccess ? onSuccess(res.data ? res.data : null) : null;
  } catch (e) {
    return onError ? onError(e) : null;
  }
};
export const updateUser = async (
  payload?: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    console.log({payload});
    const res: any = await api.put(API_URL.user, payload);
    if (res.data) {
      showMessage({
        message: t('updateInfo'),
        type: 'info',
        backgroundColor: Colors.lightBlue,
        color: Colors.white,
      });
      return onSuccess ? onSuccess(res.data ? res.data : null) : null;
    } else {
      showMessage({
        message: t('updateError'),
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

export const getOtpVerify = async (
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.get(API_URL.otp);
    console.log('dataverify =>>>>>', res);
    if (res.data) {
      showMessage({
        message: t('updateInfo'),
        type: 'info',
        backgroundColor: Colors.lightBlue,
        color: Colors.white,
      });
      return onSuccess ? onSuccess(res.data ? res.data : null) : null;
    } else {
      showMessage({
        message: t('updateError'),
        type: 'info',
        backgroundColor: Colors.error,
        color: Colors.white,
      });
      return onError ? onError(res) : null;
    }
  } catch (error) {
    return onError ? onError(error) : null;
  }
};

export const postOtpVerify = async (
  payload: any,
  onSuccess?: (res: any) => void,
  onError?: (res: any) => void,
) => {
  try {
    const res: any = await api.postNormal(API_URL.otp, payload);
    console.log({res});
    if (res.data) {
      showMessage({
        message: t('Xác thực email thành công'),
        type: 'info',
        backgroundColor: Colors.lightBlue,
        color: Colors.white,
      });
      return onSuccess ? onSuccess(res.data ? res.data : null) : null;
    } else {
      showMessage({
        message: t('Xác thực tài khoản không thành công'),
        type: 'info',
        backgroundColor: Colors.error,
        color: Colors.white,
      });
      return onError ? onError(res) : null;
    }
  } catch (error) {
    return onError ? onError(error) : null;
  }
};
