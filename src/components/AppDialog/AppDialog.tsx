
import React from "react";
import { Modal, StyleSheet, Text, View } from "react-native";
import {AppButton, AppText} from "@components";
import {Colors, FontSize, Spacing} from "@theme";
import {t} from "i18next";
export interface AppDialogType {
    modalVisible?: boolean;
    onClose?: () => void;
    onSuccess?: any;
    Icon?: any;
    IconImage?: any;
    title?: string;
    content?: string;
}
export const AppDialog = (props: AppDialogType) => {
    const { modalVisible, onClose, onSuccess, title, content, Icon, IconImage } =
        props;

    const renderBtn = () => {
        if (onClose !== undefined && onSuccess !== undefined) {
            return (
                <View style={styles.viewBtn}>
                    <AppButton
                        onPress={onClose}
                        labelStyle={{color:Colors.white}}
                        label={t("cancel")}
                        style={{width:'45%',backgroundColor:Colors.colorMain2,height:Spacing.height52 ,borderRadius:8}}
                    />
                    <AppButton
                        onPress={onSuccess}
                        style={{width:'45%',height:Spacing.height52,borderRadius:8}}
                        labelStyle={{color:Colors.white}}
                        label={t("yes")}
                    />
                </View>
            );
        } else if (onClose !== undefined) {
            return (
                <AppButton
                    onPress={onClose}
                    labelStyle={{color:Colors.white}}
                    label={t("cancel")}
                    style={{
                        width:'45%',
                        height:Spacing.height52,
                        marginRight: Spacing.width20,
                        borderRadius:8 }}
                />
            );
        } else {
            return (
                <AppButton
                    onPress={onSuccess}
                    style={{
                        width:'45%',
                        height:Spacing.height52,
                       borderRadius:8,

                }}
                    labelStyle={{color:Colors.white}}
                    label={t("yes")}
                />
            );
        }
    };
    return (
        <Modal
            animationType={"fade"}
            style={styles.modalContainer}
            visible={modalVisible}
            onDismiss={onClose}
            transparent={true}
        >
            <View style={styles.contentContainer}>
                <View style={styles.mainContent}>
                    {Icon && <Icon />}
                    {IconImage && IconImage()}
                    <View style={{ alignItems: "center" }}>
                        <AppText style={styles.title}>{title}</AppText>
                        <AppText style={styles.content}>{content}</AppText>
                    </View>
                    {renderBtn()}
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    modalContainer: {},
    contentContainer: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    mainContent: {
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: Spacing.width335,
        borderRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: Spacing.width15,
        paddingBottom: Spacing.height20,
        paddingTop: Spacing.height40,
    },
    title: {
        // ...TextAppStyle.txt24_500,
        fontSize:FontSize.Font24,
        color:Colors.black,
        marginBottom: Spacing.height10,
        textAlign: "center",
    },
    content: {
        // ...TextAppStyle.txt14_400,
        fontSize:FontSize.Font14,
        color: Colors.placeholder,
        marginBottom: Spacing.height15,
        textAlign: "center",
    },
    viewBtn: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: Spacing.height20,
        width:'100%'
    },
});
