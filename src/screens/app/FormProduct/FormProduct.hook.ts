import {useDispatch} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect, useRef, useState} from "react";
import {DataTest} from "../Home/block/DataTest";
import { t } from "i18next";
import {getProduct} from "@services";
import debounce from "lodash/debounce";


export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const {params}:any=useRoute()
    const [data,setData]=useState([])
    const refBottom=useRef<any>(null)
     const [textFilter,setTextFilter]=useState('')
    const [filter,setFilter]=useState<any>()
    const [loading,setLoading]=useState<boolean>(false)
    const [refreshing, setRefreshing] = useState(false);
    console.log("param:",params?.item?.id)
    useEffect(()=>{
        callApi()
    },[])
    const callApi=(filter?:any)=>{
        // @ts-ignore
        // setLoading(true)
        let param:any={
            // page_size:10,
            page_index:1,
        }
        if(params?.type==="category"){
            param["categoryId"]=params?.item?.id
        }
        if(params?.type===t("bestSell")){
            param["sort"]="totalSold"
        }
        if(params?.type===t("newProduct")){
            param["sort"]="createdDate"
        }
        if(filter){
            param["sort"]=filter

        }
        getProduct(param,(res)=>{
            setData(res)
            setLoading(false)
            setRefreshing(false);
        },()=>{
            setLoading(false)
            setRefreshing(false);
        }).then()
    }
    const onRefresh = () => {
        setRefreshing(true);
        callApi()
    };
    const onFilter=(item:any)=>{
        callApi(item)
        // debounce(async ()=>{
        //     callApi(item)
        // },1000)
    }
    return{
        nav,
        params,
        data,
        loading,
        refreshing,
        refBottom,
        filter,
        textFilter,
        onRefresh,
        onFilter
    }
}
