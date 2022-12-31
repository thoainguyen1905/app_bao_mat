import React from "react";
import {useModel} from "./ProductDetail.hook";
import {FlatList, ScrollView, View} from "react-native";
import {styles} from "./styles";
import {AppSlide, AppText, HeaderScreen} from "@components";
import {BottomProduct} from "./block/BottomProduct";
import {InfoProduct} from "./block/InfoProduct";
import {Colors, FontSize, Spacing} from "@theme";
import RBSheet from "react-native-raw-bottom-sheet";
import {AppImage} from "../../../components/AppImage/AppImage";
import {Device} from "../../../assets/device";
import { t } from "i18next";
const listInfoSize=[
    "https://file.hstatic.net/200000201725/file/quan_jean_2d06b93170cf48aeba5bbf3f37592a5a_master.jpg",
    "https://file.hstatic.net/200000201725/file/quan_jogger_06eae128a000431496275e8c6ce709ea_master.jpg",
    "https://file.hstatic.net/200000201725/file/quan_kaki_e19d5342af55404da78775c61d07cead_master.jpg",
    "https://file.hstatic.net/200000201725/file/quan_tay_e4307d69ebb84c6fb309fefa1f3b0d3d_master.jpg",
    "https://file.hstatic.net/200000201725/file/quan_short_42fe0b5e9a4745d5af9ff1137e64606a_master.jpg",
    "https://file.hstatic.net/200000201725/file/ao_hoodie_c751bc01aba14e63b3f90f2e8729109b_master.jpg",
    "https://file.hstatic.net/200000201725/file/ao_len-sweater_4b18e3e960ec4f93a8472a274d220362_master.jpg",
    "https://file.hstatic.net/200000201725/file/ao_tanktop_10a2265e7a624738aee21eb2a0796ff7_master.jpg",
    "https://file.hstatic.net/200000201725/file/ao_ni-sweatshirt_7a2ac041da264380a6ca6642d6df3d45_master.jpg",
    "https://file.hstatic.net/200000201725/file/ao_khoac_056e1d3c31dd46208f81c0f2698b7d3b_master.jpg",
    "https://file.hstatic.net/200000201725/file/ao_polo_cc8a36ef7ded4d0a9cc080ad75f56556_master_52fc92709fe64439bd8f3a0365d72030_grande.jpg",
    "https://file.hstatic.net/200000201725/file/ao_somi_53d4d8a813904c4ea0686f3112c2f571_master.jpg",
    "https://file.hstatic.net/200000201725/file/ao_thun_092f3b2909a54d498928f18b6e1ea020_master.jpg"
]
export const ProductDetail =(props:any)=>{
    const {data, sizes,
        colors,amount, setAmount,setSizeSelect,
        setColorSelect,
        refProduct,
        value,
        BuyNow,
        AddCart,renderStatus,setValue
    }=useModel(props)

    return(
        <View style={styles.container}>
            <HeaderScreen/>
           <ScrollView showsVerticalScrollIndicator={false}>
               <AppSlide images={data?.imageUrl}/>
               <InfoProduct
                   detail={data}
                   colors={colors}
                   sizes={sizes}
                   setValue={setValue}
                   setColorSelect={setColorSelect}
                   setSizeSelect={setSizeSelect}
                   amount={amount}
                   setAmount={setAmount}
                   openSP={()=>{}}
                   value={value}
                   onInfoSize={()=>{
                       refProduct?.current?.open()
                   }}
               />
               <View style={{height:Spacing.height62}}/>
           </ScrollView>
            <BottomProduct
                onBuy={BuyNow}
                onCart={AddCart}
                status={!renderStatus()}
            />
            <RBSheet
                ref={refProduct}
                height={400}
                animationType={"fade"}
                openDuration={150}
                customStyles={{
                    container: {
                        // justifyContent: "center",
                        // alignItems: "center"
                    }
                }}
            >
                <View style={{marginVertical:Spacing.height18}}>
                    <AppText style={{fontSize:FontSize.Font18,textAlign:'center'}}>{t("sp").toUpperCase()}</AppText>
                   <View>
                       <FlatList
                           data={listInfoSize}
                           style={{marginTop:Spacing.height16}}
                           renderItem={({item,index})=>(
                               <View>
                                   <AppImage
                                       uri={item}
                                       style={{
                                           width:Device.width,
                                           height:300,
                                       }}
                                       resizeMode={'contain'}
                                   />
                                   <AppText style={{position:'absolute',backgroundColor:Colors.colorMain2,color:Colors.white,padding:Spacing.width8,borderRadius:8,overflow:'hidden',right:16}}>{index}/{listInfoSize?.length}</AppText>
                               </View>
                           )}
                           scrollEventThrottle={1}
                           pagingEnabled
                           showsHorizontalScrollIndicator={false}
                           horizontal={true}
                       />

                   </View>
                </View>
            </RBSheet>
        </View>
    )
}
