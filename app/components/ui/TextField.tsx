import React from "react"
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInputProps,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { SVGPropsType } from "../../interfaces/Common"
import { COLORS, typography } from "../../theme"
import { Text } from "./Text"

interface TextFieldProps extends TextInputProps {
  placeholder?: string
  placeholderInner?: string
  style?: StyleProp<TextStyle>
  onChangeText: (text: string) => void
  value: string
  errorMessage?: string | null
  LeftIcon?: React.FC<SVGPropsType>
  secureType?: boolean
  wrapperStyle?: StyleProp<ViewStyle>
  RightIcon?: React.FC<SVGPropsType>
  onPressRightIcon?: () => void
}

export const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  placeholderInner,
  style,
  onChangeText,
  value,
  errorMessage,
  LeftIcon,
  secureType = false,
  wrapperStyle,
  RightIcon,
  onPressRightIcon,
  ...props
}) => {
  const [secure, setSecure] = React.useState<boolean>(secureType)

  return (
    <View style={[$wrapper, wrapperStyle]}>
      {placeholder && (
        <Text style={$placeholder} size="xs">
          {placeholder}
        </Text>
      )}
      <View style={[$inputWrapper, { borderWidth: errorMessage ? 1 : 0 }]}>
        {LeftIcon && <LeftIcon style={$leftIcon} />}
        <TextInput
          style={[$input, { letterSpacing: secureType ? 4 : 1 }, style]}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secure}
          placeholder={placeholderInner}
          {...props}
        />
        {secureType ? (
          <TouchableOpacity onPress={() => setSecure(!secure)} style={$rightIcon}>
            <Icon name="remove-red-eye" style={$passwordIcon} />
          </TouchableOpacity>
        ) : RightIcon && onPressRightIcon ? (
          <TouchableOpacity onPress={() => onPressRightIcon()} style={$rightIcon}>
            <RightIcon width={18} height={18} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => onChangeText("")} style={$rightIcon}>
            <Icon name="close" style={$clearIcon} />
          </TouchableOpacity>
        )}
      </View>
      {errorMessage ? (
        <Text style={$error} size="xs">
          {errorMessage}
        </Text>
      ) : null}
    </View>
  )
}

const $wrapper: ViewStyle = {
  width: "100%",
}
const $inputWrapper: ViewStyle = {
  position: "relative",
  borderColor: COLORS.error,
  borderWidth: 0,
  width: "100%",
  backgroundColor: COLORS.iconsBG,
  borderRadius: 8,
}
const $input: TextStyle = {
  height: 44,
  paddingLeft: 15,
  paddingRight: 55,
  width: "100%",
  color: COLORS.blackLight2,
  borderRadius: 8,
  fontFamily: typography.medium,
}
const $placeholder: TextStyle = {
  color: COLORS.lightGray3,
  marginBottom: 12,
}
const $error: TextStyle = {
  textAlign: "center",
  color: COLORS.error,
  marginTop: 8,
}
const $leftIcon: ViewStyle = {
  position: "absolute",
  left: 20,
  bottom: 15,
}
const $rightIcon: ViewStyle = {
  position: "absolute",
  right: 8,
  top: 8,
  width: 30,
  height: 30,
  alignItems: "center",
  justifyContent: "center",
}
const $clearIcon: TextStyle = {
  fontSize: 20,
  color: COLORS.lightGray3,
}

const $passwordIcon: TextStyle = {
  fontSize: 20,
  color: COLORS.icons,
}
