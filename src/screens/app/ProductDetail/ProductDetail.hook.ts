import {useDispatch} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useRef, useState} from "react";
import {addCart, getCart, getProductDetail} from "@services";
import unionBy from 'lodash/unionBy';
import {showMessage} from "react-native-flash-message";
import {t} from "i18next";
import {Colors} from "@theme";
import {navigate, SCREEN_ROUTE} from "@navigation";
import {setListCart} from "@redux";
export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {params}:any=useRoute()
    const [data,setData]=useState<any>()
    const [sizes,setSizes]=useState([])
    const [colors,setColors]=useState([])
    const [sizeSelect,setSizeSelect]=useState<any>(undefined)
    const [colorSelect,setColorSelect]=useState<any>(undefined)
    const [value,setValue]=useState<any>()
    const [amount, setAmount] = useState(1);
    const refProduct=useRef<any>(null)
    useEffect(()=>{
        callApi()
    },[])

    const callApi=()=>{
        getProductDetail(params?.id,undefined,(res)=>{
            console.log(res)
            setData(res)
        },(error)=>{

        }).then()
    }
    useEffect(()=>{
        if(colorSelect){
            let newData=data?.productDetails.filter((elm:any)=>elm?.size.length !==0)
            let newSizes:any=newData?newData.filter((elm:any)=>elm.color===colorSelect?.color):[]
            setSizes(newSizes)
            if(newSizes.length>0){
                setValue(newSizes[0])
            }
        }else {
            let newData=data?.productDetails.filter((elm:any)=>elm?.color.length !==0)
            newData = unionBy(newData, 'color');
            setColors(newData)
        }
    },[data,colorSelect])
    useEffect(()=>{
        if(sizeSelect){
            let newData=data?.productDetails.filter((elm:any)=>elm?.color.length !==0)
            let newColors:any=newData.filter((elm:any)=>elm.size===sizeSelect?.size)
            setColors(newColors)
            if(newColors.length>0){
                setValue(newColors[0])
            }

        }else {
            let newData=data?.productDetails.filter((elm:any)=>elm?.size.length !==0)
             newData = unionBy(newData, 'size');
            setSizes(newData)
        }
    },[data,sizeSelect])
    const renderStatus=()=>{
        if(colors.length>0 && sizes.length>0){
            if(colorSelect && sizeSelect){
                return true
            }else {
                return false
            }
        }else {
            if(value){
                return true
            }else {
                return false
            }
        }
    }
    const callApiCart=()=>{
        getCart(undefined,(res:any)=>{
            if(res.length >0){
                dispatch(setListCart(res))
            }else {
                dispatch(setListCart([]))
            }


        },()=>{}).then()
    }
    const AddCart =()=>{
        let param={
            productDetailId:value?.id,
            quantity:amount
        }
        addCart(param,(res)=>{
            callApiCart()
        },()=>{

        }).then()
    }
    const BuyNow=()=>{
        let param={
            products:[
                {
                    product: {
                        ...value,
                        ...data,

                    },
                    quantity:amount,
                    productDetailId:value?.id
                }
            ],
            total:data?.price* amount
        }
        console.log(param)
        navigate(SCREEN_ROUTE.CHECKOUT,{
            items:param,
            type:'product'
        })
    }
    return{
        nav,
        data,
        sizes,
        colors,
        setColors,
        setSizes,
        setSizeSelect,
        setColorSelect,
        amount, setAmount,
        refProduct,
        value,
        BuyNow,
        AddCart,
        renderStatus,
        setValue
    }
}
