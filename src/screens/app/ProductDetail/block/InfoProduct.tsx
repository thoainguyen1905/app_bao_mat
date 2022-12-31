import React from "react";
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {Colors, FontSize, Spacing} from "@theme";
import {AppStar, AppText, SelectDrop} from "@components";
import { t } from "i18next";
import {renderPrice} from "../../../../utils/PriceUtils";
type infoProductType={
    detail:any,
    sizes?:any,
    colors?:any,
    setColorSelect?:any,
    setSizeSelect?:any,
    amount?:any,
    setAmount?:any,
    openSP?:any,
    onInfoSize?:any,
    value?:any,
    setValue:any
}
import {showMessage} from "react-native-flash-message";

import {IconAdd, Minus} from "@assets";
import RenderHtml from "react-native-render-html";
import {Device} from "../../../../assets/device";


export const InfoProduct =React.memo((props:infoProductType) => {
    const {
        detail, sizes,
        colors, setSizeSelect,
        setColorSelect,
        amount, setAmount,
        onInfoSize,value,setValue
    }=props
    const adjustAmount = (type: number) => {
        const availability = true;
        console.log(value?.quantity)
        if (availability) {
            if (type === 1 && amount > 1) {
                setAmount(amount - 1);
            } else if (type === 2 ) {
                setAmount(amount + 1);
            } else if (type === 2 && amount===value?.quantity) {
                showMessage({
                    message:t("quantity_maximum"),
                    type: "info",
                    backgroundColor: Colors.error,
                    color: Colors.white,
                });
            }
        } else {
            if (type === 1 && amount > 1) {
                setAmount(amount - 1);
            } else if (type === 2) {
                setAmount(amount + 1);
            }
        }
    };
    return(
        <View style={styles.container}>
            <View style={styles.viewStar}>
                <AppText style={{color:Colors.white}}>{t('code')}{detail?.productDetails?.length >0?detail?.productDetails[0].code:''}</AppText>
            </View>
           <View style={styles.body}>
               <AppText style={styles.txtName} >{detail?.name}</AppText>
               <View style={styles.viewPrice}>
                   <View style={styles.viewDiscos}>
                       <AppText style={{color:Colors.white,fontSize:FontSize.Font12}}>{detail?.discountPercent}%</AppText>
                   </View>
                    <AppText style={styles.txt_price}>{renderPrice(detail?.price)}</AppText>
                   <AppText style={styles.txt_original_price}>{renderPrice(detail?.salePrice)}</AppText>
               </View>
               {detail?.salePrice - detail?.price !==0 &&<AppText
                   style={styles.txtDesPrice}>{t("desPrice").replace("price", renderPrice(detail?.salePrice - detail?.price))}</AppText>
               }
               <View style={styles.viewRow}>
                   {sizes?.length>0&&<SelectDrop
                       data={sizes}
                       // data={detail?.productDetails}
                       keyName={'size'}
                       width={'46%'}
                       onSelect={(item: any) => {
                           setSizeSelect(item)
                           setValue(item)
                       }}
                       titleTxt={t("titleSize")}
                       placeholder={t("selectSize")}
                   />}
                   {colors?.length>0&&<SelectDrop
                       data={colors}
                       onSelect={(item: any) => {

                           setValue(item)
                           setColorSelect(item)
                       }}
                       keyName={'color'}
                       width={'46%'}
                       titleTxt={t("titleColor")}
                       placeholder={t("selectColor")}
                   />}

               </View>
               <View style={{...styles.viewRow,alignItems:'flex-start'}}>
                   <View style={styles.quantiyContainer}>
                       <AppText>{t("quantity")}</AppText>
                       <View style={styles.adjustContainer}>
                           <TouchableOpacity
                               onPress={() => adjustAmount(1)}
                               style={styles.adjustAmount}
                               disabled={amount === 0}
                           >
                               <Minus/>
                           </TouchableOpacity>
                           <AppText style={styles.amount}>{amount}</AppText>
                           <TouchableOpacity
                               onPress={() => adjustAmount(2)}
                               style={styles.adjustAmount}
                               disabled={amount === 0}
                           >
                               <IconAdd/>
                           </TouchableOpacity>
                       </View>
                   </View>
                   <View style={{ height:Spacing.height60,width:"45%",justifyContent:'flex-end',}}>
                       <TouchableOpacity onPress={()=>onInfoSize()} style={{height:Spacing.height50,alignItems:'center' ,justifyContent:"center",backgroundColor:Colors.colorMain,borderRadius:Spacing.width8}}>
                            <AppText style={{fontSize:14,color:Colors.white}}>{t("sp")}</AppText>
                       </TouchableOpacity>
                   </View>
               </View>
               <AppText style={{marginTop:Spacing.height16}}>{t("desProduct")}</AppText>
               {detail?.description?.length > 0 &&
                   <RenderHtml
                       contentWidth={Device.width-Spacing.width32}
                       source={{ html: detail?.description }}
                       enableExperimentalMarginCollapsing={true}
                       enableExperimentalBRCollapsing={true}
                       enableExperimentalGhostLinesPrevention={true}
                   />
               }
           </View>
        </View>
    )
})
const styles=StyleSheet.create({
    container:{
        flex:1,
        // marginHorizontal:Spacing.width16
    },
    viewRow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:Spacing.height16
    },
    viewStar:{
       paddingHorizontal:Spacing.width16  ,
        backgroundColor:Colors.colorMain2,
        paddingVertical:Spacing.height8,
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between'
    },
    body:{
        marginHorizontal:Spacing.width16,
        marginTop:Spacing.height16
    },
    txtName:{
        fontSize:FontSize.Font16,

    },
    title:{
        fontSize:FontSize.Font14,
        color:Colors.black,
        fontWeight:'500',
        marginBottom:Spacing.height8
    },
    viewPrice:{
        flexDirection:'row',
        alignItems:"flex-end",
        marginVertical:Spacing.height16
    },
    viewDiscos:{
      backgroundColor:Colors.gray3,
        padding:4,
        marginRight:8,
        borderRadius:4
    },
txt_price:{
        fontSize:FontSize.Font17,
    fontWeight:'bold',
    color:Colors.red
},
    txt_original_price:{
        marginLeft:Spacing.width16,
        fontSize:FontSize.Font13,
        color:Colors.gray,
        textDecorationLine:'line-through'
    },
    txtDesPrice:{
        fontSize:FontSize.Font13,
        color:Colors.gray,

    },
    size:{
        marginTop:Spacing.height16,
    },
    btnSize:{
        // paddingHorizontal:Spacing.width8,
        minWidth:Spacing.width40,
        height:Spacing.height40,
        alignItems:'center',
        justifyContent:'center',

        marginHorizontal:Spacing.width8
    },
    quantiyContainer: {
        alignItems: "flex-start",
        justifyContent: "space-between",
        borderTopColor: Colors.border,

    },
    adjustAmount: {
        width: Spacing.width40,
        height: Spacing.height20,

        alignItems: "center",
        justifyContent: "center",
    },
    amount: {
        fontSize:FontSize.Font15,
        marginHorizontal: Spacing.width40,
    },
    adjustContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop:Spacing.height16
    },
})
