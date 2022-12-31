import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BackIcon, IconAdd, IconFilter} from "@assets";
import {Colors, FontSize, FontWithBold_Barlow, Shadow, Spacing} from "@theme";
import {NavigationUtils} from "@navigation";
import TextTicker from "react-native-text-ticker";
type HeaderScreenType={
    name?:string,
    isIconClose?:boolean,
    isFilter?:boolean,
    onFilter?:any,
    onAdd?:any,
    goToBack?:()=>void
}
export const HeaderScreen=(props:HeaderScreenType)=>{
const {name,isIconClose=true,goToBack,isFilter=false,onFilter,onAdd}=props
    return(
        <View style={styles.container}>
            {isIconClose &&<TouchableOpacity style={styles.iconBack} onPress={() => {
                if(goToBack){
                    goToBack()
                }else {
                    NavigationUtils.goBack()
                }
            }}>
                <BackIcon/>
            </TouchableOpacity>}
            <TextTicker
                style={styles.txt}
                duration={3000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={1000}
            >
                {name}
            </TextTicker>
            {isFilter &&<TouchableOpacity style={styles.iconFilter} onPress={onFilter}>
                <IconFilter/>
            </TouchableOpacity>}
            {onAdd &&<TouchableOpacity style={styles.iconFilter} onPress={onAdd}>
                <IconAdd/>
            </TouchableOpacity>}
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        // flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height:Spacing.height50,
        width:'100%',
        backgroundColor:Colors.white,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.08)'
    },
    iconBack:{
        position:"absolute",
        paddingLeft:Spacing.width16,
        left:0,
        width:50,
        height:Spacing.height50,
        alignItems:'flex-start',
        justifyContent:'center',
    },
    txt:{
        fontSize:FontSize.Font16,
        color:Colors.black,
        ...FontWithBold_Barlow.Bold_Barlow_500,
    },
    iconFilter:{
        position:"absolute",
        paddingRight:Spacing.width16,
        right:0,
        width:50,
        height:Spacing.height50,
        alignItems:'flex-end',
        justifyContent:'center',
    }
})
