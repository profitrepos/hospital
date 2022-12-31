import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { AppError, AppModal, JournalsList, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { COLORS, spacing } from "../theme"
import { JournalListItem } from "../interfaces"
import { MedicalCardTabsParamList } from "../navigators"

export const JournalsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Journals">> = observer(
  function JournalsScreen({ navigation }) {
    const { records } = useStores()
    const { loading, journals, clearError, error } = records
    const { list, setActiveJournal } = journals

    const journalHandler = (item: JournalListItem) => {
      setActiveJournal(item.uid)
      navigation.navigate("JournalDetails")
    }

    if (error) {
      return (
        <AppModal containerStyle={$modal}>
          <AppError closeError={clearError} customSubtitle={error} />
        </AppModal>
      )
    }

    return (
      <ScreenWithActionSheet loading={loading} showPatientInfo>
        <View style={$root}>
          <View style={$journals}>
            <ScreenTitle text="journalsScreen.title" />
            <View style={$listContainer}>
              <JournalsList loading={loading} data={list} onPress={journalHandler} />
            </View>
          </View>
        </View>
      </ScreenWithActionSheet>
    )
  },
)

const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
const $root: ViewStyle = {
  paddingHorizontal: spacing.extraSmall,
}
const $listContainer: ViewStyle = {
  paddingHorizontal: spacing.large,
}
const $journals: ViewStyle = {
  paddingVertical: spacing.medium,
}
