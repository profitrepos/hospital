import React, { ComponentType } from "react"
import {
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native"
import { COLORS, spacing, typography } from "../../theme"
import { Text, TextProps } from "./Text"

type Presets = keyof typeof $viewPresets

export interface ButtonAccessoryProps {
  style: StyleProp<any>
  pressableState: PressableStateCallbackType
}

export interface ButtonProps extends PressableProps {
  tx?: TextProps["tx"]
  text?: TextProps["text"]
  txOptions?: TextProps["txOptions"]
  style?: StyleProp<ViewStyle>
  pressedStyle?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  pressedTextStyle?: StyleProp<TextStyle>
  preset?: Presets
  RightAccessory?: ComponentType<ButtonAccessoryProps>
  LeftAccessory?: ComponentType<ButtonAccessoryProps>
  children?: React.ReactNode
}

export function Button(props: ButtonProps) {
  const {
    tx,
    text,
    txOptions,
    style: $viewStyleOverride,
    pressedStyle: $pressedViewStyleOverride,
    textStyle: $textStyleOverride,
    pressedTextStyle: $pressedTextStyleOverride,
    children,
    RightAccessory,
    LeftAccessory,
    disabled,
    ...rest
  } = props

  const preset: Presets = disabled
    ? "disabled"
    : $viewPresets[props.preset]
    ? props.preset
    : "default"
  function $viewStyle({ pressed }) {
    return [
      $viewPresets[preset],
      $viewStyleOverride,
      !!pressed && [$pressedViewPresets[preset], $pressedViewStyleOverride],
    ]
  }
  function $textStyle({ pressed }) {
    return [
      $textPresets[preset],
      $textStyleOverride,
      !!pressed && [$pressedTextPresets[preset], $pressedTextStyleOverride],
    ]
  }

  return (
    <Pressable style={$viewStyle} accessibilityRole="button" disabled={disabled} {...rest}>
      {(state) => (
        <>
          {!!LeftAccessory && <LeftAccessory style={$leftAccessoryStyle} pressableState={state} />}

          <Text tx={tx} text={text} txOptions={txOptions} style={$textStyle(state)}>
            {children}
          </Text>

          {!!RightAccessory && (
            <RightAccessory style={$rightAccessoryStyle} pressableState={state} />
          )}
        </>
      )}
    </Pressable>
  )
}

const $baseViewStyle: ViewStyle = {
  minHeight: 48,
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "row",
  paddingVertical: spacing.small,
  paddingHorizontal: spacing.small,
  overflow: "hidden",
  backgroundColor: COLORS.mainBlue,
  width: "100%",
}

const $baseTextStyle: TextStyle = {
  fontSize: 16,
  lineHeight: 20,
  fontFamily: typography.medium,
  textAlign: "center",
  flexShrink: 1,
  flexGrow: 0,
  zIndex: 2,
  color: "#fff",
}

const $rightAccessoryStyle: ViewStyle = { marginStart: spacing.extraSmall, zIndex: 1 }
const $leftAccessoryStyle: ViewStyle = { marginEnd: spacing.extraSmall, zIndex: 1 }

const $viewPresets = {
  default: [$baseViewStyle] as StyleProp<ViewStyle>,
  disabled: [$baseViewStyle, { backgroundColor: COLORS.disabled }] as StyleProp<ViewStyle>,
  outline: [
    $baseViewStyle,
    { backgroundColor: "transparent", borderWidth: 1, borderColor: COLORS.mainBlue },
  ] as StyleProp<ViewStyle>,
  text: [$baseViewStyle, { backgroundColor: "transparent" }] as StyleProp<ViewStyle>,
}

const $textPresets: Record<Presets, StyleProp<TextStyle>> = {
  default: $baseTextStyle,
  disabled: [$baseTextStyle, { color: COLORS.lightGrayAccept }],
  outline: [$baseTextStyle, { color: COLORS.mainBlue }],
  text: [$baseTextStyle, { color: COLORS.mainBlue }],
}

const $pressedViewPresets: Record<Presets, StyleProp<ViewStyle>> = {
  default: { opacity: 0.8 },
  disabled: { opacity: 0.9 },
  outline: { opacity: 0.8 },
  text: { opacity: 0.8 },
}

const $pressedTextPresets: Record<Presets, StyleProp<TextStyle>> = {
  default: { opacity: 0.7 },
  disabled: { opacity: 0.9 },
  outline: { opacity: 0.7 },
  text: { opacity: 0.7 },
}
