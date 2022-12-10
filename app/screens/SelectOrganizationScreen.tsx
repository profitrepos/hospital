import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Screen, ScreenTitle } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { spacing } from "../theme"
import { OrganizationList } from "../components/OrganizationList"
import { useStores } from "../store"

export const SelectOrganizationScreen: FC<
  StackScreenProps<AppStackParamList, "SelectOrganization">
> = observer(function OtpScreen({ navigation }) {
  const { load } = useStores().userInfo

  useEffect(() => {
    load()
  }, [])

  return (
    <Screen style={$root} preset="fixed">
      <ScreenTitle text="selectOrganizationScreen.title" />
      <OrganizationList />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  marginTop: spacing.medium,
}
const $select: ViewStyle = {
  flex: 1,
}
