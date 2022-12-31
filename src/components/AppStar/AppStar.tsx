import React from "react";
import {IconStar0, IconStar5,IconStar2,IconStar3,IconStar4,IconStar1} from "../../assets/icon/IconStar";
import {View} from "react-native";
import {AppText} from "../AppText";
import {Colors, FontSize} from "@theme";
type AppStarType={
    count:number
}
export const AppStar =(props:AppStarType)=>{
    const {count}=props;
    const renderStar=()=>{
        if(count<1){
            return <IconStar0/>
        }else if(count<2){
            return <IconStar1/>
        }else if(count<3){
            return <IconStar2/>
        }else if(count<4){
            return <IconStar3/>
        }else if(count<5){
            return <IconStar4/>
        }else {
            return <IconStar5 />
        }
    }
    return(
        <View style={{flexDirection:'row',alignItems:'center'}}>
            {renderStar()}
            <AppText style={{color:Colors.white,fontSize:FontSize.Font14}}>({count})</AppText>
        </View>
    )
}
