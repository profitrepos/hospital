import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { TxKeyPath } from "../../i18n"
import { COLORS, spacing } from "../../theme"
import { Text } from "./Text"

interface ScreenTitleProps {
  text?: TxKeyPath
  customText?: string
  containerStyle?: ViewStyle
}

export const ScreenTitle: FC<ScreenTitleProps> = ({ text, customText, containerStyle }) => {
  return (
    <View style={[$title, containerStyle]}>
      <Text preset="heading" tx={text} style={$text} text={customText} />
    </View>
  )
}

const $title: ViewStyle = {
  alignItems: "center",
  marginBottom: spacing.medium,
}
const $text: TextStyle = {
  color: COLORS.mainBlue,
  textAlign: "center",
}
