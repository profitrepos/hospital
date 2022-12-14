import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { JournalsStackParamList } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { useStores } from "../store"
import { spacing } from "../theme"

export const JournalDetailScreen: FC<StackScreenProps<JournalsStackParamList, "JournalDetail">> =
  observer(function JournalDetailScreen({ navigation }) {
    const { records } = useStores()
    const { journal } = records
    const { activeJournal } = journal

    return (
      <ScreenWithActionSheet>
        <View style={$root}>
          <ScreenTitle text="journalScreen.title" />
          <Text>{JSON.stringify(activeJournal)}</Text>
        </View>
      </ScreenWithActionSheet>
    )
  })

const $modal: ViewStyle = {
  backgroundColor: "#fff",
}
const $root: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
}
