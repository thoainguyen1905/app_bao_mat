import {Platform} from "react-native";
import {API_URL, ApiConfigs} from "@api";

export const createFormData  =(photo:{fileName?:string,type?:any,uri:string}, body2:any = {})=>{
    const data = new FormData();

    data.append('file', {
        name: Math.floor(Math.random() * Math.floor(9999999999999)) + '.jpg',
        type: photo.type || 'image/jpeg',
        uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri,
    });

    Object.keys(body2).forEach((key) => {
        data.append(key, body2[key]);
    });

    return data;
};
export const UploadImage=(body: { fileName?:string,type?:any,uri:string },onSuccess:(res:any)=>void,onError:(res:any)=>void)=>{
    console.log({body},createFormData(body))
    fetch(`${ApiConfigs.baseURL}${API_URL.uploadImage}`, {
        method: 'POST',
        body: createFormData(body),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            if(response?.success){
                onSuccess(response?.data)
            }else {
                onError(response)
            }
        })
        .catch((error) => {
            if (onError) {
                onError(error)
            }
            console.log('error', error);
            return error
        });
}

export const UploadImages=(body:{ fileName?:string,type?:any,uri:string },onSuccess:(res:any)=>void,onError?:(res:any)=>void)=>{
    fetch(`${ApiConfigs.baseURL}${API_URL.uploadImage}`, {
        method: 'POST',
        body: createFormData(body),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response)
            onSuccess(response)
        })
        .catch((error) => {
            if (onError) {
                onError(error)
            }
            console.log('error', error);
            return error
        });
}
