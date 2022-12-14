import React, { FC, useCallback, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { BackHandler, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { BackButton, ScreenTitle } from "../components/ui"
import { AppError, AppModal, JournalsList, ScreenWithActionSheet } from "../components"
import { Chapter, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import { JournalListItem } from "../interfaces"
import { MedicalCardTabsParamList } from "../navigators"
import { ChaptersDetails } from "../components/ChaptersDetails"
import { useFocusEffect } from "@react-navigation/native"

interface JournalsProps {
  loading: boolean
  journalHandler: (item: JournalListItem) => void
  list: JournalListItem[]
}

const Journals: FC<JournalsProps> = ({ loading, journalHandler, list }) => {
  return (
    <View style={$journals}>
      <ScreenTitle text="journalsScreen.title" />
      <View style={$listContainer}>
        <JournalsList loading={loading} data={list} onPress={journalHandler} />
      </View>
    </View>
  )
}

interface JournalDetailProps {
  chapters: Chapter[]
  onBack: () => void
}

const JournalDetail: FC<JournalDetailProps> = ({ chapters, onBack }) => {
  return (
    <View style={$detailContainer}>
      <BackButton btnStyle={$backBtn} onPress={onBack} />
      <ScreenTitle text="journalScreen.title" />
      <ChaptersDetails chapters={chapters} />
    </View>
  )
}

export const JournalsScreen: FC<StackScreenProps<MedicalCardTabsParamList, "Journals">> = observer(
  function JournalsScreen({ navigation }) {
    const { records } = useStores()
    const { loading, journal, clearError, error } = records
    const { list, setActiveJournal, activeJournal } = journal

    useEffect(() => {
      const beforeRemoveHanlder = (e) => {
        console.log("beforeRemoveHanlder.........")

        if (activeJournal) {
          e.preventDefault()
          setActiveJournal(undefined)
          return
        }
      }

      navigation.addListener("beforeRemove", beforeRemoveHanlder)

      return () => {
        navigation.removeListener("beforeRemove", beforeRemoveHanlder)
      }
    }, [navigation])

    useFocusEffect(
      useCallback(() => {
        const onBackPress = () => {
          if (activeJournal) {
            setActiveJournal(undefined)
            return true
          } else {
            return false
          }
        }

        const subscription = BackHandler.addEventListener("hardwareBackPress", onBackPress)

        return () => subscription.remove()
      }, [activeJournal, setActiveJournal]),
    )

    const journalHandler = (item: JournalListItem) => {
      setActiveJournal(item.uid)
    }

    const clearActiveJournal = () => {
      setActiveJournal(undefined)
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
          {activeJournal ? (
            <JournalDetail onBack={clearActiveJournal} chapters={activeJournal.chapters} />
          ) : (
            <Journals loading={loading} list={list} journalHandler={journalHandler} />
          )}
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
  padding: spacing.large,
}
const $journals: ViewStyle = {
  paddingVertical: spacing.medium,
}
const $detailContainer: ViewStyle = {
  padding: spacing.extraSmall,
}
const $backBtn: ViewStyle = {
  backgroundColor: COLORS.iconsBG,
}
