import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { spacing } from "../../theme"

type AppBoxPropsType = {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
}

export const AppBox: React.FC<AppBoxPropsType> = ({ children, style, containerStyle }) => {
  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0.7)"]}
      style={[$background, containerStyle]}
      locations={[0.5, 0.8]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={[$box, style]}>{children}</View>
    </LinearGradient>
  )
}

const $box: ViewStyle = {
  borderRadius: 12,
  width: "100%",
  flex: 1,
}
const $background: ViewStyle = {
  borderRadius: 12,
  width: "100%",
  padding: spacing.medium,
}
