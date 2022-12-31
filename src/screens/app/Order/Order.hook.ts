import {useDispatch, useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {getListOrderByStatus} from "@services";
import {useEffect, useRef, useState} from "react";
import {setListOrder} from "../../../redux/slices/orderSlice";
import {getInfoCart} from "../../../redux/selector/cartSlector";
import {getListOrder} from "../../../redux/selector/orderSlector";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const refFlatList=useRef<any>()
    const [numTab,setNumTab]=useState(0)
    const [loading,setLoading]=useState(false)
    const [numUnConfimred,setNumUnConfimred]=useState(false)
    const [indexOrder,setIndexOrder]=useState(1)
    const param:any=useRoute()
    const data:any=useSelector(getListOrder)
    const {params}=param
    useEffect(()=>{
        callApi(indexOrder)
    },[indexOrder,numUnConfimred])

    useEffect(()=>{
    })
    const callApi=(status?:number)=>{
        setLoading(true)
            let param={
                status:status
            }
        getListOrderByStatus(param,(res)=>{
            // setData(res)
            dispatch(setListOrder({list:res,status:status}))
            setLoading(false)
        }).then()
    }
    return{
        nav,refFlatList,numTab,setNumTab,data,loading,
        numUnConfimred,setNumUnConfimred,setIndexOrder,
        params
    }
}
