import {useDispatch, useSelector} from 'react-redux';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  getProfileUser,
  setAddressSelect,
  setAddressUserProfile,
  setListCart,
} from '@redux';
import {useEffect, useState} from 'react';
import {goBack, navigate, SCREEN_ROUTE} from '@navigation';
import {
  getAllAddress,
  getCart,
  getUrlOnepay,
  onCheckoutCart,
  onCheckoutOnePay,
} from '@services';
import {showMessage} from 'react-native-flash-message';
import {t} from 'i18next';
import {Colors} from '@theme';
import {api, API_URL, ApiConfigs} from '@api';
import {Linking} from 'react-native';
export function useModel(props: any) {
  const dispatch = useDispatch();
  const nav = useNavigation();
  const param: any = useRoute();
  const infoUserName = useSelector(getProfileUser);
  const {params} = param;
  const [addressDef, setAddressDef] = useState<any>([]);
  const [isPayment, setIsPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    callApiAddress();
  }, []);
  const callApiAddress = () => {
    getAllAddress(
      undefined,
      (res: any) => {
        if (res.length > 0) {
          let addressSelect = res
            ? res?.filter((elm: any) => elm.defaultAddress === 1)[0]
            : [];
          dispatch(setAddressSelect(addressSelect));
          dispatch(setAddressUserProfile(res));
          setAddressDef(infoUserName?.addressSelect);
        } else {
          dispatch(setAddressUserProfile([]));
          setAddressDef('');
        }
      },
      () => {},
    ).then();
  };
  // useEffect(()=>{
  //     if(infoUserName.address){
  //         setAddressDef(infoUserName?.addressSelect)
  //     }
  // },[infoUserName])

  const onEditAddress = () => {
    navigate(SCREEN_ROUTE.ADDRESS, {
      type: 'Checkout',
    });
  };
  const callApiCart = () => {
    getCart(
      undefined,
      (res: any) => {
        if (res.length > 0) {
          dispatch(setListCart(res));
          setLoading(false);
          setShowSuccess(true);
        } else {
          dispatch(setListCart([]));
          setLoading(false);
          setShowSuccess(true);
        }
      },
      () => {},
    ).then();
  };
  const onCheckout = () => {
    if (!addressDef) {
      return showMessage({
        message: t('AddAddress'),
        type: 'info',
        backgroundColor: Colors.error,
        color: Colors.white,
      });
    }
    let newProduct = params?.items.products.map((elm: any) => {
      return {
        productDetailId: elm.productDetailId,
        quantity: elm?.quantity,
        orderDetailId: elm?.id,
      };
    });

    let param = {
      name: addressDef.name,
      phone: addressDef.phone,
      address: addressDef.address,
      paymentMethod: isPayment ? 0 : 1,
      products: newProduct,
      price: params?.items?.total,
      // "discount": 50000
    };
    if (!isPayment) {
      setShowSuccess(true);
      setLoading(true);
      onCheckoutCart(
        param,
        res => {
          callApiCart();
        },
        () => {
          setShowSuccess(false);
          setLoading(false);
        },
      ).then();
    } else {
      let body = {
        order: {
          amount: params?.items?.total,
          customerId: `'${infoUserName.userProfile.id}'`,
        },
        transactionType: 'domestic',
      };
      onCheckoutOnePay(
        body,
        res => {
          navigate(SCREEN_ROUTE.WEBVIEW, {
            url: res.url,
            title: t('checkout'),
            callback: () => {
              setShowSuccess(true);
              setTimeout(() => {
                setLoading(true);
                onCheckoutCart(
                  param,
                  res => {
                    callApiCart();
                  },
                  () => {
                    setLoading(false);
                    setShowSuccess(false);
                  },
                ).then();
              }, 200);
            },
          });
        },
        err => {
          console.log({err});
        },
      ).then();
    }
  };

  return {
    nav,
    params,
    infoUserName,
    addressDef,
    loading,
    onEditAddress,
    isPayment,
    setIsPayment,
    onCheckout,
    showSuccess,
    setShowSuccess,
  };
}
