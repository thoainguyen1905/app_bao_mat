import {StyleSheet} from "react-native";
import {Colors, FontSize, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    form:{

        marginTop:Spacing.height16
    },
    txt:{
        marginHorizontal:Spacing.width16,
        fontSize:FontSize.Font12,
        color:Colors.gray,
        marginBottom:Spacing.height16
    },
    btnForgot:{
        maxWidth:'60%',
        backgroundColor:Colors.colorMain,
        borderRadius:Spacing.height8,
        marginTop:Spacing.height16,
        alignSelf:'center'
    },
    btnCansel:{
        maxWidth:'35%',
        backgroundColor:Colors.colorMain2,
        borderRadius:Spacing.height8,
        marginTop:Spacing.height16,
        alignSelf:'center'
    },
})
