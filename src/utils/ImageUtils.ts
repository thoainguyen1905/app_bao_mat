import {NoImage} from "@assets";

export const renderImage=(image:any)=>{
    if(image){
        return {uri:image[0]}
    }else {
        return NoImage
    }
}
