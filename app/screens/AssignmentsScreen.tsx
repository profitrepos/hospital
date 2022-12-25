import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { AppError, AppModal, AssignmentsMenu, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

export const AssignmentsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Assignments">> =
  observer(function AssignmentsScreen({ navigation }) {
    const { assignments } = useStores()
    const { loading, error, clearError, assignmentsMenu, medicinesAndMixtures } = assignments

    const handlerAssignment = (key: string) => {
      navigation.navigate(navigateToDictionary[key])
    }

    if (error) {
      return (
        <AppModal containerStyle={$modal}>
          <AppError customSubtitle={error} closeError={clearError} />
        </AppModal>
      )
    }

    return (
      <ScreenWithActionSheet loading={loading}>
        <View style={$root}>
          <View style={$assignments}>
            <ScreenTitle text="assignmentsScreen.title" />
            <View style={$listContainer}>
              <AssignmentsMenu assignments={assignmentsMenu} onPress={handlerAssignment} />
            </View>
          </View>
        </View>
      </ScreenWithActionSheet>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
const $assignments: ViewStyle = {
  paddingVertical: spacing.medium,
}
const $listContainer: ViewStyle = {
  padding: spacing.large,
}
