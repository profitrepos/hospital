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
import { TxKeyPath, useTranslate } from "../../i18n"
import { SVGPropsType } from "../../interfaces"
import { COLORS, typography } from "../../theme"
import { Text } from "./Text"

interface TextFieldProps extends TextInputProps {
  placeholder?: TxKeyPath
  placeholderInner?: TxKeyPath
  inputStyle?: StyleProp<TextStyle>
  inputWrapperStyle?: StyleProp<ViewStyle>
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
  inputStyle,
  inputWrapperStyle,
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
  const translate = useTranslate()
  const [secure, setSecure] = React.useState<boolean>(secureType)

  const toggleSecure = () => setSecure(!secure)
  const handleRightIcon = () => {
    if (onPressRightIcon) {
      onPressRightIcon()
    }
  }

  const onClear = () => {
    onPressRightIcon && onPressRightIcon()
    onChangeText("")
  }

  return (
    <View style={[$wrapper, wrapperStyle]}>
      {placeholder && <Text style={$placeholder} size="xs" tx={placeholder} />}
      <View style={[$inputWrapper, inputWrapperStyle, { borderWidth: errorMessage ? 1 : 0 }]}>
        {LeftIcon && <LeftIcon style={$leftIcon} />}
        <TextInput
          style={[
            $input,
            { letterSpacing: secureType ? 4 : 1, paddingLeft: LeftIcon ? 56 : 15 },
            inputStyle,
          ]}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secure}
          placeholder={translate(placeholderInner)}
          {...props}
        />
        {secureType ? (
          <TouchableOpacity onPress={toggleSecure} style={$rightIcon}>
            <Icon name="remove-red-eye" style={$passwordIcon} />
          </TouchableOpacity>
        ) : RightIcon && onPressRightIcon ? (
          <TouchableOpacity onPress={handleRightIcon} style={$rightIcon}>
            <RightIcon width={18} height={18} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onClear} style={$rightIcon}>
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
