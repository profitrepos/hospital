import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import {
  AppError,
  AppModal,
  RecordsFilter,
  RecordsMenu,
  ScreenWithActionSheet,
} from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

export const RecordsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Records">> = observer(
  function RecordsScreen({ navigation }) {
    const { records } = useStores()
    const {
      loading,
      recordsMenu,
      error,
      clearError,
      search,
      setSearch,
      setSelectedCategories,
      selectedCategories,
      availableCategories,
    } = records

    const handlerRecord = (key: string) => {
      navigation.navigate(navigateToDictionary[key])
    }

    if (error) {
      return (
        <AppModal containerStyle={$modal}>
          <AppError closeError={clearError} customSubtitle={error} />
        </AppModal>
      )
    }

    return (
      <ScreenWithActionSheet loading={loading}>
        <View style={$root}>
          <View style={$records}>
            <ScreenTitle text="recordsScreen.title" />
            <RecordsFilter
              availableCategories={availableCategories}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              style={$filter}
              search={search}
              setSearch={setSearch}
            />
            <View style={$listContainer}>
              <RecordsMenu records={recordsMenu} onPress={handlerRecord} />
            </View>
          </View>
        </View>
      </ScreenWithActionSheet>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.extraSmall,
}
const $records: ViewStyle = {
  paddingVertical: spacing.medium,
}
const $listContainer: ViewStyle = {
  padding: spacing.large,
}
const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
const $filter: ViewStyle = {
  paddingHorizontal: spacing.medium,
}
