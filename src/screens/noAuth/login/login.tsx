import React from 'react';
import {useModel} from './login.hook';
import {Box, Colors} from '@theme';
import {AppButton, AppInput, AppText, LoadingScreen} from '@components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  Image,
  Platform,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HeaderAuth} from '../../../components/HeaderAuth';
import {styles} from './styles';
import {
  IconApple,
  IconFacebook,
  IconGG,
  logoApp,
  logoApp2,
  Spacing,
} from '@assets';
import {navigate, SCREEN_ROUTE} from '@navigation';

export const Login = (props: any) => {
  const {
    nav,
    t,
    refPassword,
    refEmail,
    values,
    errors,
    touched,
    setFieldValue,
    handleSubmit,
    loading,
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
          {t('titleLogin')} <Text style={styles.txtApp}>{t('nameApp')}</Text>
        </AppText>

        {/*<AppText variant={"title3"} fontWeight="600" marginBottom={"l"}>LOGIN</AppText>*/}
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
        <View style={{...styles.viewRow, marginTop: Spacing.height20}}>
          <TouchableOpacity
            onPress={() => navigate(SCREEN_ROUTE.FORGOT)}
            style={{width: '35%', marginRight: '14%'}}
          >
            <Text style={styles.txtForgot}>{t('forgot')}</Text>
          </TouchableOpacity>
          <AppButton
            label={t('sigin')}
            onPress={() => {
              handleSubmit();
              // dispatch(setAccountToken('adsadajsd12281'))
            }}
            style={styles.btnLogin}
          />
        </View>

        <View style={styles.viewRow}></View>

        <View style={styles.registerContainer}>
          <Text
            style={[
              styles.registerTxt,
              {
                marginTop:
                  Platform.OS === 'ios' ? Spacing.height45 : Spacing.height90,
              },
            ]}
          >
            {t('notRegistered')}
          </Text>
          <TouchableOpacity onPress={() => navigate(SCREEN_ROUTE.SIGNUP)}>
            <Text style={styles.registerBtn}>{t('createAccount')}</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
      <LoadingScreen status={loading} />
    </SafeAreaView>
  );
};
