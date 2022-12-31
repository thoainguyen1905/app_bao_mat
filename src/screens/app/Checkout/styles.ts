import {StyleSheet} from "react-native";
import {Colors, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background
    },
    btnCheckout:{
        marginTop:Spacing.width16,
        marginHorizontal:Spacing.width16,
        backgroundColor:Colors.colorMain2,
        borderRadius:8
    },
    modalContainer:{

    },
    contentContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    mainContent: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: Spacing.width335,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: Spacing.width15,
        paddingVertical: Spacing.height20,
        // paddingTop: Spacing.height40,
    },
    btnGotoProduct:{
        backgroundColor:Colors.colorMain2,
        borderRadius: 8,
        width: Spacing.width262,
        paddingVertical: Spacing.height10,
        alignItems: "center",
    }
})
