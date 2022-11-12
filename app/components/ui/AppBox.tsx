import React from "react"
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { spacing } from "../../theme"

type AppBoxPropsType = {
  children: React.ReactNode
  cardStyle?: StyleProp<ViewStyle>
  backgroundStyle?: StyleProp<ViewStyle>
}

export const AppBox: React.FC<AppBoxPropsType> = ({
  children,
  cardStyle = {},
  backgroundStyle = {},
}) => {
  return (
    <LinearGradient
      colors={["rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.9)"]}
      style={[$background, backgroundStyle]}
      locations={[0.5, 0.8]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
    >
      <View style={[$card, cardStyle]}>{children}</View>
    </LinearGradient>
  )
}

const $card: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  paddingHorizontal: spacing.medium,
  borderRadius: 12,
}
const $background: ViewStyle = {
  borderRadius: 12,
  width: "100%",
  paddingVertical: spacing.medium,
}
