import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Screen } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { spacing } from "../theme"
import { useStores } from "../store"
import { AppError, AppModal } from "../components"
import { TxKeyPath } from "../i18n"

export const SettingsScreen: FC<StackScreenProps<AppStackParamList, "Settings">> = observer(
  function SettingsScreen() {
    const { app } = useStores()

    const { resetPassword, error, clearError } = app

    if (error) {
      return (
        <AppModal>
          <AppError closeError={clearError} subtitle={error as TxKeyPath} />
        </AppModal>
      )
    }

    return (
      <Screen style={$root} preset="scroll">
        <Button onPress={resetPassword}>Выйти</Button>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  marginTop: spacing.large,
}
