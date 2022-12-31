import React, {Component, useCallback, useMemo, useRef, useState} from "react";
import {
    SafeAreaView,
    ScrollView,
    Text,
    StyleSheet,
    View,
    ImageBackground,
    Animated,
    Dimensions, useWindowDimensions, Image, FlatList, TouchableOpacity, ActivityIndicator
} from "react-native";
import {Colors, Spacing} from "@theme";
import {Device} from "../../assets/device";
import {AppImage} from "../AppImage/AppImage";
type AppSlideType={
    images:any
}
type imageProduct={
    item:any;
    index:number
}
const RenderImageProduct= React.memo((props:imageProduct) => {
    const {item,index}=props
    const {width: windowWidth} = useWindowDimensions();
    return(
            <View style={{width:windowWidth, height:  Device.height/2}}>
                <AppImage
                    uri={item}
                    style={styles.card}
                    resizeMode={"contain"}
                />
            </View>
    )
})
export const AppSlide = (props:AppSlideType) => {
    const {images}=props
    const [numImage,setNumImage]=useState(0)
    const refFlatList=useRef<any>()
    const {width: windowWidth} = useWindowDimensions();

    const onViewCallBack = React.useCallback((viewableItems)=> {
        const num:number=viewableItems?.viewableItems[0]?.index
        setNumImage(num)
    }, []) // any dependencies that require the function to be "redeclared"
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    // @ts-ignore
    const renderItem=({item,index})=>{
        return <RenderImageProduct item={item} index={index}/>
    }
    if(images){
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={images?images:[]}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    pagingEnabled
                    keyExtractor={(item,index)=>`list_image_big_${index.toString()}`}
                    ref={refFlatList}
                    initialScrollIndex={numImage}
                    onScrollToIndexFailed={info => {
                        const wait = new Promise(resolve => setTimeout(resolve, 0));
                        wait.then(() => {
                            refFlatList?.current?.scrollToIndex({
                                index: info.index,
                                animated: true,
                            });
                        });
                    }}
                    renderItem={renderItem}
                    onViewableItemsChanged={onViewCallBack}
                    viewabilityConfig={viewConfigRef.current}
                    scrollEventThrottle={1}
                />
                <View style={styles.indicatorContainer}>
                    {images?.map((image:string, imageIndex:number) => {
                        return (
                            <TouchableOpacity key={`list_image_smail_${imageIndex.toString()}`} onPress={()=>{
                                setTimeout(() => {
                                    setNumImage(imageIndex)
                                    refFlatList?.current?.scrollToIndex({
                                        animated: true,
                                        index: imageIndex,
                                    });
                                }, 0);

                            }}>
                                <AppImage uri={image} style={{...styles.image2,borderWidth:imageIndex===numImage?2:0,borderColor:Colors.colorMain}}/>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </SafeAreaView>
        );
    }else {
        return <AppImage
            uri={''}
            style={{width:windowWidth, height:  Device.height/2}}
            resizeMode={"contain"}
        />
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",

    },
    card: {
        marginHorizontal: 16,
        borderRadius: 5,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        width:Device.width,
        height:  Device.height/2,

    },
    indicatorContainer: {
        marginVertical:Spacing.height12,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    image2:{
        width:Spacing.width50,
        height:Spacing.height50,
        marginLeft:Spacing.width8
    }
});
