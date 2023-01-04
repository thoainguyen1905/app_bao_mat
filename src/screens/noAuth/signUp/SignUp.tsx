import React from 'react';
import {useModel} from './SignUp.hook';
import {Image, SafeAreaView, Text, View} from 'react-native';
import {styles} from './styles';
import {HeaderAuth} from '../../../components/HeaderAuth';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppButton, AppInput, AppText, LoadingScreen} from '@components';
import {Colors, Spacing} from '@theme';
import {logoApp2} from '@assets';
import {navigate, SCREEN_ROUTE} from '@navigation';
export const SignUp = (props: any) => {
  const {
    nav,
    t,
    refPassword,
    refEmail,
    loading,
    refRePassword,
    values,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
  } = useModel(props);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderAuth />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: Spacing.width16,
        }}
      >
        <Image source={logoApp2} style={styles.logoApp} />
        <AppText variant={'title3'} fontWeight="600" marginBottom={'l'}>
          {t('titleSigUp')} <Text style={styles.txtApp}>{t('nameApp')}</Text>
        </AppText>

        <AppInput
          value={values.email}
          onChangeText={value => setFieldValue('email', value)}
          placeholder={t('plpUserName')}
          label={t('email')}
          ref={refEmail}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            refPassword.current.focus();
          }}
          keyboardType="email-address"
          error={errors.email}
          placeholderTextColor={Colors.border}
          touched={touched.email}
        />

        <AppInput
          value={values.full_name}
          onChangeText={value => setFieldValue('full_name', value)}
          placeholder={t('plpName')}
          label={t('full_name')}
          ref={refEmail}
          returnKeyType={'next'}
          onSubmitEditing={() => {
            refPassword.current.focus();
          }}
          // keyboardType="email-address"
          error={errors.full_name}
          placeholderTextColor={Colors.border}
          touched={touched.full_name}
        />
        <AppInput
          value={values.password}
          onChangeText={value => setFieldValue('password', value)}
          placeholder={t('plpPassword')}
          label={t('title_password')}
          marginTop={'xs'}
          ref={refPassword}
          secureTextEntry
          placeholderTextColor={Colors.border}
          error={errors.password}
          returnKeyType={'done'}
          touched={touched.password}
        />
        <AppInput
          value={values.re_password}
          onChangeText={value => setFieldValue('re_password', value)}
          placeholder={t('plpPassword')}
          label={t('title_password')}
          marginTop={'xs'}
          ref={refPassword}
          secureTextEntry
          placeholderTextColor={Colors.border}
          error={errors.re_password}
          returnKeyType={'done'}
          touched={touched.re_password}
        />
        <View style={{...styles.viewRow, marginTop: Spacing.height20}}>
          <AppButton
            label={t('can')}
            onPress={() => {
              nav.goBack();
            }}
            style={styles.btnCan}
          />
          <AppButton
            label={t('sigUp')}
            onPress={() => {
              handleSubmit();
              // dispatch(setAccountToken('adsadajsd12281'))
              // navigate(SCREEN_ROUTE.OTP);
            }}
            style={styles.btnSigUp}
          />
        </View>
      </KeyboardAwareScrollView>
      <LoadingScreen status={loading} />
    </SafeAreaView>
  );
};
