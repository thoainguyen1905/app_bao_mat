import React, {useRef} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {AppImage, AppSlide} from "@components";
import Carousel from 'react-native-snap-carousel';
import {Spacing} from "@theme";
import {Device} from "../../../../assets/device";
import {array} from "yup";
const sliderWidth=Device.width-Spacing.width36
const itemWidth=Spacing.width303
type BannerType={
    data:any
}
export const BannerRow=(props:BannerType)=>{
    const {data}=props
    const _carousel=useRef<any>(null)
    const _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide} >
                <AppImage uri={item.imageUrl} style={{width:itemWidth,borderRadius:Spacing.width8,height:Spacing.height180}} resizeMode={'contain'}/>
                {/*<Image style={{width:itemWidth,borderRadius:Spacing.width8,height:Spacing.height180}} resizeMode={'contain'} source={{uri:item.imageUrl}}/>*/}
            </View>
        );
    }
    return(
        <View style={{flex:1,alignItems:'center',justifyContent:'center',marginHorizontal:Spacing.width16,height:Spacing.height200}}>
            <Carousel
                ref={_carousel}
                data={data}
                renderItem={_renderItem}
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                layout={'default'}

                // autoplay={true}
                // autoplayInterval={3000}
            />
        </View>
    )
}
export const styles=StyleSheet.create({
    slide:{
    },
    title:{

    }
})
