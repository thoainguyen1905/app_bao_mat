import React from "react";
import {useModel} from "./Search.hook";
import {FlatList, Image, RefreshControl, Text, TextInput, TouchableOpacity, View} from "react-native";
import {styles} from "./styles";
import {AppImage, AppText, HeaderScreen, LoadingScreen, SelectDrop} from "@components";
import { t } from "i18next";
import {NavigationUtils, SCREEN_ROUTE} from "@navigation";
import {BackIcon, IconNoProduct, IconSold, SearchIcon} from "@assets";
import {Colors, Spacing} from "@theme";
import {renderImage} from "../../../utils/ImageUtils";
import {renderPrice} from "../../../utils/PriceUtils";
import {DataFilter} from "@utils";
import {Device} from "../../../assets/device";

export const Search =(props:any)=>{
    const {text,searchProduct,refInput,data,loading,callApiSearch,onFilter,isSearch,
        refreshing,onRefresh}=useModel(props)
    // @ts-ignore
    const renderItem =({item,index})=>{
        return (
            <TouchableOpacity onPress={()=>{
                NavigationUtils.navigate(SCREEN_ROUTE.PRODUCT_DETAIL,{id:item?.id})
            }} style={{...styles.viewProduct,marginLeft:index%2!==0?Spacing.width20:0}}>
                <Image style={styles.img_product} resizeMode={"contain"} source={renderImage(item.imageUrl)}/>
                <Text style={styles.txt_product} numberOfLines={2}>{item?.name}</Text>

                <View style={styles.viewPrice}>
                    <Text style={styles.txt_price_product}>{renderPrice(item?.price)}</Text>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                        <IconSold/>
                        <Text style={styles.txt_sold_product}>({item?.totalSold})</Text>

                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return(
        <View style={styles.container}>
            <View style={styles.viewSearch}>
                <TouchableOpacity style={styles.iconBack} onPress={() => {
                    NavigationUtils.goBack()
                }}>
                    <BackIcon/>
                </TouchableOpacity>
                <TextInput
                    style={styles.txtSearch}
                    ref={refInput}
                    value={text}
                    placeholder={t('txtSearch')}
                    placeholderTextColor={Colors.placeholder}
                    returnKeyType={'search'}
                    onSubmitEditing={({nativeEvent: {text}}) => {
                        callApiSearch(text)
                    }}
                    onChangeText={(text)=>searchProduct(text)}/>
               <TouchableOpacity  style={styles.iconSearch}>
                   <SearchIcon/>
               </TouchableOpacity>
            </View>
            {data?.length!==0&&<SelectDrop
                data={DataFilter}
                width={'40%'}
                styleContainer={{alignSelf:'flex-end',marginVertical:Spacing.height16,}}
                style={{borderColor:Colors.border,borderWidth:1,backgroundColor:Colors.white}}
                keyName={'name'}
                onSelect={(item:any) => {
                    onFilter(item?.value)
                }}
                placeholder={t("selectFilter")}
            />}
            <FlatList
                data={data}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal:Spacing.width16,
                    height:Device.height-Spacing.height50
                }}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
                renderItem={renderItem}
                ListEmptyComponent={()=>{
                   if(isSearch && data?.length===0){
                       return(
                           <View style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
                               <IconNoProduct/>
                               <AppText>{t('notProduct')}</AppText>
                               {/*<Image source={NoProduct} resizeMode={'center'} style={{width:Spacing.width100,height:Spacing.width100,backgroundColor:'red'}}/>*/}
                           </View>
                       )
                   }else {
                       return null
                   }
                }}
                numColumns={2}
                keyExtractor={(item,index)=>`list_product_${index.toString()}`}
            />
            <LoadingScreen status={loading}/>
        </View>
    )
}
