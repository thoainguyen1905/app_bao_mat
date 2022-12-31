import {Platform, StatusBar, StyleSheet} from "react-native";
import {Colors, FontSize} from "@theme";
import {Spacing} from "@assets";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.background,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    header:{
        backgroundColor:'red',
        // flex:1,
        height:Spacing.height40
    },
    viewInfo:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        marginTop:Spacing.height16,
        padding:Spacing.width16,
        borderBottomColor:"rgba(0, 0, 0, 0.15)",
        borderBottomWidth:1,
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:Colors.white,
        padding:Spacing.width16,
        // borderBottomColor:Colors.placeholder,
        // borderBottomWidth:1,
    },
    imageUser:{
        width:Spacing.width70,
        height:Spacing.width70,
        borderRadius:Spacing.width70/2,
    },
    txtName:{
        fontSize:FontSize.Font16,
        color:Colors.black
    },
    txtEmail:{
        fontSize:FontSize.Font12,
        color:Colors.gray,
        marginTop:Spacing.width16
    },
    txtTitle:{
        fontSize:FontSize.Font14,
        color:Colors.black,
        fontWeight:"500"
    }


})
