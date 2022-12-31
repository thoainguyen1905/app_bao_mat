import {useDispatch, useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useTranslation} from "react-i18next";
import {getAddressAccount, setAddressSelect, setAddressUserProfile} from "@redux";
import {useEffect, useRef, useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {addAddress, getAllAddress, getAllCity, getAllDistrict, getAllWard, updateAddress} from "@services";
import {goBack} from "@navigation";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {t} = useTranslation();
    const data=useSelector(getAddressAccount)
    const [loading,setLoading]=useState<boolean>(false)
    const {params}:any=useRoute()
    const refName=useRef<any>(null)
    const [city,setCity]=useState<any>([])
    const [districts,setDistrict]=useState<any>([])
    const [wards,setWards]=useState<any>([])

    useEffect(()=>{
        console.log("param:", params?.item?.detailAddress?.ward?.name)
        if(params?.item){
            setFieldValue('name', params?.item?.name)
            setFieldValue('phone', params?.item?.phone)
            setFieldValue('cityName', params?.item?.detailAddress?.city?.name)
            setFieldValue('districtName', params?.item?.detailAddress?.district?.name)
            setFieldValue('wardName', params?.item?.detailAddress?.ward?.name)
            setFieldValue('cityId', params?.item?.detailAddress?.city?.id)
            setFieldValue('districtId', params?.item?.detailAddress?.district?.id)
            setFieldValue('wardId', params?.item?.detailAddress?.ward?.id)
            setFieldValue('address', params?.item?.street)
            setFieldValue('defaultAddress', params?.item?.defaultAddress===0?false:true)
            callApiDistricts( params?.item?.detailAddress?.city.id)
            callApiWards(params?.item?.detailAddress?.ward?.id)
        }
    },[])
    useEffect(()=>{
        callApiCity()
    },[])
    const callApiCity=()=>{
        getAllCity((res)=>{
            // console.log({res})
            setCity(res)
        }).then()
    }
    const callApiDistricts=(id:string)=>{
        getAllDistrict(id,(res)=>{
            setDistrict(res)
        }).then()
    }
    const callApiWards=(id:string)=>{
        getAllWard(id,(res)=>{
            setWards(res)
        }).then()
    }
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        phone: Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        address: Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        cityName:Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        districtName:Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
        wardName:Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
    });
    const callApiAddress=()=>{
        getAllAddress(undefined,(res:any)=>{
            if(res.length >0){
                let addressSelect=res?res?.filter((elm:any)=>elm.defaultAddress===1)[0]:[]
                dispatch(setAddressSelect(addressSelect))
                dispatch(setAddressUserProfile(res))
            }else {
                dispatch(setAddressUserProfile([]))
            }


        },()=>{}).then()
    }
    const {values, errors, touched, setFieldValue,handleSubmit} = useFormik({
        initialValues: {
            name: '',
            phone: '',
            cityName:'',
            cityId:'',
            districtName:"",
            districtId:"",
            wardName:"",
            wardId:"",
            address:"",
            defaultAddress:false
        },
        onSubmit: (values) => {
            setLoading(true)
            let param= {
                "name": values.name,
                "phone": values.phone,
                "defaultAddress": values.defaultAddress ? 1 : 0,
                "typeAddress": 1,
                "street": values.address,
                "detailAddress": {
                    "city":
                        {
                            "id": values.cityId,
                            "name": values.cityName
                        },
                    "district":
                        {
                            "id": values.districtId,
                            "name": values.districtName
                        },
                    "ward":
                        {
                            "id": values?.wardId,
                            "name": values?.wardName
                        }
                }
            }
            console.log({param})
            if(params?.item){
                updateAddress(params?.item?.id,param,(res)=>{
                    let newData=data
                    setLoading(false)
                    callApiAddress()
                },()=>{
                    setLoading(false)
                }).catch(()=>{
                    setLoading(false)
                })
            }else {
                addAddress(param,(res)=>{
                    let newData=data
                    setLoading(false)
                    callApiAddress()
                        // let listAddress=newData.push(res)
                        // let addressSelect=listAddress?.filter((elm:any)=>elm.defaultAddress===1)[0]
                        // dispatch(setAddressSelect(addressSelect))
                        // dispatch(setAddressUserProfile(newData?.length===0?[res]:newData.push(res)))
                        goBack()
                    // setLoading(false)
                }).catch(()=>{
                    setLoading(false)
                })
            }

            console.log({param})
        },
        validationSchema:SignupSchema
    });


    return{
        nav,
        data,loading,
        values, errors, touched, setFieldValue,handleSubmit,
        refName,
        params,city,districts,wards,callApiDistricts,callApiWards
    }
}
