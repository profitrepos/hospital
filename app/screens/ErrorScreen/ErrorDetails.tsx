import React, { ErrorInfo } from "react"
import { ScrollView, TextStyle, View, ViewStyle } from "react-native"
import { Button, Screen, Text } from "../../components/ui"
import { COLORS, spacing } from "../../theme"

export interface ErrorDetailsProps {
  error: Error
  errorInfo: ErrorInfo
  onReset(): void
}

export function ErrorDetails(props: ErrorDetailsProps) {
  return (
    <Screen
      preset="fixed"
      safeAreaEdges={["top", "bottom"]}
      contentContainerStyle={$contentContainer}
    >
      <ScrollView style={$errorSection} contentContainerStyle={$errorSectionContentContainer}>
        <Text style={$errorContent} weight="bold" text={`${props.error}`.trim()} />
        <Text
          selectable
          style={$errorBacktrace}
          text={`${props.errorInfo.componentStack}`.trim()}
        />
      </ScrollView>

      <Button style={$resetButton} onPress={props.onReset} tx="errorScreen.reset" />
    </Screen>
  )
}

const $contentContainer: ViewStyle = {
  alignItems: "center",
  paddingHorizontal: spacing.large,
  paddingVertical: spacing.extraLarge,
  flex: 1,
}

const $errorSection: ViewStyle = {
  flex: 1,
  backgroundColor: COLORS.grayBase,
  marginVertical: spacing.medium,
  borderRadius: 6,
}

const $errorSectionContentContainer: ViewStyle = {
  padding: spacing.medium,
}

const $errorContent: TextStyle = {
  color: COLORS.error,
}

const $errorBacktrace: TextStyle = {
  marginTop: spacing.medium,
  color: COLORS.subtitleGray,
}

const $resetButton: ViewStyle = {
  backgroundColor: COLORS.error,
  paddingHorizontal: spacing.huge,
}
