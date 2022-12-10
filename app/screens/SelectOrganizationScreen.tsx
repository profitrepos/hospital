import React, { FC } from "react"
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
  const { userInfo, medicalCard } = useStores()

  const { activeOrg } = userInfo

  const next = () => {
    const { organisationId, departmentId } = activeOrg
    medicalCard.load(organisationId, departmentId)
    navigation.navigate("Main")
  }

  return (
    <Screen style={$root} preset="scroll">
      <ScreenTitle text="selectOrganizationScreen.title" />
      <OrganizationList />
      <Button disabled={!activeOrg} onPress={next}>
        Next
      </Button>
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
