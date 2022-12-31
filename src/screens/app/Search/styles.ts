import {StyleSheet} from "react-native";
import {Colors, FontSize, FontWithBold_Barlow, Shadow, Spacing} from "@theme";
import {Device} from "../../../assets/device";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    viewSearch:{
        // width:'100%',
        height:Spacing.height50,
        backgroundColor:Colors.white,
        ...Shadow.normal,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        // marginHorizontal:Spacing.width16,
        // borderRadius:Spacing.height8
    },
    txtSearch:{
        fontSize:FontSize.Font14,
        fontFamily:'Poppins-Light',
        color:Colors.black,
        width:Device.width-Spacing.width90,
        height:Spacing.height50,
},
    containerSearch:{
        paddingVertical:Spacing.height8,

        // paddingHorizontal:Spacing.width16,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    iconBack:{
        paddingLeft:Spacing.width16
    },
    iconSearch:{
        paddingRight:Spacing.width16
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
    },
    dropdown3BtnStyle: {
        width: "100%",
        height: Spacing.height52,
        paddingHorizontal: 0,
        borderRadius: 8,
        borderColor: "#444",
    },
    dropdown3BtnChildStyle: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: Spacing.width8,
        paddingRight: Spacing.width8,
        backgroundColor: "#F6F6F6",
    },
    dropdown3BtnTxt: {
        fontSize:FontSize.Font14,
        color: "rgba(30, 32, 41, 1)",
    },
    dropdown3DropdownStyle: {
        backgroundColor: "white",
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#EFEFEF",
    },
    dropdown3RowStyle: {
        backgroundColor: "white",
        borderBottomColor: "white",
        height: 50,
    },
    dropdown3RowChildStyle: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "#FFFFFF",
        // borderRadius: 4,
    },
})
