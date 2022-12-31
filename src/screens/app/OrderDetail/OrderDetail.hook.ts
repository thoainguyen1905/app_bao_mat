import {useDispatch, useSelector} from "react-redux";
import {useNavigation, useRoute} from "@react-navigation/native";
import {cancelOrder, getListOrderByStatus} from "@services";
import {goBack} from "@navigation";
import {setListOrder} from "../../../redux/slices/orderSlice";
import {getListOrder, getStatusOrder} from "../../../redux/selector/orderSlector";

export function useModel(props: any) {
    const dispatch = useDispatch();
    const nav = useNavigation();
    const param:any=useRoute()
    const {params}=param
    const onCancelOrder=()=>{

        cancelOrder(params?.item?.id,()=>{
            callApi()
        },()=>{

        }).then()
    }
    const callApi=()=>{
        let param={
            status:params.item.status
        }
        getListOrderByStatus(param,(res)=>{
            // setData(res)
            dispatch(setListOrder({list:res,status:params.item.status}))
            goBack()
        }).then()
    }
    return{
        nav,
        params,onCancelOrder
    }
}
