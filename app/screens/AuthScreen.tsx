import React, { FC, useState } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { AppBox, Button, Screen, TextField, Text } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { AuthSVG, FlagSVG } from "../components/svg"
import { spacing } from "../theme"

export const AuthScreen: FC<StackScreenProps<AppStackParamList, "Auth">> = observer(
  function AuthScreen({ navigation }) {
    const [phone, setPhone] = useState("")

    const phoneHandler = () => {
      navigation.navigate("Otp")
    }

    return (
      <Screen preset="scroll">
        <View style={$root}>
          <View style={$topSection}>
            <AppBox containerStyle={$containerBox} style={$box}>
              <AuthSVG height={188} width={204} style={$icon} />
              <Text style={$title} size="xl" tx="authScreen.title" preset="semiBold" />
              <TextField
                value={phone}
                onChangeText={setPhone}
                LeftIcon={({ style }) => <FlagSVG height={16} width={24} style={style} />}
                maxLength={12}
                placeholder="authScreen.placeholder"
                keyboardType="phone-pad"
                autoFocus={true}
              />
            </AppBox>
          </View>
          <View style={$bottomSection}>
            <Button onPress={phoneHandler} tx="authScreen.next" />
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
const $box: ViewStyle = {
  alignItems: "center",
  padding: spacing.medium,
}
