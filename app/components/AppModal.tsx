import React, { FC } from "react"
import { ViewStyle } from "react-native"
import Animated, { SlideInDown } from "react-native-reanimated"
import { AppBox, Button, Screen } from "./ui"

interface AppModalProps {
  children: React.ReactNode
  containerStyle?: ViewStyle
}

export const AppModal: FC<AppModalProps> = ({ children, containerStyle }) => {
  return (
    <Animated.View entering={SlideInDown} style={$root}>
      <Screen preset="fixed">
        <AppBox containerStyle={[$container, containerStyle]} style={$box}>
          {children}
        </AppBox>
      </Screen>
    </Animated.View>
  )
}

const $root: ViewStyle = {
  flex: 1,
}
const $box: ViewStyle = {
  flex: 1,
}
const $container: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
