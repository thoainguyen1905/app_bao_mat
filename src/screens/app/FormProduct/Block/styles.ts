import {Platform, StatusBar, StyleSheet} from "react-native";
import {Colors, FontSize, Shadow, Spacing} from "@theme";
import {Device} from "../../../../assets/device";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    txtFilter:{
        fontSize:FontSize.Font18,
        textAlign:'center'
    },
    txtReset:{
        fontSize:FontSize.Font12,

    },
    viewHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.08)',
        marginBottom:6,
    },
    viewDropDown:{
        minWidth:Spacing.width30,
        height:Spacing.height40,

        alignItems:'center',
        justifyContent:'center'
    },
    formView:{
        width:Device.width,
        height:Spacing.height50,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:Spacing.height8,
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.08)',
        paddingHorizontal:Spacing.width16
    },
    formView2:{
        borderBottomWidth:1,
        borderBottomColor:'rgba(0, 0, 0, 0.08)',
        paddingHorizontal:Spacing.width16
    },
    txt_formView:{
        fontSize:FontSize.Font13,
        width:'25%'
    },
    formViewBtn:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        width:'75%',
    },
    btnFormView:{
        flexDirection:'row',
        alignItems:'flex-end',
        marginLeft:Spacing.width16,
        width:'40%'
    },
    txtText:{
      fontSize:FontSize.Font12,
        marginLeft:8
    },
    btnFormView2:{
        flexDirection:'row',
        alignItems:'center',
        width:'50%'
    },
    input:{
        width:'50%',
        borderColor:'rgba(0, 0, 0, 0.08)',
        borderWidth:1,
        height:Spacing.height40,
        paddingHorizontal:8
    },
    radioButton:{
        width:20,
        height:20,
        borderRadius:15,
        backgroundColor:Colors.white,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:Colors.placeholder
    },
    radioButtonChild:{
        width:10,
        height:10,
        borderRadius:15,
        backgroundColor:Colors.colorMain,
    },
    radioButtonSelect:{
        width:20,
        height:20,
        borderRadius:15,
        backgroundColor:Colors.white,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:2,
        borderColor:Colors.colorMain
    },
    btnFilter:{
        marginHorizontal:Spacing.width16,
        marginVertical:Spacing.width16,
        minHeight:Spacing.height50,borderRadius:8,

    }
})
