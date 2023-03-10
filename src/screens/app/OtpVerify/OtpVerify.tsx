import {AppButton, AppInput, AppText, LoadingScreen} from '@components';
import {navigate} from '@navigation';
import {Spacing} from '@theme';
import {t} from 'i18next';
import React, {useEffect, useState} from 'react';
import {Image, SafeAreaView, Text, View, TextInput} from 'react-native';
import {styles} from './style';
import {logoApp2} from '@assets';
import {useSelector} from 'react-redux';
import {getProfileUserFromStore} from '@redux';
import {getOtpVerify, postOtpVerify} from '@services';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import OTPInputView from '@twotalltotems/react-native-otp-input';
// import {HeaderAuth} from 'src/components/HeaderAuth';

export const OtpVerify = () => {
  const [verifyState, setVerifyState] = useState<string>();
  const userProfile: any = useSelector(getProfileUserFromStore);
  useEffect(() => {
    const getOtp = async () => {
      try {
        const res = await getOtpVerify();
        console.log('call_otp', res);
      } catch (error) {
        console.log(error);
      }
    };
    getOtp();
  }, [userProfile]);
  return (
    <SafeAreaView style={styles.container}>
      {/* <HeaderAuth /> */}
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
          {t('Vui lòng xác thực tài khoản của bạn')}
        </AppText>
        {/* <TextInput style={styles.textInput} /> */}
        <OTPInputView
          style={{width: '90%', height: 50}}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            setVerifyState(code);
          }}
        />
        <View style={{...styles.viewRow, marginTop: Spacing.height20}}>
          <AppButton
            label={'Xác thực'}
            onPress={async () => {
              try {
                const res = await postOtpVerify({
                  email: userProfile.email,
                  otp: verifyState,
                });
              } catch (error) {
                console.log(error);
              }
            }}
            style={styles.btnSigUp}
          />
        </View>
      </KeyboardAwareScrollView>
      <LoadingScreen status={false} />
    </SafeAreaView>
  );
};
