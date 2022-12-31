import {StyleSheet} from "react-native";
import {Colors, FontSize, Shadow} from "@theme";
import {Spacing} from "@assets";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    btnEmpty:{
        width:'70%',
        backgroundColor:Colors.colorMain2,
        borderRadius:8
    },
    containerAddress:{
        flex: 1,
        marginVertical:Spacing.width16,
    },
    btnSave:{
        marginTop:Spacing.width24,
        marginHorizontal:Spacing.width16,
        borderRadius:8,
        backgroundColor:Colors.colorMain2
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewItemAddress:{
        backgroundColor:Colors.white,
        padding:Spacing.width16,
        borderRadius:8,
        ...Shadow.normal,
        marginBottom:Spacing.width16
    },
    viewItemAddressSelect:{
        backgroundColor:Colors.colorMain2,
        padding:Spacing.width16,
        borderRadius:8,
        marginBottom:Spacing.width16
    },
    txtName:{
        fontSize:FontSize.Font16
    },
    txtPhone:{
        fontSize:FontSize.Font14,marginVertical:8
    },
    txtAddress: {
        fontSize:FontSize.Font12
    },
    btnClose:{
        backgroundColor:Colors.white,
        width:Spacing.width30,
        height:Spacing.width30,
        borderRadius:Spacing.width30,
        position:"absolute",
        right:-Spacing.width8,
        top:-Spacing.width8,
        ...Shadow.normal,
        alignItems:'center',
        justifyContent:'center'
    }

})
