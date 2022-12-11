import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, BackButton, Screen, ScreenTitle, Text } from "../components/ui"
import { HomeTabParamList } from "../navigators"
import { spacing } from "../theme"
import { useStores } from "../store"
import { MedCardsList } from "../components"

export const MyPatientsScreen: FC<StackScreenProps<HomeTabParamList, "MyPatients">> = observer(
  function MyPatientsScreen() {
    const { my, mySearch, setSearch } = useStores().medicalCard

    const onSearchChange = (value: string) => {
      setSearch(value, "mySearch")
    }

    return (
      <Screen style={$root} preset="fixed" filled>
        <View style={$container}>
          <View style={$header}>
            <BackButton />
            <Avatar />
          </View>
          <ScreenTitle text="patientsSreen.title" />
        </View>
        <View style={[$list, $container]}>
          <MedCardsList data={my} onSearchChange={onSearchChange} searchText={mySearch} />
        </View>
      </Screen>
    )
  },
)

const $root: ViewStyle = {
  flex: 1,
}
const $header: ViewStyle = {
  flexDirection: "row",
  justifyContent: "space-between",
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
}
