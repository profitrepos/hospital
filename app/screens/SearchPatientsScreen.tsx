import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, BackButton, Screen, ScreenTitle, TextField } from "../components/ui"
import { COLORS, spacing } from "../theme"
import { HomeTabParamList } from "../navigators"
import { SearchList } from "../components"
import { useStores } from "../store"
import { SearchSVG } from "../components/svg"

export const SearchPatientsScreen: FC<StackScreenProps<HomeTabParamList, "SearchPatients">> =
  observer(function SearchPatientsScreen() {

    const { search } = useStores()
    const { searchText , setSearchText, loading, patients, searchByPatient, medCardsList } = search
    


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
          <TextField
              value={searchText}
              onChangeText={setSearchText}
              LeftIcon={({ style }) => (
                <SearchSVG height={16} width={24} style={[style, $searchIcon]} color={COLORS.icons} />
              )}
              wrapperStyle={$search}
              inputStyle={$searchInput}
              placeholderInner={"search.medcards"}
            />
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