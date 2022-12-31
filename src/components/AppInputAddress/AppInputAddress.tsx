import React, {forwardRef, LegacyRef, useState} from 'react';
import {BORDER_RADIUS, Box, Colors, Theme, useTheme} from '@theme';
import {
  KeyboardTypeOptions,
  Pressable, ReturnKeyTypeOptions, Text,
  TextInput,
  TextInputProps, View,
  ViewProps
} from 'react-native';
import {styles} from './styles';
import {AppText} from '../AppText';
import {SpacingProps, TypographyProps} from '@shopify/restyle';
import {Eye, EyeActive, Spacing} from '@assets';
 interface appInputProps extends TextInputProps {
  label?: string;
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  error?: string;
  touched?: boolean;
  returnKeyType?: ReturnKeyTypeOptions | undefined
}


export const AppInputAddress = forwardRef((props: appInputProps & SpacingProps<Theme> &
  TypographyProps<Theme> & ViewProps, ref: any)  =>{
  const {
    label,
    value,
    onChangeText,
    placeholder,
    secureTextEntry,
    maxLength,
    keyboardType,
    error,
    touched,
    returnKeyType
  } = props;
  const [isFocus, setFocus] = useState(false);
  const [isPrivateText, setSecureTextEntry] = useState(secureTextEntry);
  const {themeColor} = useTheme();

  return (
   <View style={{marginHorizontal:Spacing.width16,marginBottom:Spacing.height16}}>
     <View style={styles.container}>
       {!!label && <Text style={styles.txt}>{label}:</Text>}
     <View style={{...styles.inputStyle,...isFocus && styles.btnActive,justifyContent:'center'}}>
       <TextInput
           value={value}
           onChangeText={onChangeText}
           secureTextEntry={isPrivateText}
           placeholder={placeholder}
           style={[{color: themeColor.textColor,height: Spacing.height55,width: secureTextEntry?'85%':'100%'}]}
           onFocus={() => setFocus(true)}
           onBlur={() => setFocus(false)}
           maxLength={maxLength}
           ref={ref}
           returnKeyType={returnKeyType?returnKeyType:'default'}
           keyboardType={keyboardType}
           autoCapitalize="none"
           placeholderTextColor={themeColor.placeHoderColor}
           clearButtonMode="while-editing"
       />
       {secureTextEntry && <Box position={"absolute"} right={10}>
         <Pressable onPress={() => {
           setSecureTextEntry(prv => !prv);
         }} >
           {isPrivateText ? <Eye /> : <EyeActive />}
         </Pressable>
       </Box>}
     </View>
     </View>
     {!!error && touched && <AppText variant={"title3"} fontSize={11} style={{color: Colors.lightRed,marginVertical:Spacing.height6}} >{error}</AppText>}

   </View>

)
})
