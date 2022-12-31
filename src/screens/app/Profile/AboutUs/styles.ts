import {StyleSheet} from "react-native";
import {Colors, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    logoApp:{
        width:Spacing.width100,
        height:Spacing.width100,
        alignSelf:'center',
        marginTop:16
    },
    viewImg:{
        width:'100%',
        height:Spacing.height200,
        marginVertical:16
    }
})
