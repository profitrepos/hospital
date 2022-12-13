import React from "react"
import { View, Image, ScrollView, ViewStyle, ImageStyle, TextStyle } from "react-native"
import { TxKeyPath } from "../i18n"
import { COLORS, spacing } from "../theme"
import { Button, Text } from "./ui"

const redXImg = require("../../assets/images/red_X.png")

type AppErrorPropsType = {
  title?: TxKeyPath
  customTitle?: string
  subtitle?: TxKeyPath
  customSubtitle?: string
  closeError: () => void
  btnText?: TxKeyPath
}

export const AppError: React.FC<AppErrorPropsType> = ({
  title = "errors.common",
  subtitle,
  closeError,
  btnText = "common.back",
  customTitle,
  customSubtitle,
}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={$flexGrow}>
      <View style={$modalContent}>
        <View style={$modalBox}>
          <Image source={redXImg} style={$modalImage} />
          <Text style={$modalTitle} tx={title} text={customTitle} />
          <Text style={$modalSubtitle} tx={subtitle} text={customSubtitle} />
        </View>
        <View style={$modalFooter}>
          <Button style={$modalBtn} onPress={closeError} tx={btnText} />
        </View>
      </View>
    </ScrollView>
  )
}

const $flexGrow: ViewStyle = {
  flexGrow: 1,
}
const $modalContent: ViewStyle = {
  padding: spacing.small,
  flex: 1,
  borderRadius: 10,
}
const $modalBox: ViewStyle = {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
}
const $modalImage: ImageStyle = {
  width: 90,
  height: 90,
  resizeMode: "contain",
}

const $modalTitle: TextStyle = {
  color: COLORS.darkingBlue,
  fontSize: 18,
  fontFamily: "Gilroy-Bold",
  marginBottom: spacing.medium,
  textAlign: "center",
}
const $modalSubtitle: TextStyle = {
  color: COLORS.error,
  fontSize: 13,
  textAlign: "center",
  paddingHorizontal: spacing.large,
}
const $modalFooter: ViewStyle = {
  marginTop: spacing.small,
}
const $modalBtn: ViewStyle = {
  marginTop: spacing.small,
}
