import {Platform, StatusBar, StyleSheet} from "react-native";
import {Colors, FontSize} from "@theme";
import {Spacing} from "@assets";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    logoApp:{
        width:Spacing.width80,
        height:Spacing.width80,
        borderRadius:Spacing.height8,
        marginBottom:Spacing.height30,
        backgroundColor:Colors.colorMain
    },
    txtApp:{
        fontSize:FontSize.Font16,
        color:Colors.colorMain,
        fontWeight:"700",
        fontFamily:'Poppins-Regular'
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    btnSigUp:{
        maxWidth:'60%',
        backgroundColor:Colors.colorMain,
        borderRadius:Spacing.height8
    },
    btnCan:{
        maxWidth:'30%',
        marginRight:'10%',
        backgroundColor:Colors.black,
        borderRadius:Spacing.height8
    },
})
