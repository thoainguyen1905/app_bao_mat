import React from "react";
import {useModel} from "./Order.hook";
import {FlatList, TouchableOpacity, View} from "react-native";
import {AppImage, AppText, HeaderScreen, LoadingScreen} from "@components";
import {t} from "i18next";
import {styles} from "./styles";
import {Colors, FontSize, Spacing} from "@theme";
import {BackgroundOrder, ColorTxtOrder, DataTitleOrder, formatDate, TxtOrderStatus} from "@utils";
import {Device} from "../../../assets/device";
import {IconDots, IconOrderBig} from "@assets";
import {renderPrice} from "../../../utils/PriceUtils";
import {navigate, reset, SCREEN_ROUTE} from "@navigation";
export const Order =(props:any)=>{
    const {refFlatList,numTab,setNumTab,data,params,loading,numUnConfimred,setNumUnConfimred,setIndexOrder}=useModel(props)
    // @ts-ignore
    const renderItem=({item,index})=>{
        return(
            <TouchableOpacity
                onPress={() => navigate(SCREEN_ROUTE.ORDER_DETAIL,{item:item})}
                style={styles.orderCartContainer}
            >
                <View style={styles.orderInfo}>
                    <View>
                        <AppText style={styles.orderId}>#{item?.code}</AppText>
                        <AppText style={styles.orderDate}>
                            {formatDate(item?.createdDate,"DD/MM/YYYY")}
                        </AppText>
                    </View>
                   <View style={{backgroundColor:BackgroundOrder(item?.status),padding:8,borderRadius:8}}>
                       <AppText style={{color:ColorTxtOrder(item?.status)}}>{TxtOrderStatus(item?.status)}</AppText>
                   </View>
                </View>
                <IconDots width={Device.width - Spacing.width70} />
                <View style={{ marginVertical: Spacing.height10 }}>
                    <AppText style={styles.numItemTxt}>{item?.orderDetails?.length} {t('item')}</AppText>
                    <View style={styles.productContainerInfo}>
                        <View style={styles.listImage}>
                            {item?.orderDetails?.map((item: any, index: number) => {
                                if (index < 4) {
                                    return <AppImage style={styles.image} uri={item?.product?.imageUrl[0]} />;
                                } else if (index < 5) {
                                    return (
                                        <View style={styles.surplus}>
                                            <AppText style={styles.number}>
                                                +{Number(item?.orderDetails?.length) - 4}
                                            </AppText>
                                        </View>
                                    );
                                }
                            })}
                        </View>
                        <View>
                            <AppText style={styles.orderTotalTitle}>{t("orderTotal")}</AppText>
                            <AppText style={styles.totalPrice}>
                                {renderPrice(item?.price)}
                            </AppText>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const onViewCallBack = React.useCallback((viewableItems)=> {
        const num:number=viewableItems?.viewableItems[0]?.index
        setNumTab(num)
    },[]) // any dependencies that require the function to be "redeclared"
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    // @ts-ignore
    const renderItemHeader=({item,index})=>{
        return(
            <TouchableOpacity style={index===numTab?styles.viewItemHeaderSelect:styles.viewItemHeader} onPress={()=>{
                setTimeout(() => {
                    setNumTab(index)
                    setIndexOrder(item.value)
                    // refFlatList?.current?.scrollToIndex({
                    //     animated: true,
                    //     index: index,
                    // });
                }, 0);

            }}>
                <AppText style={{color:index===numTab?Colors.white:Colors.black}}>{item?.name}</AppText>
            </TouchableOpacity>
        )
    }
    const renderBody=(index:number)=>{
        if(index===0){
            return (
                <View style={{height: Device.height - Spacing.height200}}>
                    <View style={{width: '100%', height: Spacing.height50,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <TouchableOpacity style={{...styles.btnHeader,backgroundColor:numUnConfimred?Colors.white:Colors.colorMain2}} onPress={()=> {
                            setIndexOrder(1)
                            setNumUnConfimred(false)
                        }}>
                            <AppText style={{color:!numUnConfimred?Colors.white:Colors.black}}>{t("UNPAID")}</AppText>
                        </TouchableOpacity>
                        <TouchableOpacity style={{...styles.btnHeader,backgroundColor:!numUnConfimred?Colors.white:Colors.colorMain2}} onPress={()=> {
                            setIndexOrder(2)
                            setNumUnConfimred(true)
                        }}>
                            <AppText style={{color:numUnConfimred?Colors.white:Colors.black}}>{t("PAID")}</AppText>
                        </TouchableOpacity>
                    </View>
                    <View style={{height: Device.height - Spacing.height250}}>
                        <FlatList
                            data={data ? data : []}
                            style={{height: Device.height - Spacing.height250}}
                            showsHorizontalScrollIndicator={false}
                            // horizontal={true}
                            // pagingEnabled
                            keyExtractor={(item, index) => `list_image_big_${index.toString()}`}
                            ref={refFlatList}
                            // initialScrollIndex={numTab}
                            // onScrollToIndexFailed={info => {
                            //     const wait = new Promise(resolve => setTimeout(resolve, 0));
                            //     wait.then(() => {
                            //         refFlatList?.current?.scrollToIndex({
                            //             index: info.index,
                            //             animated: true,
                            //         });
                            //     });
                            // }}
                            renderItem={renderItem}
                            // onViewableItemsChanged={onViewCallBack}
                            // viewabilityConfig={viewConfigRef.current}
                            scrollEventThrottle={1}
                            ListEmptyComponent={() => {
                                console.log('hieu')
                                return (
                                    <View style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        flex: 1,
                                        width: Device.width,
                                        height: Device.height - Spacing.height200
                                    }}>
                                        <IconOrderBig/>
                                        <AppText style={{
                                            color: Colors.gray,
                                            marginTop: Spacing.width8
                                        }}>{t("notOrder")}</AppText>
                                    </View>
                                )
                            }}
                        />
                        <LoadingScreen status={loading}/>
                    </View>
                </View>
            );
        }else {
            return (
                <View style={{height:Device.height-Spacing.height200}}>
                    <FlatList
                        data={data?data:[]}
                        style={{height:Device.height-Spacing.height200}}
                        showsHorizontalScrollIndicator={false}
                        // horizontal={true}
                        // pagingEnabled
                        keyExtractor={(item,index)=>`list_image_big_${index.toString()}`}
                        ref={refFlatList}
                        // initialScrollIndex={numTab}
                        // onScrollToIndexFailed={info => {
                        //     const wait = new Promise(resolve => setTimeout(resolve, 0));
                        //     wait.then(() => {
                        //         refFlatList?.current?.scrollToIndex({
                        //             index: info.index,
                        //             animated: true,
                        //         });
                        //     });
                        // }}
                        renderItem={renderItem}
                        // onViewableItemsChanged={onViewCallBack}
                        // viewabilityConfig={viewConfigRef.current}
                        scrollEventThrottle={1}
                        ListEmptyComponent={()=>{
                            console.log('hieu')
                            return(
                                <View style={{alignItems:'center',justifyContent:'center',flex:1,width:Device.width,height:Device.height-Spacing.height200}}>
                                    <IconOrderBig/>
                                    <AppText style={{color:Colors.gray,marginTop:Spacing.width8}}>{t("notOrder")}</AppText>
                                </View>
                            )
                        }}
                    />
                    <LoadingScreen status={loading}/>
                </View>
            )
        }
    }
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('order')} goToBack={()=>navigate(SCREEN_ROUTE.PROFILE_PAGE)}/>
            <FlatList
                data={DataTitleOrder}
                renderItem={renderItemHeader}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.listHeader}
                keyExtractor={(item,index)=>`list_image_smail_${index.toString()}`}/>
            {renderBody(numTab)}
        </View>
    )
}
