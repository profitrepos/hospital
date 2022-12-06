import React, { FC, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Button, Preloader, Screen, ScreenTitle, Select } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { useStores } from "../store"
import { spacing } from "../theme"

export const SelectOrganizationScreen: FC<
  StackScreenProps<AppStackParamList, "SelectOrganization">
> = observer(function OtpScreen({ navigation }) {
  const { loadUserInfo, loading, setOrganization, organizationList, selectedOrganization, error } =
    useStores().user

  useEffect(() => {
    loadUserInfo()
  }, [])

  const selectOrganization = (orgId: string) => {
    setOrganization(orgId)
  }

  const next = () => {
    selectedOrganization.loadMedicalCards()
    navigation.navigate("Home")
  }

  if (error) {
    //TODO: сделать обработку ошибок
  }

  return (
    <Screen style={$root} preset="scroll">
      <ScreenTitle text="selectOrganizationScreen.title" />
      {loading ? (
        <Preloader />
      ) : (
        <>
          <View style={$select}>
            <Select onValueChange={selectOrganization} items={organizationList} />
          </View>
          <Button
            onPress={next}
            tx="selectOrganizationScreen.continue"
            disabled={!selectedOrganization}
          />
        </>
      )}
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
