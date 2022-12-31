import React ,{useEffect,useState} from 'react'

import {useDispatch, useSelector} from "react-redux";

import SplashScreen from "react-native-splash-screen";
import {getCategory} from "../../services/CategoryServices";
import {getTokenUserFromStore, setAddressUserProfile, setCategory, setListCart} from "@redux";
import {getCart} from "../../services/CartServices";
import {getAllAddress} from "@services";
import {api} from "@api";
export function useModel(props: any) {
    const dispatch = useDispatch();
    const token = useSelector(getTokenUserFromStore);
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    useEffect(() => {
        callApiCategory()
    }, [token]);

    useEffect(()=>{
        if(token){
            api.setToken(token).then()
            callApiCart()
            callApiAddress()
        }
    },[token])
    const callApiCart=()=>{
        getCart(undefined,(res:any)=>{
            if(res.length >0){
                dispatch(setListCart(res))
            }else {
                dispatch(setListCart([]))
            }


        },()=>{}).then()
    }
    const callApiAddress=()=>{
        getAllAddress(undefined,(res:any)=>{
            if(res.length >0){
                let listCart=res.map((elm:any)=>{
                    return {
                        ...elm,
                        select:false
                    }
                })
                dispatch(setAddressUserProfile(listCart))
            }else {
                dispatch(setListCart([]))
            }


        },()=>{}).then()
    }
    const callApiCategory=()=>{
        getCategory(undefined,(res:any)=>{
            dispatch(setCategory(res))
        },()=>{}).then()
    }
    return{
        token
    }
}
