import {api, API_URL} from "@api";
import {showMessage} from "react-native-flash-message";
import {t} from "i18next";
import {Colors} from "@theme";

export const getListOrderByStatus = async (payload?:any,onSuccess?:(res:any)=>void,onError?:(res:any)=>void)=>{
    try {
        const res:any=await api.get(API_URL.order,undefined,payload)
        if(res){
            return onSuccess ? onSuccess(res.data?res.data:[]) : null
        }else {
            return onError ? onError(res) : null
        }
    }catch (e) {
        return onError ? onError(e) : null
    }
}
export const cancelOrder =async (id:string,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        const res:any=await api.put(API_URL.order+'/'+id,{status:6})
        console.log({res})
        showMessage({
            message:t("cancelOrderSuccess"),
            type: "info",
            backgroundColor: Colors.lightBlue,
            color: Colors.white,
        });
        return onSuccess(res.data)
    }catch (e) {
        showMessage({
            message:t("cancelOrderError"),
            type: "info",
            backgroundColor: Colors.error,
            color: Colors.white,
        });
        return onError(e)
    }
}
