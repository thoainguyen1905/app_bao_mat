import {StyleSheet} from "react-native";
import {Colors, FontSize, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    btnCheckout:{
        marginTop:Spacing.width16,
        marginHorizontal:Spacing.width16,
        borderRadius:8,
        backgroundColor:Colors.colorMain2,
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
        backgroundColor:Colors.colorMain2,
        borderRadius:Spacing.width25/2,
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    viewRow2:{
        width:'50%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start'
    },
    txtMale:{
        fontSize:FontSize.Font12,
        fontWeight:'400',
        marginLeft:Spacing.width8
    },
    viewAvatar:{
        width:Spacing.width100,
        height:Spacing.width100,
        borderRadius:Spacing.width25/2,
        alignSelf:'center',

    }
})
