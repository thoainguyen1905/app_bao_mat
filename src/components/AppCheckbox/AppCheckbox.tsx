import React from "react";
import {Spacing} from "@assets";
import Svg, {Path} from "react-native-svg";
import {StyleProp, StyleSheet, TextStyle, TouchableOpacity, View} from "react-native";
import {AppText} from "../AppText";
import {FontSize} from "@theme";
export type iconProps = {
    width?: string | number;
    height?: string | number;
    iconFillColor?: string;
    style?: any;
    onPress?: any;
    circleFillIcon?: any;
};
export const IconCheckBox= ({ style, width=Spacing.width30, height=Spacing.width30,iconFillColor ="#464A54" }: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 6.25A3.75 3.75 0 006.25 10v10A3.75 3.75 0 0010 23.75h10A3.75 3.75 0 0023.75 20V10A3.75 3.75 0 0020 6.25H10zM3.75 10A6.25 6.25 0 0110 3.75h10A6.25 6.25 0 0126.25 10v10A6.25 6.25 0 0120 26.25H10A6.25 6.25 0 013.75 20V10z"
                fill={iconFillColor}
            />
        </Svg>
    );
};
export const IconCheckBoxSelect= ({ style, width=Spacing.width30, height=Spacing.width30,iconFillColor ="#464A54"}: iconProps) => {
    return (
        <Svg width={width} height={height} viewBox="0 0 30 30" fill="none">
            <Path
                d="M19.822 11.893a1.25 1.25 0 00-2.144-1.286l-3.676 6.127-1.868-1.868a1.25 1.25 0 10-1.768 1.768l3 3a1.25 1.25 0 001.956-.24l4.5-7.5z"
                fill={iconFillColor}
            />
            <Path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 3.75A6.25 6.25 0 003.75 10v10A6.25 6.25 0 0010 26.25h10A6.25 6.25 0 0026.25 20V10A6.25 6.25 0 0020 3.75H10zM6.25 10A3.75 3.75 0 0110 6.25h10A3.75 3.75 0 0123.75 10v10A3.75 3.75 0 0120 23.75H10A3.75 3.75 0 016.25 20V10z"
                fill={iconFillColor}
            />
        </Svg>
    );
};
type AppCheckboxType={
    status:boolean,
    onSelect:(value:boolean)=>void,
    size?:number,
    color?:string,
    style?:StyleProp<TextStyle> | undefined,
    label?:string
}
export const AppCheckbox=(props:AppCheckboxType)=>{
    const {status,onSelect,size,color,style,label}=props;
    return(
        <View style={[styles.container,style]}>
            <TouchableOpacity style={styles.container} onPress={()=>onSelect(!status)}>
                {status?<IconCheckBoxSelect iconFillColor={color} height={size} width={size}/>:<IconCheckBox iconFillColor={color} height={size} width={size}/>}
                <AppText style={styles.txt}>{label}</AppText>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
    },
    txt:{
       fontSize:FontSize.Font14,
        marginLeft:Spacing.width8
    }
})
