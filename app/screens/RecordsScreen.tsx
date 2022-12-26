import React, { FC, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import {
  AppError,
  AppModal,
  RecordsFilterCategories,
  RecordsFilterDate,
  RecordsFilterHeader,
  RecordsMenu,
  RecordsSearch,
  ScreenWithActionSheet,
} from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet"

const snapPoints = ["70%", "80%"]

const backdropComponent = () => {
  return <View style={$backdrop} />
}

export const RecordsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Records">> = observer(
  function RecordsScreen({ navigation }) {
    const [filterType, setFilterType] = useState<"category" | "date" | null>(null)

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
      resetCategoryFilter,
      medCardCategories,
      resetDateFilter,
      setUntilDate,
      untilDate,
    } = records

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)

    const handlerRecord = (key: string) => {
      navigation.navigate(navigateToDictionary[key])
    }

    const onSheetDismiss = () => {
      setFilterType(null)
    }

    const openCategoryFilter = () => {
      setFilterType("category")
      bottomSheetModalRef.current?.present()
    }
    const openDateFilter = () => {
      setFilterType("date")
      bottomSheetModalRef.current?.present()
    }

    const saveCategoriesFilter = (categories: string[]) => {
      setSelectedCategories(categories)
      bottomSheetModalRef.current?.dismiss()
    }

    if (error) {
      return (
        <AppModal containerStyle={$modal}>
          <AppError closeError={clearError} customSubtitle={error} />
        </AppModal>
      )
    }

    return (
      <View style={$screenWrapper}>
        <ScreenWithActionSheet contentContainerStyle={$screen} loading={loading}>
          <View style={$root}>
            <View style={$records}>
              <ScreenTitle text="recordsScreen.title" />
              <RecordsFilterHeader
                clearCategoryFilter={resetCategoryFilter}
                categoryHandler={openCategoryFilter}
                dateHandler={openDateFilter}
                clearDateFilter={resetDateFilter}
                showClearCategoryFilter={medCardCategories.length !== availableCategories.length}
                showClearDateFilter={false}
                style={$filter}
              />
              <RecordsSearch setSearch={setSearch} search={search} style={$search} />
              <View style={$listContainer}>
                <RecordsMenu records={recordsMenu} onPress={handlerRecord} />
              </View>
            </View>
          </View>
        </ScreenWithActionSheet>
        <BottomSheetModalProvider>
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onDismiss={onSheetDismiss}
            backdropComponent={backdropComponent}
          >
            <BottomSheetScrollView
              contentContainerStyle={$flexGrow}
              showsVerticalScrollIndicator={false}
            >
              <View style={$filterSheet}>
                {filterType === "category" && (
                  <RecordsFilterCategories
                    saveCategories={saveCategoriesFilter}
                    allCategories={medCardCategories}
                    availableCategories={availableCategories}
                    resetCategories={resetCategoryFilter}
                  />
                )}
                {filterType === "date" && <RecordsFilterDate />}
              </View>
            </BottomSheetScrollView>
          </BottomSheetModal>
        </BottomSheetModalProvider>
      </View>
    )
  },
)

const $screenWrapper: ViewStyle = {
  flex: 1,
  position: "relative",
}
const $screen: ViewStyle = {
  flex: 1,
}
const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.extraSmall,
  position: "relative",
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
  marginBottom: spacing.small,
}
const $search: ViewStyle = {
  paddingHorizontal: spacing.medium,
}
const $filterSheet: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.large,
  flex: 1,
}
const $backdrop: ViewStyle = {
  flex: 1,
  backgroundColor: "rgba(0,0,0, 0.7)",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
}
const $flexGrow: ViewStyle = {
  flexGrow: 1,
}
