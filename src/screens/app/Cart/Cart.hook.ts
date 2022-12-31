import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getInfoCart} from "../../../redux/selector/cartSlector";
import {useEffect, useState} from "react";
import {getTokenUserFromStore, selectCart, setListCart} from "@redux";
import {NavigationUtils, SCREEN_ROUTE} from "@navigation";
import {deleteCart, getCart} from "@services";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const infoCart:any=useSelector(getInfoCart)
    const token = useSelector(getTokenUserFromStore);
    const [isVisible,setIsVisible]=useState(false)
    const [itemCartDelete,setItemCartDelete]=useState<any>()
    const [indexCartDelete,setIndexCartDelete]=useState<any>()
    const [refreshing, setRefreshing] = useState(false);
    const [loading,setLoading]=useState(false)
    const onDeleteCart =()=>{
        deleteCart(itemCartDelete.id,()=>{
            setIsVisible(false)
            callApiCart()
        },()=>{
            setIsVisible(false)
        }).then()
    }
    useEffect(()=>{
        callApiCart()
    },[])
    useEffect(()=>{
        console.log({infoCart:infoCart.list})
    },[infoCart])
    const callApiCart=()=>{
        getCart(undefined,(res:any)=>{
            if(res.length >0){
                dispatch(setListCart(res))
                setRefreshing(false)
            }else {
                dispatch(setListCart([]))
                dispatch(setListCart(res))
                setRefreshing(false)
            }


        },()=>{
            setRefreshing(false)
        }).then()
    }
    const onSelectCart =(value:any,index:number)=>{
        let newList=infoCart.list
        newList[index]={
            ...newList[index],
            select:!newList[index].select
        }
        dispatch(selectCart(infoCart.list))
    }
    const checkoutCart=()=>{

        let newData={
            products:infoCart.list,
            total:infoCart.total
        }
            NavigationUtils.navigate(SCREEN_ROUTE.CHECKOUT,{items:newData,type:'cart'})
    }
    const onRefresh = () => {
        setRefreshing(true);
        callApiCart()
    };
    const onSaveCart=(value:any,index:number)=>{
        const newList :any=[]
        newList.concat(infoCart.list)
        newList[index]=value
        dispatch(setListCart(newList))
    }
    return{
        nav,
        infoCart,
        onDeleteCart,isVisible,setIsVisible,
        setItemCartDelete,onSelectCart,
        indexCartDelete,setIndexCartDelete,
        checkoutCart,token,onRefresh,refreshing,onSaveCart

    }
}
