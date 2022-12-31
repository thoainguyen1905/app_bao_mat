import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import {useFormik} from 'formik';
import {setAccountToken, setUserProfile} from '@redux';
import {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {loginApp} from '@services';
import {showMessage} from 'react-native-flash-message';
import {Colors} from '@theme';
import {navigate, SCREEN_ROUTE} from '@navigation';
import {api} from '@api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useModel(props: any) {
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const nav = useNavigation();
  const [loading, setLoading] = useState(false);
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .email()
      .required(t('validateEmail')),
    password: Yup.string().email('Invalid email').required('Required'),
  });
  const {values, errors, touched, setFieldValue, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => {
      setLoading(true);
      loginApp(
        values,
        res => {
          setLoading(false);
          console.log(res);

          if (res.otp === null) {
            navigate(SCREEN_ROUTE.OTP);
          }
          api.setToken(res?.token).then(),
            setTimeout(() => {
              Promise.all([
                dispatch(setAccountToken(res?.token)),
                dispatch(setUserProfile(res)),
              ]).then();

              showMessage({
                message: t('loginSuccess'),
                type: 'info',
                backgroundColor: Colors.lightBlue,
                color: Colors.white,
              });
            }, 300);
        },
        () => {
          setLoading(false);
          showMessage({
            message: t('errorLogin'),
            type: 'info',
            backgroundColor: Colors.error,
            color: Colors.white,
          });
        },
      ).then();
      // dispatch(setAccountToken('adsadajsd12281'))
    },
    // validationSchema:SignupSchema
  });
  const refEmail = useRef<any>(null);
  const refPassword = useRef<any>(null);
  return {
    nav,
    t,
    refPassword,
    refEmail,
    values,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    SignupSchema,
    loading,
  };
}
