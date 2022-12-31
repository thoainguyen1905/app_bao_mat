import {Platform, StatusBar, StyleSheet} from "react-native";
import {Colors, FontSize, Shadow} from "@theme";
import {Spacing} from "@assets";

export const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    btnLogin:{
        maxWidth:'50%',
        backgroundColor:Colors.colorMain,
        borderRadius:Spacing.height8
    },
    txtForgot:{
        fontSize:FontSize.Font14,
        color:Colors.gray,
        fontWeight:"600",
        fontFamily:'Poppins-Regular'
    },
    logoApp:{
        width:Spacing.width80,
        height:Spacing.width80,
        borderRadius:Spacing.height8,
        marginBottom:Spacing.height30,
        backgroundColor:Colors.colorMain,
        margin:5,
        ...Shadow
    },
    txtApp:{
        fontSize:FontSize.Font16,
        color:Colors.colorMain,
        fontWeight:"700",
        fontFamily:'Poppins-Regular'
    },
    break: {
        marginVertical: Spacing.height30,
        width: Spacing.width335,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    breakTxt: {
       fontSize:FontSize.Font14,
        color: "rgba(172, 172, 172, 1)",
    },
    line: {
        borderWidth: 0.5,
        width: Spacing.width100,
        height: 0,
        borderColor: Colors.gray,
    },
    btnSocio:{
        width:Spacing.width50,
        height:Spacing.width50,
        borderRadius:Spacing.height8,
        marginBottom:Spacing.height30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.white,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.27,
        shadowRadius: 1.65,

        elevation: 2,
    },
    registerContainer: {
        width: Spacing.width335,
        position:"absolute",
        bottom:0,
        alignItems: "center",
        justifyContent: "flex-end",
    },
    registerTxt: {
        // ...TextAppStyle.txt15_400,
        fontSize:FontSize.Font15,

        color: Colors.btnDisable,
    },
    registerBtn: {
        // ...TextAppStyle.txt18_600,
        fontSize:FontSize.Font18,
        fontWeight:'600',
        color: Colors.dark,
    },
})
