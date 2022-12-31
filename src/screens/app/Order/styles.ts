import {StyleSheet} from "react-native";
import {Colors, FontSize, Spacing} from "@theme";
import {Device} from "../../../assets/device";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    listHeader:{
        width:"100%",
        height:Spacing.height50,
        marginVertical:Spacing.height8,
        // alignItems:'center'
        backgroundColor:Colors.white,
        // flex:1
    },
    viewItemHeader:{
        marginHorizontal:Spacing.width16,
        height:Spacing.height50,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:12
    },
    viewItemHeaderSelect:{
        marginHorizontal:Spacing.width16,
        height:Spacing.height50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:Colors.colorMain2,
        borderRadius:8,
        paddingHorizontal:12
    },
btnHeader:{
    alignItems:'center',
    justifyContent:'center',
    height:Spacing.height50,
    paddingHorizontal:8,
    borderRadius:8,
},

    orderCartContainer: {
        backgroundColor: "rgba(251, 250, 251, 1)",
        borderRadius: 4,
        paddingHorizontal: Spacing.width15,
        borderWidth: 1,
        borderColor: Colors.border,
        paddingTop: Spacing.height20,
        paddingBottom: Spacing.height20,
        marginBottom: Spacing.height20,
        width:Device.width-Spacing.width32,
        marginHorizontal:Spacing.width16,
        height:Spacing.height160
    },

    numItemTxt: {
        fontSize:FontSize.Font12,
        fontWeight:'400',
        color: Colors.btnDisable,
    },
    orderTotalTitle: {
        fontSize:FontSize.Font14,
        fontWeight:'500',
    },
    totalPrice: {
        fontSize:FontSize.Font16,
        fontWeight:'500',
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
    productContainerInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Spacing.height5,
        marginBottom: Spacing.height5,
    },

    containerInfo: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Spacing.height15,
    },
    orderInfo: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
        marginBottom: Spacing.height10,
    },
    line: {
        borderColor: Colors.border,
        borderWidth: 3,
        width: "100%",
        borderStyle: "solid",
    },
    retailerAva: {
        width: Spacing.width25,
        height: Spacing.width25,
        resizeMode: "cover",
        borderRadius: Spacing.height25,
    },
    retailer: {
        height: Spacing.height30,
        flexDirection: "row",
        alignItems: "center",
    },
    listImage: {
        flexDirection: "row",
    },
    image: {
        width: Spacing.width28,
        height: Spacing.height40,
        borderRadius: 8,
        resizeMode: "cover",
        marginRight: Spacing.width5,
    },
    surplus: {
        width: Spacing.width28,
        height: Spacing.height40,
        borderRadius: 8,
        backgroundColor: "rgba(217, 217, 217, 1)",
        alignItems: "center",
        justifyContent: "center",
    },
    number: {
        fontSize:FontSize.Font12,
        color: Colors.borderColor,
    },
    confirmNum: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: Spacing.height8,
        backgroundColor: "rgba(237, 240, 245, 1)",
    },
})

