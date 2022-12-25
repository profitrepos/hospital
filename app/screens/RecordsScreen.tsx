import React, { FC, useCallback, useRef, useState } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import {
  AppError,
  AppModal,
  RecordsFilter,
  RecordsMenu,
  RecordsSearch,
  ScreenWithActionSheet,
} from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet"

const snapPoints = ["70%", "80%"]

const backdropComponent = () => {
  return <View style={$backdrop} />
}

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

    const bottomSheetModalRef = useRef<BottomSheetModal>(null)

    const handlerRecord = (key: string) => {
      navigation.navigate(navigateToDictionary[key])
    }

    const onSheetDismiss = () => {}

    const openCategoryFilter = () => {
      bottomSheetModalRef.current?.present()
    }
    const openDateFilter = () => {
      bottomSheetModalRef.current?.present()
    }

    const clearCategoryFilter = () => {}
    const clearDateFilter = () => {}

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
              <RecordsFilter
                clearCategoryFilter={clearCategoryFilter}
                categoryHandler={openCategoryFilter}
                dateHandler={openDateFilter}
                clearDateFilter={clearDateFilter}
                showClearCategoryFilter={false}
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
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, harum!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, harum!
            </Text>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, harum!
            </Text>
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
const $transparent: ViewStyle = {
  backgroundColor: "rgba(0,0,0, 0.7)",
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
