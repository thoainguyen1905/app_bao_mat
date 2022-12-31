import {NoAvatar, NoImage} from '@assets';
import {Box, useTheme} from '@theme';
import React, {useEffect, useState} from 'react';
import {ImageStyle, StyleProp, ActivityIndicator} from 'react-native';
import FastImage, {ResizeMode, Source} from 'react-native-fast-image';
import {Device} from "../../assets/device";

interface propsImage {
  uri: string;
  style?: StyleProp<ImageStyle> | any;
  resizeMode?: ResizeMode;
  defaultSource?: Source;
  imgSource?: Source;
  checkNetworking?: boolean;
}

export const AppImage = React.memo((props: propsImage) => {
  const {uri, style, resizeMode, defaultSource, checkNetworking, imgSource} = props;
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const {themeColor} = useTheme();
  useEffect(() => {
    setLoading(true);
  }, [uri]);

  useEffect(() => {
    if (uri && checkNetworking) {
      fetch(uri).then(data => {
        if (data.status !== 200) {
          setError(true);
        }
      });
    }
  }, [uri, checkNetworking]);
  const source = isError ? NoImage : imgSource ? imgSource : uri ? {uri} : defaultSource || NoImage
  return (
    <Box justifyContent={'center'} alignItems="center" >
      <FastImage
        source={source}
        style={style}
        resizeMode={resizeMode}
        onLoadEnd={() => {
          setLoading(false)
        }}
        onError={() => setLoading(false)}
      />
      {isLoading && (
        <ActivityIndicator
          color={themeColor.primary}
          style={{position: 'absolute'}}
        />
      )}
    </Box>
  );
});
export const AppImageAvatar = React.memo((props: propsImage) => {
  const {uri, style, resizeMode, defaultSource, checkNetworking, imgSource} = props;
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const {themeColor} = useTheme();
  useEffect(() => {
    setLoading(true);
  }, [uri]);

  useEffect(() => {
    if (uri && checkNetworking) {
      fetch(uri).then(data => {
        if (data.status !== 200) {
          setError(true);
        }
      });
    }
  }, [uri, checkNetworking]);
  const source = isError ? NoAvatar : imgSource ? imgSource : uri ? {uri} : defaultSource || NoAvatar
  return (
      <Box justifyContent={'center'} alignItems="center" >
        <FastImage
            source={source}
            style={style}
            resizeMode={resizeMode}
            onLoadEnd={() => {
              setLoading(false)
            }}
            onError={() => setLoading(false)}
        />
        {isLoading && (
            <ActivityIndicator
                color={themeColor.primary}
                style={{position: 'absolute'}}
            />
        )}
      </Box>
  );
})
