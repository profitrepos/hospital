import { useNavigation } from "@react-navigation/native"
import React, { FC } from "react"
import { TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLORS, spacing } from "../../theme"

interface BackButtonProps {
  onPress?: () => void
  wrapperStyle?: ViewStyle
  btnStyle?: ViewStyle
}

export const BackButton: FC<BackButtonProps> = ({ onPress, wrapperStyle, btnStyle }) => {
  const navigation = useNavigation()

  const goBack = () => {
    if (onPress) {
      onPress()
    } else {
      navigation.goBack()
    }
  }

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={goBack} style={[$wrapper, wrapperStyle]}>
      <View style={[$btn, btnStyle]}>
        <Icon name="chevron-left" style={$icon} />
      </View>
    </TouchableOpacity>
  )
}

const $wrapper: ViewStyle = {
  paddingVertical: spacing.extraSmall,
}
const $btn: ViewStyle = {
  width: spacing.extraLarge,
  height: spacing.extraLarge,
  borderRadius: 7,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
}
const $icon: TextStyle = {
  fontSize: 24,
  color: COLORS.mainBlue,
}
