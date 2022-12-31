import {StyleSheet} from "react-native";
import {Colors, FontSize, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:Spacing.width16,
        alignItems:'center',
        flexDirection:'row',
        paddingVertical:Spacing.height16,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.08)',
    },
    txtTitle:{
        padding:Spacing.width8,
        backgroundColor:Colors.colorMain2,
        color:Colors.white
    },
    containerView:{
        alignItems:'flex-start',
        flexDirection:'row',
    },
    txt_name:{
        fontSize:FontSize.Font13,
        width:'90%'
    },
    txt_price:{
        fontSize:FontSize.Font12,
        marginVertical:Spacing.height8
    },
    txt_size:{
        fontSize:FontSize.Font12,
        marginBottom:Spacing.height8
    },
    checkbox:{
        width:Spacing.width20,
        height:Spacing.width20,
        borderWidth:1,
        borderColor:Colors.black
    },
    checkboxSelect: {
        width:Spacing.width20,
        height:Spacing.width20,
        borderWidth:1,
        borderColor:Colors.black,
        backgroundColor:Colors.colorMain,
    },
    image:{
        width:Spacing.width100,
        height:Spacing.width100,
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
    containerQuantity:{
        width:Spacing.width100,
    },
    btnClose:{
        // position:'absolute',
        // top:10,
        // right:10
    }
})
