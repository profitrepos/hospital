import React, { PropsWithChildren } from "react"
import RNPickerSelect, { Item, PickerSelectProps, PickerStyle } from "react-native-picker-select"
import Icon from "react-native-vector-icons/MaterialIcons"

import { StyleSheet, TextStyle, View, ViewStyle } from "react-native"
import { COLORS, spacing } from "../../theme"

interface SelectPropsType extends PickerSelectProps {
  style?: PickerStyle
  containerStyle?: ViewStyle
}

export const Select = ({
  style,
  placeholder = {},
  containerStyle,
  ...props
}: PropsWithChildren<SelectPropsType>) => {
  return (
    <View style={containerStyle}>
      <RNPickerSelect
        placeholder={placeholder}
        fixAndroidTouchableBug={true}
        useNativeAndroidPickerStyle={false}
        style={{ ...pickerSelectStyles, ...style }}
        doneText="Выбрать"
        Icon={() => <Icon name="arrow-drop-down" style={$icon} color={COLORS.mainBlue} />}
        {...props}
      />
    </View>
  )
}

const pickerSelectStyles: PickerStyle = StyleSheet.create({
  headlessAndroidContainer: {
    backgroundColor: COLORS.iconsBG,
    borderRadius: 8,
    paddingVertical: spacing.medium,
    paddingLeft: spacing.medium,
    justifyContent: "center",
  },
  inputAndroid: {
    fontSize: 14,
    color: COLORS.blackLight2,
    borderRadius: 8,
    fontFamily: "Gilroy-Medium",
    marginRight: spacing.huge,
  },
  //TODO: проверить чтобы текст не заходил за иконку
  inputIOS: {
    fontSize: 14,
    color: COLORS.blackLight2,
    borderRadius: 8,
    fontFamily: "Gilroy-Medium",
  },
  iconContainer: {
    marginRight: spacing.extraSmall,
    backgroundColor: COLORS.iconsBG,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  placeholder: {
    fontSize: 14,
    color: "red",
    borderRadius: 8,
    fontFamily: "Gilroy-Medium",
  },
  inputIOSContainer: {
    padding: spacing.extraSmall,
    justifyContent: "center",
    fontSize: 16,
    backgroundColor: COLORS.iconsBG,
  },
})

const $icon: TextStyle = {
  fontSize: 24,
}
