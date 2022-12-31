import React from "react";
import {StyleSheet, View} from "react-native";
import {Colors} from "@theme";
import {HeaderScreen} from "@components";
import {useRoute} from "@react-navigation/native";
import WebView from "react-native-webview";
import {goBack} from "@navigation";
import {ApiConfigs} from "@api";

// const interface AppWebViewType=()=>{
//     url:string,
//     callback?:()=>void,
//     title?:string
// }
export const AppWebView =()=>{
    const param:any=useRoute()
    const {params}=param
    const {url,title,callback}=params;
    return(
        <View style={styles.container}>
            <HeaderScreen name={title}/>
            <WebView source={{uri:url}} onNavigationStateChange={(navState)=>{
                let url = navState.url;
               if(callback){
                if(url.startsWith(ApiConfigs.baseURL)){
                    callback(url)
                    goBack()
                }


               }
            }}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:Colors.background,
        flex:1
    }
})
