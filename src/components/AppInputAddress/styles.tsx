import {BORDER_RADIUS_20, Colors, Shadow, Spacing} from "@theme";
import {StyleSheet} from "react-native";
import {FontSize} from "@assets";
import {Device} from "../../assets/device";

export const styles = StyleSheet.create({
  container:{
    borderRadius: Spacing.height12,
    // alignItems:'center',
    width: Device.width-Spacing.width36,
    // height:Spacing.height55,

  },
  inputStyle: {
    height: Spacing.height55,
    // minHeight:  Spacing.height55,

    paddingHorizontal:Spacing.width8  ,
    borderWidth:1,
    borderColor:'rgba(0, 0, 0, 0.08)',
    backgroundColor:Colors.white,
    borderRadius:8
  },
  btnActive: {
    borderColor: `${Colors.colorMain}`
  },txt:{
    fontSize:FontSize.Font14,
    color:Colors.black,
    // fontWeight:'600',
    fontFamily:'Poppins-Regular',
    marginBottom:8
  },

});
