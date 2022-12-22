import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, BackButton, Button, Screen, ScreenTitle, TextField } from "../components/ui"
import { COLORS, spacing } from "../theme"
import { HomeTabParamList } from "../navigators"
import { AppError, AppModal, SearchList } from "../components"
import { useStores } from "../store"
import { SearchSVG } from "../components/svg"
import { observer } from "mobx-react-lite"

export const SearchPatientsScreen: FC<StackScreenProps<HomeTabParamList, "SearchPatients">> =
  observer(function SearchPatientsScreen() {
    const { search } = useStores()
    const { searchText, setSearchText, error, clearError, activePatient } = search

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
            <BackButton />
            <Avatar />
          </View>
          <ScreenTitle text="searchScreen.title" />
        </View>
        <View style={[$list, $container]}>
          {!activePatient && (
            <TextField
              value={searchText}
              onChangeText={setSearchText}
              LeftIcon={({ style }) => (
                <SearchSVG
                  height={16}
                  width={24}
                  style={[style, $searchIcon]}
                  color={COLORS.icons}
                />
              )}
              wrapperStyle={$search}
              inputStyle={$searchInput}
              placeholderInner={"search.medcards"}
            />
          )}
          <SearchList />
        </View>
      </Screen>
    )
  })

const $root: ViewStyle = {
  flex: 1,
}
const $container: ViewStyle = {
  marginHorizontal: spacing.medium,
}
const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: spacing.medium,
  marginBottom: spacing.extraSmall,
}
const $list: ViewStyle = {
  flex: 1,
  marginBottom: spacing.large,
  justifyContent: "flex-end",
  backgroundColor: "#fff",
  borderRadius: 12,
  padding: spacing.medium,
}
const $search: ViewStyle = {
  marginBottom: spacing.large,
}
const $searchInput: ViewStyle = {
  paddingLeft: 40,
}
const $searchIcon: ViewStyle = {
  left: 10,
}
