import React, { PropsWithChildren } from "react"
import RNPickerSelect, { Item, PickerStyle } from "react-native-picker-select"
import Icon from "react-native-vector-icons/MaterialIcons"

import { StyleSheet, TextStyle } from "react-native"
import { COLORS, spacing } from "../../theme"

interface SelectPropsType<T> {
  placeholder: string
  value: T
  onValueChange: (value: T) => void
  data: Item[]
  style?: PickerStyle
}

export const Select = <T,>({
  placeholder,
  value,
  onValueChange,
  data,
  style = {},
}: PropsWithChildren<SelectPropsType<T>>) => {
  return (
    <RNPickerSelect
      fixAndroidTouchableBug={true}
      placeholder={{
        label: placeholder,
        value: null,
        color: "#000",
      }}
      value={value}
      onValueChange={onValueChange}
      items={data}
      useNativeAndroidPickerStyle={false}
      style={{ ...pickerSelectStyles, ...style }}
      doneText="Выбрать"
      Icon={() => <Icon name="arrow-drop-down" style={$icon} color={COLORS.mainBlue} />}
    />
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
  },
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
