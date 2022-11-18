import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppBox, Button, OtpInput, Screen, Text } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { OtpSVG } from "../components/svg"
import { COLORS, spacing } from "../theme"

export const OtpScreen: FC<StackScreenProps<AppStackParamList, "Otp">> = observer(
  function OtpScreen({ navigation }) {
    const [code, setCode] = useState("")
    const [resendAllowed, setResendAllowed] = useState(false)
    const [time, setTime] = React.useState(300)

    const confirmError = false
    const authError = false

    const otpHandler = () => {
      navigation.navigate("CreatePassword")
    }

    useEffect(() => {
      const interval = setInterval(() => {
        if (time === 0) {
          setResendAllowed(true)
          return clearInterval(interval)
        }
        setTime((prev) => prev - 1)
      }, 1000)

      return () => clearInterval(interval)
    }, [time])

    return (
      <Screen preset="scroll">
        <View style={$root}>
          <View style={$topSection}>
            <AppBox containerStyle={$containerBox} style={$box}>
              <OtpSVG height={120} width={133} style={$icon} />
              <Text style={$title} size="xl" tx="otpScreen.smsConfirm" preset="semiBold" />
              <Text style={$note} size="md" tx="otpScreen.note" />
              <OtpInput
                code={code}
                onChange={setCode}
                confirmCode={otpHandler}
                error={confirmError || authError}
              />
              {confirmError && <Text style={$error} tx="otpScreen.1" />}
              {authError && <Text style={$error} tx="otpScreen.2" />}
            </AppBox>
          </View>
          <View style={$bottomSection}>
            <Button
              onPress={() => console.log("REPEAT")}
              tx={resendAllowed ? "otpScreen.repeatWithoutTime" : "otpScreen.otpScreenWithTime"}
              preset={resendAllowed ? "default" : "disabled"}
              disabled={!resendAllowed}
              txOptions={{
                minutes: `${Math.floor(time / 60)}`,
                seconds: `${time % 60 < 10 ? `0${time % 60}` : `${time % 60}`}`,
              }}
            />
          </View>
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
const $topSection: ViewStyle = {
  flex: 1,
  marginVertical: spacing.large,
}
const $bottomSection: ViewStyle = {
  flex: 1,
}
const $containerBox: ViewStyle = {
  flex: 1,
}
const $icon: ViewStyle = {
  marginTop: spacing.large,
}
const $title: TextStyle = {
  marginBottom: spacing.extraLarge,
}
const $note: TextStyle = {
  color: COLORS.blackLight,
  lineHeight: 21,
  marginBottom: spacing.extraLarge,
}
const $box: ViewStyle = {
  alignItems: "center",
  padding: spacing.medium,
}
const $error: TextStyle = {
  color: COLORS.error,
  marginTop: spacing.small,
  textAlign: "center",
}
