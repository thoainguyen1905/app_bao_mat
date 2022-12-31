import {useDispatch, useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {
    getAddressAccount,
    setAccountToken,
    setAddressSelect,
    setAddressUserProfile,
    setListCart,
    setUserProfile
} from "@redux";
import {useEffect, useRef, useState} from "react";
import {useFormik} from "formik";
import {deleteAddress, getAllAddress, loginApp} from "@services";
import {api} from "@api";
import {showMessage} from "react-native-flash-message";
import {Colors} from "@theme";
import * as Yup from "yup";
import {useTranslation} from "react-i18next";
import {goBack, NavigationUtils, SCREEN_ROUTE} from "@navigation";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {t} = useTranslation();
    const param:any=useRoute()
    const {params}=param
    const data=useSelector(getAddressAccount)
    const [loading,setLoading]=useState<boolean>(false)
    const [refreshing, setRefreshing] = useState(false);
    const refName=useRef<any>(null)

    useEffect(()=>{callApiAddress()},[])
    const callApiAddress=()=>{
        getAllAddress(undefined,(res:any)=>{
            if(res.length >0){
                setRefreshing(false)
                let addressSelect=res?res?.filter((elm:any)=>elm.defaultAddress===1)[0]:[]
                console.log({res})
                dispatch(setAddressSelect(addressSelect))
                dispatch(setAddressUserProfile(res))
            }else {
                dispatch(setAddressUserProfile([]))
                setRefreshing(false)
            }


        },()=>{}).then()
    }
    const onRefresh = () => {
        setRefreshing(true);
        callApiAddress()
    };
    const onDeleteAddress=(item:any)=>{
        setLoading(true)
        deleteAddress(item?.id,(res)=>{
            callApiAddress()
            setLoading(false)
        }).then().finally(()=>  setLoading(false))
    }
    const goToClick=(item:any)=>{
        if(params?.type){
            dispatch(setAddressSelect(item))
            goBack()
        }else {
            NavigationUtils.navigate(SCREEN_ROUTE.ADD_ADDRESS,{item:item})
        }
    }
    return{
        nav,
        data,loading,
        onRefresh,refreshing, setRefreshing,onDeleteAddress,goToClick
    }
}
