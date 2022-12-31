import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {getListCategory} from "@redux";
import {useEffect, useState} from "react";
import {navigate, SCREEN_ROUTE} from "@navigation";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const listCategory=useSelector(getListCategory)
    const [childCategory,setChildCategory]=useState([])
    const [count,setCount]=useState<number>(0)
    useEffect(()=>{
     if(listCategory){
         setChildCategory(listCategory[count]?.childrenCategories)
     }
    },[count,listCategory])
    const onSelectCategory=(item:any,index:number)=>{
            setCount(index)
    }
    const onViewProduct=(item:any)=>{
        navigate(SCREEN_ROUTE.FORM_PRODUCT,{name:item?.name,type:"category",item:item})
    }
    return{
        nav,
        listCategory,
        onSelectCategory,
        count,childCategory,
        onViewProduct,
    }
}
