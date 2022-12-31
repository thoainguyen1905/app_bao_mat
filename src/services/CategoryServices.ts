import {api} from "@api";
import {API_URL} from "../api/api.config";

export const getCategory =async (payload:any,onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    try {
        const res:any=await api.get(API_URL.category)
        return onSuccess(res.data?res.data:[])
    }catch (e) {
        return onError(e)
    }
}
