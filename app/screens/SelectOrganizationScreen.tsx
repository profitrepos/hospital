import React, { FC, useEffect, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, Screen, ScreenTitle, Text } from "../components/ui"
import { AppStackParamList } from "../navigators"
import { spacing } from "../theme"
import { OrganizationList } from "../components/OrganizationList"
import { useStores } from "../store"
import { OrganizationListItem } from "../interfaces"
import { AppError, AppModal } from "../components"

export const SelectOrganizationScreen: FC<
  StackScreenProps<AppStackParamList, "SelectOrganization">
> = observer(function SelectOrganizationScreen({ navigation }) {
  const { userInfo, medicalCard } = useStores()
  const { setActiveOrg, organizations, loading, activeOrg, load, error, clearError } = userInfo

  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    if (activeOrg) {
      const { organisationId, departmentId } = activeOrg
      medicalCard.load(organisationId, departmentId)
      navigation.navigate("Main")
    }
  }, [activeOrg])

  const organizationHandler = (item: OrganizationListItem) => {
    if (activeOrg?.departmentId === item.departmentId) {
      navigation.navigate("Main")
    } else {
      setActiveOrg(item.departmentId)
    }
  }

  if (error) {
    return (
      <AppModal>
        <AppError customSubtitle={error} closeError={clearError} />
      </AppModal>
    )
  }

  return (
    <Screen style={$root} preset="fixed" filled>
      <View style={$container}>
        <View style={$header}>
          <ScreenTitle text="selectOrganizationScreen.title" />
        </View>
      </View>
      <View style={[$list, $container]}>
        <OrganizationList
          onRefresh={load}
          data={organizations}
          onPress={organizationHandler}
          loading={loading}
        />
      </View>
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
}
const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginTop: spacing.medium,
  marginBottom: spacing.extraSmall,
}
const $container = {
  marginHorizontal: spacing.medium,
}
const $list: ViewStyle = {
  flex: 1,
  marginBottom: spacing.large,
  justifyContent: "flex-end",
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: spacing.medium,
}
