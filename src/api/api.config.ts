//if you using .env pls change domain in below line.

export const ApiConfigs = {
  baseURL: 'https://api-ecommerce.herokuapp.com',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    timeout: 30000,
  },
  timeout: 30000,
};

export const API_URL = {
  //category
  category: '/category',
  product: '/product/all-paging',
  productDetail: '/product/',
  //auth
  login: '/user/login',
  register: '/user/register',
  forgot: '/user/forgot-password',
  verifyCode: '/user/verify-otp',
  resetPassword: '/user/reset-password',
  changePassword: '/user/change-password',
  user: '/user/me',
  //address
  address: '/address',
  cart: '/cart',
  checkout: '/cart/check-out',
  onepay: '/onepay/checkout',
  city: '/city',
  district: '/district/',
  ward: '/ward/',
  //order
  order: '/order',
  orderDetail: '',
  //banner
  banner: '/banner',

  //upload
  uploadImage: '/upload/single',
  uploadImages: '/upload/array',
};
