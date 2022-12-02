import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { spacing } from "../../theme"
import { Text } from "./Text"

export const Avatar = () => {
  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate("Settings" as never)
  }

  return (
    <View style={$container}>
      <TouchableOpacity activeOpacity={1} style={$avatar} onPress={onPress}>
        <View style={$avatar}>
          <Text text="AB" style={$text} preset="label" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const $container: ViewStyle = {
  alignItems: "flex-end",
  marginTop: spacing.large,
  marginBottom: spacing.extraSmall,
}
const $avatar: ViewStyle = {
  backgroundColor: "#434343",
  width: 40,
  height: 40,
  borderRadius: 20,
  alignItems: "center",
  justifyContent: "center",
}
const $text: TextStyle = {
  color: "#fff",
}
