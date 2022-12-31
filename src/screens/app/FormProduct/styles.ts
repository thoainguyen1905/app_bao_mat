import {Platform, StatusBar, StyleSheet} from "react-native";
import {Colors, FontSize, FontWithBold_Barlow, Shadow, Spacing} from "@theme";
import {Device} from "../../../assets/device";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    img:{
        width:Device.width,
        height:Spacing.height200,
        backgroundColor:'red'
    },
    viewProduct:{
        backgroundColor:Colors.white,
        ...Shadow.normal,
        marginVertical:Spacing.width8,
        width:Spacing.width160,
        height:Spacing.height200,
        borderRadius:Spacing.width8,

    },
    img_product:{
        width:Spacing.width150,
        height:Spacing.height100
    },
    txt_product:{
        fontSize:FontSize.Font14,
        ...FontWithBold_Barlow.Bold_Barlow_600,
        color:Colors.black,
        width:Spacing.width150-Spacing.width16,
        marginTop:8,
        marginHorizontal:Spacing.width8,

    },
    txt_price_product:{
        fontSize:FontSize.Font16,
        ...FontWithBold_Barlow.Bold_Barlow_700,
        color:Colors.black,
    },
    viewPrice:{
        position:"absolute",
        bottom:10,
        marginHorizontal:Spacing.width8,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-between',
        width:Spacing.width150-Spacing.width16,
    },
    txt_sold_product:{
        fontSize:FontSize.Font10,
        ...FontWithBold_Barlow.Medium_Barlow_400,
        color:Colors.black,
    },
    txtFilter:{
        fontSize:FontSize.Font18
    }
})
