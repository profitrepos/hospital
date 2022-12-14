import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle } from "../components/ui"
import { JournalsStackParamList } from "../navigators"
import { AppError, AppModal, JournalsList, ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"
import { JournalListItem } from "../interfaces"

export const JournalsScreen: FC<StackScreenProps<JournalsStackParamList, "Journals">> = observer(
  function JournalsScreen({ navigation }) {
    const { records } = useStores()
    const { loading, journal, clearError, error } = records
    const { list, setActiveJournal } = journal

    const journalHandler = (item: JournalListItem) => {
      setActiveJournal(item.uid)
      navigation.navigate("JournalDetail")
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
          <ScreenTitle text="journalsScreen.title" />
          <View style={$listContainer}>
            <JournalsList loading={loading} data={list} onPress={journalHandler} />
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
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
}
const $listContainer: ViewStyle = {
  padding: spacing.large,
}
