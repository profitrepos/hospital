import React, { FC } from "react"
import { ActivityIndicator, View, ViewStyle } from "react-native"
import { COLORS } from "../../theme"

interface PreloaderProps {
  color?: string
  size?: number | "large" | "small"
}

export const Preloader: FC<PreloaderProps> = ({ color = COLORS.mainBlue, size = "large" }) => {
  return (
    <View style={$container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
