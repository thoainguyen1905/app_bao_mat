import {StyleSheet} from "react-native";
import {Colors, FontSize, Spacing} from "@theme";

export const styles = StyleSheet.create({
    container: {
        // alignItems: "flex-start",
        // justifyContent: "space-between",
        // borderTopColor: Colors.border,

    },
    adjustAmount: {
        width: Spacing.width20,
        height: Spacing.height20,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor:Colors.
    },
    amount: {
        fontSize:FontSize.Font15,
        // marginHorizontal: Spacing.width40,
    },
    adjustContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'space-between',
        // marginTop:Spacing.height16
    },
})
