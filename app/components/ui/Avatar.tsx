import { useNavigation } from "@react-navigation/native"
import React from "react"
import { TextStyle, View, ViewStyle, TouchableOpacity } from "react-native"
import { useStores } from "../../store"
import { Text } from "./Text"

export const Avatar = () => {
  const navigation = useNavigation()
  const { userInfo } = useStores()
  const { activeOrg } = userInfo

  const onPress = () => {
    navigation.navigate("Settings" as never)
  }

  const getInitials = () => {
    if (activeOrg) {
      const [name, lastName] = activeOrg.employeeName.split(' ')

      return `${name[0]}${lastName[0]}`
    }
  }

  if (!activeOrg) {
    return null
  }

  return (
    <View style={$container}>
      <TouchableOpacity activeOpacity={1} style={$avatar} onPress={onPress}>
        <View style={$avatar}>
          <Text text={getInitials()} style={$text} preset="label" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const $container: ViewStyle = {
  alignItems: "flex-end",
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
