import {BORDER_RADIUS_20, Colors, Shadow, Spacing} from "@theme";
import {StyleSheet} from "react-native";
import {FontSize} from "@assets";
import {Device} from "../../assets/device";

export const styles = StyleSheet.create({
  container:{
    borderRadius: Spacing.height12,
    alignItems:'center',
    width: Device.width-Spacing.width36,
    height:Spacing.height55,
    flexDirection:'row',
    shadowColor: '#838181',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 1.65,

    elevation: 2,
    backgroundColor:Colors.white,
    paddingHorizontal:Spacing.width8
  },
  inputStyle: {
    height: Spacing.height55,
    minHeight:  Spacing.height55,
    paddingHorizontal: Spacing.width15,
  },
  btnActive: {
    borderColor: `${Colors.blue}`
  },txt:{
    minWidth:'20%',

    fontSize:FontSize.Font14,
    color:Colors.code,
    fontWeight:'600',
    fontFamily:'Poppins-Regular'
  },

});
