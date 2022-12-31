import {useDispatch} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {useCallback, useEffect, useRef, useState} from "react";
import debounce from "lodash/debounce";
import {getProduct} from "@services";
export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const [text,setText]=useState('')
    const [data,setData]=useState<any>([])
    const refInput=useRef<any>()
    const [loading,setLoading]=useState<boolean>(false)
    const [isSearch,setIsSearch]=useState<boolean>(false)
    const [refreshing, setRefreshing] = useState(false);
    useEffect(()=>{
       if(refInput){
           refInput?.current?.focus()
       }
    },[refInput])
    const callApiSearch=useCallback((value: string,filter?:any)=>{
        setIsSearch(false)
        setLoading(true)
        let param:any={
            name:value
        }
        if(filter){
            param["sort"]=filter
        }
        getProduct(param,(res)=>{
            setData(res)
            setLoading(false)
            setIsSearch(true)
        },()=>{
            setLoading(false)
        }).then()
    },[])
    const onRefresh = () => {
        setRefreshing(true);
        callApiSearch(text)
    };
    const searchProduct=(value:any)=>{
            setText(value)

    }
    const onFilter=(item:any)=>{
        callApiSearch(text,item)
        // debounce(async ()=>{
        //     callApi(item)
        // },1000)
    }
    return{
        nav,
        text,
        searchProduct,
        refInput,
        data,
        loading,
        callApiSearch,
        onFilter,
        refreshing,onRefresh,
        isSearch,setIsSearch
    }
}
