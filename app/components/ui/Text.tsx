import React from "react"
import { StyleProp, Text as RNText, TextProps as RNTextProps, TextStyle } from "react-native"
import { TxKeyPath, useTranslate } from "../../i18n"
import { COLORS, typography } from "../../theme"

type Sizes = keyof typeof $sizeStyles
type Weights = keyof typeof typography
type Presets = keyof typeof $presets

export interface TextProps extends RNTextProps {
  tx?: TxKeyPath
  text?: string
  txOptions?: any
  style?: StyleProp<TextStyle>
  preset?: Presets
  weight?: Weights
  size?: Sizes
  children?: React.ReactNode
}

export function Text(props: TextProps) {
  const translate = useTranslate()
  const { weight, size, tx, txOptions, text, children, style: $styleOverride, ...rest } = props

  const i18nText = tx && translate(tx, txOptions)
  const content = i18nText || text || children

  const preset: Presets = $presets[props.preset] ? props.preset : "default"
  const $styles = [$presets[preset], $fontWeightStyles[weight], $sizeStyles[size], $styleOverride]

  return (
    <RNText {...rest} style={$styles}>
      {content}
    </RNText>
  )
}

const $sizeStyles = {
  xxl: { fontSize: 36, lineHeight: 44 } as TextStyle,
  xl: { fontSize: 24, lineHeight: 34 } as TextStyle,
  lg: { fontSize: 20, lineHeight: 24 } as TextStyle,
  md: { fontSize: 18, lineHeight: 26 } as TextStyle,
  sm: { fontSize: 16, lineHeight: 24 } as TextStyle,
  xs: { fontSize: 14, lineHeight: 21 } as TextStyle,
  xxs: { fontSize: 12, lineHeight: 18 } as TextStyle,
}

const $fontWeightStyles = Object.entries(typography).reduce((acc, [weight, fontFamily]) => {
  return { ...acc, [weight]: { fontFamily } }
}, {}) as Record<Weights, TextStyle>

const $baseStyle: StyleProp<TextStyle> = [
  $sizeStyles.sm,
  $fontWeightStyles.medium,
  { color: COLORS.mainTextBlack },
]

const $presets = {
  default: $baseStyle,

  bold: [$baseStyle, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  semiBold: [$baseStyle, $fontWeightStyles.semiBold] as StyleProp<TextStyle>,

  heading: [$baseStyle, $sizeStyles.xl, $fontWeightStyles.bold] as StyleProp<TextStyle>,

  subheading: [$baseStyle, $sizeStyles.lg, $fontWeightStyles.semiBold] as StyleProp<TextStyle>,

  label: [$baseStyle, $fontWeightStyles.medium] as StyleProp<TextStyle>,

  helper: [$baseStyle, $sizeStyles.xs, $fontWeightStyles.medium] as StyleProp<TextStyle>,
}
