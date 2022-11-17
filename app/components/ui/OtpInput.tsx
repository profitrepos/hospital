import React, { FC } from "react"
import OTPInputView from "@twotalltotems/react-native-otp-input"
import { TextStyle, ViewStyle } from "react-native"
import { COLORS, SIZES } from "../../theme"

interface OtpInputProps {
  code: string
  onChange: (code: string) => void
  confirmCode: (code: string) => void
  pinCount?: number
  error?: boolean
}

export const OtpInput: FC<OtpInputProps> = ({
  code,
  onChange,
  error,
  confirmCode,
  pinCount = 4,
}) => {
  return (
    <OTPInputView
      code={code}
      onCodeChanged={onChange}
      style={$otp}
      pinCount={pinCount}
      autoFocusOnLoad={false}
      codeInputFieldStyle={{
        ...$input,
        borderColor: error ? COLORS.error : "transparent",
      }}
      codeInputHighlightStyle={$codeInputHighlightStyle}
      keyboardType="number-pad"
      keyboardAppearance="light"
      onCodeFilled={confirmCode}
    />
  )
}

const $input: TextStyle = {
  backgroundColor: COLORS.iconsBG,
  color: COLORS.blackLight2,
  fontSize: 18,
  fontFamily: "Gilroy-SemiBold",
  borderRadius: 8,
  borderWidth: 1,
}

const $otp: ViewStyle = {
  height: 44,
  width: SIZES.width * 0.6,
}

const $codeInputHighlightStyle: TextStyle = {
  backgroundColor: COLORS.iconsBG,
  borderColor: "#767BC2",
  borderWidth: 1,
  borderRadius: 8,
}
