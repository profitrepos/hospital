import React, { FC } from "react"
import { TouchableOpacity, ViewStyle, TextStyle } from "react-native"
import Checkbox from "expo-checkbox"
import { Text } from "./Text"
import { COLORS, spacing } from "../../theme"
import { TxKeyPath } from "../../i18n"

interface CheckboxProps {
  value: boolean
  onChange: (value: boolean) => void
  tx?: TxKeyPath
  title?: string
  reverse?: boolean
  wrapperStyle?: ViewStyle
  checkboxStyle?: ViewStyle
  titleStyle?: TextStyle
}
export const AppCheckbox: FC<CheckboxProps> = ({
  value,
  onChange,
  title,
  tx,
  reverse = false,
  wrapperStyle,
  checkboxStyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      style={[$checkboxWrapper, wrapperStyle, reverse ? $checkboxWrapperRvrs : undefined]}
      onPress={() => onChange(!value)}
      activeOpacity={0.9}
    >
      <Checkbox
        style={[$checkbox, checkboxStyle]}
        color={COLORS.icons}
        value={value}
        onValueChange={onChange}
      />
      <Text style={[$title, titleStyle]} tx={tx} text={title} />
    </TouchableOpacity>
  )
}

const $checkboxWrapper: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
}
const $checkboxWrapperRvrs: ViewStyle = {
  flexDirection: "row-reverse",
}
const $title: TextStyle = {
  color: COLORS.lightGrayAccept,
  fontSize: 14,
  lineHeight: 24,
  paddingVertical: spacing.tiny,
  paddingHorizontal: spacing.small,
}
const $checkbox: ViewStyle = {
  borderRadius: 4,
  width: 20,
  height: 20,
}
