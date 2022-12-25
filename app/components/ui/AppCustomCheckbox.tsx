import React from "react"
import { TouchableOpacity, View, StyleSheet, ViewStyle, TextStyle } from "react-native"
import { TxKeyPath } from "../../i18n"
import { COLORS, SIZES, spacing } from "../../theme"
import { Text } from "./Text"

interface AppCustomCheckboxProps {
  active: boolean
  tx?: TxKeyPath
  title?: string
  onPress: () => void
  wrapperStyle?: ViewStyle
  checkboxStyle?: ViewStyle
  titleStyle?: TextStyle
  reverse?: boolean
}

export const AppCustomCheckbox: React.FC<AppCustomCheckboxProps> = ({
  active,
  tx,
  title,
  onPress,
  wrapperStyle,
  reverse = false,
  checkboxStyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity
      style={[$checkboxWrapper, wrapperStyle, reverse ? $checkboxWrapperRvrs : undefined]}
      onPress={onPress}
    >
      <View
        style={[
          $checkbox,
          { borderColor: active ? COLORS.mainBlue : "#7496CD" },
          reverse ? $checkboxRvrs : undefined,
          checkboxStyle,
        ]}
      >
        {active && <View style={$checkboxInner} />}
      </View>
      <Text style={[$checkboxText, titleStyle]} tx={tx} text={title} />
    </TouchableOpacity>
  )
}

const $checkboxWrapper: ViewStyle = {
  width: "100%",
  paddingVertical: spacing.small,
  flexDirection: "row",
  alignItems: "center",
}
const $checkboxWrapperRvrs: ViewStyle = {
  flexDirection: "row-reverse",
}
const $checkbox: ViewStyle = {
  width: 22,
  height: 22,
  borderRadius: 11,
  marginRight: spacing.small,
  alignItems: "center",
  justifyContent: "center",
  borderWidth: 2,
}
const $checkboxRvrs: ViewStyle = {
  marginRight: 0,
  marginLeft: spacing.small,
}
const $checkboxInner: ViewStyle = {
  width: 13,
  height: 13,
  backgroundColor: COLORS.mainBlue,
  borderRadius: 10,
}
const $checkboxText: TextStyle = {
  color: COLORS.mainTextBlack,
  maxWidth: SIZES.width * 0.65,
}
