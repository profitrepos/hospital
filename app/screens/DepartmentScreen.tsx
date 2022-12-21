import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { Avatar, BackButton, Screen, ScreenTitle, TextField } from "../components/ui"
import { HomeTabParamList } from "../navigators"
import { COLORS, spacing } from "../theme"
import { AppError, AppModal, MedCardsList } from "../components"
import { useStores } from "../store"
import { MedicalCardListItem } from "../interfaces"
import { SearchSVG } from "../components/svg"
import { delay } from "../utils/delay"

export const DepartmentScreen: FC<StackScreenProps<HomeTabParamList, "Department">> = observer(
  function DepartmentScreen({ navigation }) {
    const { medicalCard, userInfo, records, assignments } = useStores()
    const { all, allSearch, setSearch, loading, error, clearError, load } = medicalCard
    const { activeOrg } = userInfo
    const { load: recordsLoad } = records
    const { load: assignmentsLoad } = assignments

    const medCardHandler = async (item: MedicalCardListItem) => {
      if (activeOrg) {
        navigation.navigate("MedicalCard")
        await delay(200)
        recordsLoad(activeOrg.organisationId, item.uid)
        assignmentsLoad(activeOrg.organisationId, item.uid)
      }
    }

    const loadMedicalCard = () => {
      if (activeOrg) {
        load(activeOrg.organisationId, activeOrg.departmentId)
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
            <BackButton />
            <Avatar />
          </View>
          <ScreenTitle customText={activeOrg.departmentName} />
        </View>
        <View style={[$list, $container]}>
          <TextField
            value={allSearch}
            onChangeText={setSearch}
            LeftIcon={({ style }) => (
              <SearchSVG height={16} width={24} style={[style, $searchIcon]} color={COLORS.icons} />
            )}
            wrapperStyle={$search}
            inputStyle={$searchInput}
            placeholderInner={"search.medcards"}
          />
          <MedCardsList
            onRefresh={loadMedicalCard}
            loading={loading}
            onPress={medCardHandler}
            data={all}
          />
        </View>
      </Screen>
    )
  },
)

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
