import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, BackButton, Screen, ScreenTitle, Text, TextField } from "../components/ui"
import { HomeTabParamList } from "../navigators"
import { COLORS, spacing } from "../theme"
import { useStores } from "../store"
import { MedCardsList } from "../components"
import { MedicalCardListItem } from "../interfaces"
import { SearchSVG } from "../components/svg"

export const MyPatientsScreen: FC<StackScreenProps<HomeTabParamList, "MyPatients">> = observer(
  function MyPatientsScreen({ navigation }) {
    const { my, mySearch, setSearch, setActiveMedCard, loading } = useStores().medicalCard

    const onSearchChange = (value: string) => {
      setSearch(value, "mySearch")
    }

    const medCardHandler = (item: MedicalCardListItem) => {
      setActiveMedCard(item.uid)
      navigation.navigate("MedicalCard")
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
        <TextField
            value={mySearch}
            onChangeText={onSearchChange}
            LeftIcon={({ style }) => (
              <SearchSVG height={16} width={24} style={[style, $searchIcon]} color={COLORS.icons} />
            )}
            wrapperStyle={$search}
            inputStyle={$searchInput}
            placeholderInner={"search.medcards"}
          />
          <MedCardsList loading={loading} onPress={medCardHandler} data={my} />
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
