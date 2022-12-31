import {Home, PrivacyPolicy, Profile, TermsOfUse} from '@screens';
import {CanvasScreen} from '../screens/app/Canvas/Canvas';

export const SCREEN_ROUTE = {
  AUTH_STACK: 'AUTH_STACK',
  MAIN_ROOT: 'MAIN_ROOT',
  MAIN_STACK: 'MAIN_STACK',
  HOME_PAGE: 'HOME_PAGE',
  CART_PAGE: 'CART_PAGE',
  MENU_PAGE: 'MENU_PAGE',
  PROFILE_PAGE: 'PROFILE_PAGE',
  MAIN_PAGE: 'MAIN_PAGE',
  DISCOVER_PAGE: 'DISCOVER_PAGE',
  ACCOUNT_PAGE: 'ACCOUNT_PAGE',
  NOTIFICATION: 'NOTIFICATION',
  SEARCH: 'SEARCH',
  PRODUCT_DETAIL: 'PRODUCT_DETAIL',
  CHECKOUT: 'CHECKOUT',
  SETTING: 'SETTING',
  ABOUT_US: 'ABOUT_US',
  PrivacyPolicy: 'PrivacyPolicy',
  INFO_USER: 'INFO_USER',
  TermsOfUse: 'TermsOfUse',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
  FORM_PRODUCT: 'FORM_PRODUCT',
  ORDER: 'ORDER',
  ORDER_DETAIL: 'ORDER_DETAIL',
  ADDRESS: 'ADDRESS',
  ADD_ADDRESS: 'ADD_ADDRESS',
  WEBVIEW: 'WEBVIEW',
  //auth
  LOGIN: 'LOGIN',
  SIGNUP: 'SIGNUP',
  FORGOT: 'FORGOT',
  OTP: 'OTP',
};

export const ROUTER_BOTTOM_TAB = [
  {
    key: SCREEN_ROUTE.HOME_PAGE,
    route: Home,
  },
  {
    key: SCREEN_ROUTE.MAIN_PAGE,
    route: Home,
  },
  {
    key: SCREEN_ROUTE.DISCOVER_PAGE,
    route: Home,
  },
  {
    key: SCREEN_ROUTE.PROFILE_PAGE,
    route: Profile,
  },
];
