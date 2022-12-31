import {Platform, StatusBar, StyleSheet} from "react-native";
import {Colors} from "@theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    }
})
