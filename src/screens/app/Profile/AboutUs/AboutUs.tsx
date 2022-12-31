import React from "react";
import {useModel} from "./AboutUs.hook";
import {Image, ScrollView, View} from "react-native";
import {styles} from "./styles";
import {AppImage, AppText, HeaderScreen} from "@components";
import {t} from "i18next";
import {logoApp2} from "@assets";
export const AboutUs =(props:any)=>{
    const {}=useModel(props)
    return(
        <View style={styles.container}>
            <HeaderScreen name={t('aboutUS')}/>

            <Image source={logoApp2} style={styles.logoApp}/>
            <ScrollView style={{marginHorizontal:16,marginTop:16}}>
                <View>
                    <AppText>
                        {t('phone')}:  0239999999
                    </AppText>
                    <AppText>
                        {t('address1')}:  123 Cau Giay, Ha Noi
                    </AppText>
                    <AppText>
                        {t('email')}:  admin@hihu.vn
                    </AppText>
                </View>
                <View style={{marginTop:16}}>
                    <AppText style={{fontSize:13,fontWeight:'400'}}>
                       Shop HiHu luôn luôn cập nhật những trend thời trang mới nhất cùng sự trải nghiệm tốt nhất dành cho khách hàng. Các sản phẩm chính chúng tôi cung cấp như quần áo thời trang nam, quần jean, quần vải nam
                    </AppText>
                </View>

                <AppImage uri={'https://toplist.vn/images/800px/doc-menwear-323919.jpg'} style={styles.viewImg} resizeMode={"contain"}/>
            </ScrollView>
        </View>
    )
}
