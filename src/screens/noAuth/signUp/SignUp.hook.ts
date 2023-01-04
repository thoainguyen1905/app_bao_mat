import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useRef, useState} from 'react';
import {useFormik} from 'formik';
import {setAccountToken} from '@redux';
import * as Yup from 'yup';
import {registerApp} from '@services';
import {showMessage} from 'react-native-flash-message';
import {t} from 'i18next';
import {Colors} from '@theme';
import {navigate, SCREEN_ROUTE} from '@navigation';

export function useModel(props: any) {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const {t} = useTranslation();
  const refEmail = useRef<any>(null);
  const refPassword = useRef<any>(null);
  const refUsername = useRef<any>(null);
  const refRePassword = useRef<any>(null);
  const [loading, setLoading] = useState(false);
  // @ts-ignore
  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .min(2, 'Too Short!')
      .max(70, 'Too Long!')
      .email()
      .required(t('validateEmail')),
    full_name: Yup.string()
      .min(0, 'Too Short!')
      .max(70, 'Too Long!')
      .required(t('errorName')),
    password: Yup.string()
      .min(6, t('errorPassword'))
      .required(t('errorPassword')),
    re_password: Yup.string()
      .min(6, t('errorPassword'))
      .test('passwords-match', t('errorPassword3'), function (value) {
        return values.password === value;
      }),
  });
  const {values, errors, touched, setFieldValue, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      re_password: '',
      full_name: '',
      password: '',
    },
    onSubmit: values => {
      setLoading(true);
      let param = {
        email: values.email,
        password: values?.password,
        phone: '',
        fullName: values?.full_name,
      };
      console.log(values);
      registerApp(
        param,
        res => {
          console.log(res);
          setLoading(false);
          showMessage({
            message: t('registerApp'),
            type: 'info',
            backgroundColor: Colors.lightBlue,
            color: Colors.white,
          });
          //   navigate(SCREEN_ROUTE.LOGIN);
        },
        error => {
          console.log('error:', error);
          setLoading(false);
          showMessage({
            message: t('errorRegister'),
            type: 'info',
            backgroundColor: Colors.error,
            color: Colors.white,
          });
        },
      )
        .then()
        .catch(error => {
          console.log('error:', error);
          setLoading(false);
          showMessage({
            message: t('errorRegister'),
            type: 'info',
            backgroundColor: Colors.error,
            color: Colors.white,
          });
        });
    },
    validationSchema: SignupSchema,
  });
  return {
    nav,
    t,
    refPassword,
    refEmail,
    refUsername,
    refRePassword,
    values,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    loading,
  };
}
