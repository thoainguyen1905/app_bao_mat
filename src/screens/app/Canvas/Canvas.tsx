import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Alert, TouchableOpacity,
} from 'react-native';
import {
    Shadow,
    Fill,
    RoundedRect,
    Canvas, useFont, Text, Skia
} from "@shopify/react-native-skia";
import {LoadingScreen} from "@components";
import {useDispatch} from "react-redux";
import {logoutUser} from "@redux";

export const CanvasScreen =()=> {
    const dispatch = useDispatch();
    const fontSize = 32;
    const font = useFont(require("../../../assets/fonts/Barlow-Black.ttf"), fontSize);
    if (!font) {
        return null;
    }
        return (
            <View style={styles.container}>
               <TouchableOpacity onPress={()=>{
                   console.log('hiu')
                   dispatch(logoutUser())
               }}>
                   <Canvas style={{ width: 256, height: 256 }}>
                       {/*<Fill color="lightblue" />*/}
                       <RoundedRect x={32} y={32} width={192} height={192} r={32} color="lightblue">
                           <Shadow dx={12} dy={12} blur={25} color="#93b8c4" />
                           <Shadow dx={-12} dy={-12} blur={25} color="#c7f8ff" />
                       </RoundedRect>
                   </Canvas>
               </TouchableOpacity>
                {/*<LoadingScreen/>*/}
            </View>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF',
    },
    strokeColorButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
    },
    strokeWidthButton: {
        marginHorizontal: 2.5, marginVertical: 8, width: 30, height: 30, borderRadius: 15,
        justifyContent: 'center', alignItems: 'center', backgroundColor: '#39579A'
    },
    functionButton: {
        marginHorizontal: 2.5, marginVertical: 8, height: 30, width: 60,
        backgroundColor: '#39579A', justifyContent: 'center', alignItems: 'center', borderRadius: 5,
    }
});
