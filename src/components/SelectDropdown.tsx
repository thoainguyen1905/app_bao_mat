import {Closedown, Dropdown, Spacing} from "@assets";
import React, { useState } from "react";
import {StyleProp, StyleSheet, Text, View, ViewStyle} from "react-native";
import SelectDropdown from "react-native-select-dropdown";
import {Colors, FontSize} from "@theme";
import {AppText} from "./AppText";
type SelectDropType={
  ref?:any,
  data?:any,
  defaultValue?:any,
  titleSelect?:any,
  placeholder?:any,
  num ?:any,
  maxWidth ?:any,
  icon ?:any,
  titleTxt?:any,
  width?:any,
  onSelect:any,
  keyName?:string,
  style?:StyleProp<ViewStyle>,
  styleContainer?:StyleProp<ViewStyle>,
}
export const SelectDrop = (props:SelectDropType) => {
  const {
    ref,
    data,
    defaultValue,
    titleSelect,
    placeholder,
    num = 1,
    maxWidth = undefined,
    icon = false,
    titleTxt,
      keyName,
      style,
    styleContainer
  } = props;

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={[{ width: props.width },styleContainer]}>
      {titleTxt && (
        <AppText
          style={[

            {  fontSize:FontSize.Font13,color:Colors.black, marginBottom: Spacing.height8 },
          ]}
        >
          {titleTxt}
        </AppText>
      )}
      <SelectDropdown
        ref={ref}
        data={data}
        defaultValueByIndex={defaultValue}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        onSelect={props.onSelect}
        buttonStyle={styles.dropdown3BtnStyle}
        renderCustomizedButtonChild={(selectedItem, index) => {
          setSelectedIndex(index);
          return (
            <View style={[styles.dropdown3BtnChildStyle,style]}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {titleSelect && !selectedItem ? (
                  <View style={styles.selectLine}>
                    <Text style={styles.dropdown3BtnTxt}>{titleSelect}</Text>
                  </View>
                ) : (
                  <View style={styles.selectLine}>
                    <Text
                      style={[styles.dropdown3BtnTxt, { maxWidth: maxWidth ,color: selectedItem?Colors.black:Colors.gray}]}
                      numberOfLines={num}
                    >
                      {selectedItem ? selectedItem[`${keyName}`] : placeholder}
                    </Text>
                  </View>
                )}
              </View>

              {!isOpen ? (
                <Dropdown />
              ) : (
                <Closedown />
              )}
            </View>
          );
        }}
        dropdownStyle={styles.dropdown3DropdownStyle}
        rowStyle={styles.dropdown3RowStyle}
        renderCustomizedRowChild={(item, index) => {
          console.log('item:',item,item[`${keyName}`],keyName)
          return (
            <View style={styles.dropdown3RowChildStyle}>
              <Text
                numberOfLines={1}
                style={
                  index === selectedIndex
                    ? styles.dropdown3RowTxtSelected
                    : item?.available
                    ? styles.dropdown3RowTxt
                    : styles.dropdown3RowTxtDisable
                }
              >
                {item[`${keyName}`]}
              </Text>
            </View>
          );
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          // text represented after item is selected
          // if data array is an array of objects then return selectedItem.property to render after item is selected
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          // text represented for each item in dropdown
          // if data array is an array of objects then return item.property to represent item in dropdown
          return item
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  selectLine: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdown3BtnStyle: {
    width: "100%",
    height: Spacing.height52,
    paddingHorizontal: 0,
    borderRadius: 8,
    borderColor: "#444",
  },
  dropdown3BtnChildStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: Spacing.width8,
    paddingRight: Spacing.width8,
    backgroundColor: "#F6F6F6",
  },
  dropdown3BtnTxt: {
    fontSize:FontSize.Font14,
    color: "rgba(30, 32, 41, 1)",
  },
  dropdown3DropdownStyle: {
    backgroundColor: "white",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  dropdown3RowStyle: {
    backgroundColor: "white",
    borderBottomColor: "white",
    height: 50,
  },
  dropdown3RowChildStyle: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FFFFFF",
    // borderRadius: 4,
  },
  dropdownRowImage: { width: 45, height: 45, resizeMode: "cover" },
  dropdown3RowTxt: {
    fontSize:FontSize.Font18,
    textAlign: "center",
    marginLeft: Spacing.width15,
    color: Colors.black,
  },
  dropdown3RowTxtSelected: {
    fontSize:FontSize.Font18,
    textAlign: "center",
    marginLeft: Spacing.width15,
    color: "#000000",
  },
  dropdown3RowTxtDisable: {
    fontSize:FontSize.Font18,
    textAlign: "center",
    marginLeft: Spacing.width15,
    color: Colors.gray,
  },
});
