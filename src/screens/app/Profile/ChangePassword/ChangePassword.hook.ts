import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import {useFormik} from "formik";
import {changePasswordApp, updateUser} from "@services";
import {setUserProfile} from "@redux";
import * as Yup from "yup";
import {t} from "i18next";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const [loading,setLoading]=useState<boolean>(false)
    // @ts-ignore
    const SignupSchema = Yup.object().shape({
        passwordOld: Yup.string()
            .min(0, t("errorPassword"))
            .required(t("errorPassword")),
        passwordNew: Yup.string()
            .min(6, t("errorPassword"))
            .required(t("errorPassword")),
        re_password: Yup.string()
            .min(6, t("errorPassword"))
            .test('passwords-match',  t("errorPassword3"), function (value) {
                return values.passwordNew === value
            })

    });
    const {values, errors, touched, setFieldValue,handleSubmit,setErrors,setFieldError} = useFormik({
        initialValues: {
            passwordOld:'',
            passwordNew: '',
            re_password: '',
        },
        enableReinitialize:true,
        onSubmit: (values) => {
            setLoading(true)
            let param={
                "oldPassword":values.passwordOld,
                "newPassword":values.re_password
            }
            changePasswordApp(param,(res)=>{
                setLoading(false)

            },(error)=>{
                setFieldError("passwordOld",t('errorPassword4'))
                setLoading(false)
            }).then()
        },
        validationSchema:SignupSchema
    })

    return{
        nav,
        loading,values, errors, touched, setFieldValue,handleSubmit,
    }
}
