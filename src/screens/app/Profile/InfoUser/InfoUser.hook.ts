import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import * as Yup from "yup";
import { t } from "i18next";
import {useFormik} from "formik";
import {useEffect, useState} from "react";
import {updateUser, UploadImage} from "@services";
import {getProfileUserFromStore, setUserProfile} from "@redux";
import ImagePicker from "react-native-image-crop-picker";
export function useModel(props: any) {
    const dispatch = useDispatch();
    const [loading,setLoading]=useState<boolean>(false)
    const nav = useNavigation();
    const infoUser=useSelector(getProfileUserFromStore)
    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(4, t("validInfo"))
            .required(t("validInfo")),
        phone: Yup.string()
            .min(5, t("validInfo"))
            .required(t("validInfo")),
    });
    useEffect(()=>{
        setFieldValue('name', infoUser?.fullName)
        setFieldValue('phone', infoUser?.phone)
        setFieldValue('isMale', infoUser?.gender===1)
        setFieldValue('avatar', infoUser?.avatar)
    },[])
    const {values, errors, touched, setFieldValue,handleSubmit} = useFormik({
        initialValues: {
            avatar:'',
            name: '',
            phone: '',
            isMale:false
        },
        enableReinitialize:true,
        onSubmit: (values) => {
            setLoading(true)
            if(infoUser?.avatar===values?.avatar){
                let param={
                    fullName:values.name,
                    phone:values?.phone,
                    gender:values?.isMale?1:0,
                    avatar:values?.avatar
                }
                updateUser(param,(res)=>{
                    setLoading(false)
                    dispatch(setUserProfile(res))
                },(error)=>{
                    setLoading(false)
                }).then()
            }else {
                let bodyImg={
                    uri:values.avatar
                }
                UploadImage(bodyImg,(img)=>{
                    console.log({img})
                    let param={
                        fullName:values.name,
                        phone:values?.phone,
                        gender:values?.isMale?1:0,
                        avatar:img
                    }
                    updateUser(param,(res)=>{
                        setLoading(false)
                        dispatch(setUserProfile(res))
                    },(error)=>{
                        setLoading(false)
                    }).then()
                },()=>{
                    setLoading(false)
                })
            }
        },
        validationSchema:SignupSchema
    })
    const onAvatar=()=>{
            ImagePicker.openPicker({
                width: 400,
                height: 400,
                compressImageMaxWidth: 800,
                compressImageMaxHeight: 800,
                cropping: true,
            }).then(image => {
                console.log("img:",image?.sourceURL)
                setFieldValue('avatar',image?.sourceURL)
            });
    }
    return{
        nav,values, errors, touched, setFieldValue,handleSubmit,loading,
        onAvatar
    }
}
