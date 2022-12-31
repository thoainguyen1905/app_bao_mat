import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import * as Yup from "yup";
import {useFormik} from "formik";
import {setAccountToken} from "@redux";
import {useTranslation} from "react-i18next";
import {forgotApp, ResetPasswordApp, verifyCodeApp} from "@services";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const [step,setStep]=useState(1)
    const {t} = useTranslation();
    const SignupSchema = Yup.object().shape({
        email:Yup.string()
            .min(2, 'Too Short!')
            .max(70, 'Too Long!')
            .email()
            .required(t("validateEmail")),

    });
    const {values, errors, touched, setFieldValue,handleSubmit,setErrors} = useFormik({
        initialValues: {
            email: '',
            code:'',
            password:''
        },
        onSubmit: (values) => {
            if(step===1){
                onForgot(values.email)
            }else if(step===2){
                checkOtp(values.code)
            }else {
                ChangePassword(values.password)
            }
        },
        validationSchema:SignupSchema
    });
    const onForgot=(value:any)=>{
        console.log({value})
        let param={
            email:value
        }
        forgotApp(param,(res)=>{
                setStep(2)
        },()=>{

        }).then()
    }
    const checkOtp=(otp:string)=>{
        console.log({otp})
        if(otp.length<6){
            setErrors({code: t("validateCode")})
            // errors.code('')
        }
        let param={
            otp:otp,
            email:values.email
        }
        verifyCodeApp(param,(res)=>{
            setStep(3)
        },()=>{

        }).then()

    }
    const ChangePassword=(password:string)=>{
        let param={
            password:password,
            otp:values.code
        }
        ResetPasswordApp(param,(res)=>{
            nav.goBack()
        },()=>{

        }).then()

    }
    return{
        nav,
        step,
        onForgot,
        values, errors, touched, setFieldValue,handleSubmit,
        SignupSchema,setStep
    }
}
