import React, { FC } from "react"
import { ActivityIndicator, View, ViewStyle } from "react-native"
import { COLORS } from "../../theme"

interface PreloaderProps {
  color?: string
  size?: number | "large" | "small"
  style?: ViewStyle
}

export const Preloader: FC<PreloaderProps> = ({
  color = COLORS.mainBlue,
  size = "large",
  style,
}) => {
  return (
    <View style={[$container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
