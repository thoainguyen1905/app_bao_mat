import {StyleSheet} from "react-native";
import {Colors, FontSize, Shadow, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.white,
        paddingHorizontal:Spacing.width16,
        marginTop:Spacing.height16,
        ...Shadow
    },
    txtTitle:{
        fontSize:FontSize.Font16,
        color:Colors.black,
    },
    txtEdit:{
        fontSize:FontSize.Font12,
        color:Colors.colorMain,
    },
    txtCountPrice:{
        fontSize:FontSize.Font12,
        color:Colors.placeholder,
    },
    txtName:{
        fontSize:FontSize.Font14,marginBottom:8
    },

    txtAddress: {
        fontSize:FontSize.Font13
    },
    containerAddress:{
        ...Shadow.normal,
        borderRadius:8,
        backgroundColor:Colors.white,
        marginTop:Spacing.width16,
        marginHorizontal:Spacing.width16,
        padding:Spacing.width16,

    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    imgCart:{
        width:Spacing.width70,
        height:Spacing.height90
    },
    viewCart:{
        flexDirection:'row',
        alignItems:'center',
        width:Spacing.width240,
        marginHorizontal:16,
    },
    iconCheckbox:{
        width:Spacing.width25,
        height:Spacing.width25,
        borderWidth:1,
        borderColor:Colors.gray,
        borderRadius:Spacing.width25/2
    },
    iconCheckBoxSelect:{
        width:Spacing.width25,
        height:Spacing.width25,
        // borderWidth:1,
        backgroundColor:Colors.colorMain2,
        borderRadius:Spacing.width25/2
    },
    orderId: {
        fontSize:FontSize.Font13,
        fontWeight:'400',
        color: Colors.btnDisable,
    },
    orderDate: {
        fontSize:FontSize.Font13,
        fontWeight:'400'
    },
    btn1:{
        width:"25%",
        height:Spacing.height50,
        backgroundColor:Colors.colorMain,
        borderRadius:8,
        alignItems:'center',
        justifyContent:"center"
    },
    txtBtn1:{

    },
    btn2:{
        width:"70%",
        height:Spacing.height50,
        backgroundColor:Colors.colorMain2,
        borderRadius:8
    },
    txtBtn2:{

    },
})
