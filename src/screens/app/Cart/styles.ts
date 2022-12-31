import {StyleSheet} from "react-native";
import {Colors, FontSize, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    txtTitle:{
        padding:Spacing.width8,
        backgroundColor:Colors.colorMain2,
        color:Colors.white
    },
    txtTitleEmpty:{
        fontSize:FontSize.Font16,
        marginVertical:Spacing.height8
    },
    txtDesEmpty:{
        fontSize:FontSize.Font12,
        color:Colors.placeholder,
        marginBottom:Spacing.height16
    },
    btn:{
        width:Spacing.width150,
        borderRadius:8
    },
    viewBottom:{
        width:'100%',
        height:Spacing.height70,
        backgroundColor:Colors.colorMain2,
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:Spacing.width16,
        justifyContent:'space-between'
    },
    txtPrice:{
        fontSize:FontSize.Font20,
        color:Colors.white,
    },
    btnCheckout:{
        backgroundColor:Colors.colorMain,
        width:'40%',
        borderRadius:8
    }
})
