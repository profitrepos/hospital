import React, { FC, useCallback } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { Analysis, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface AnalysisItemProps {
  analysis: Analysis
  onPress: (analysis: Analysis) => void
}

const AnalysisItem: FC<AnalysisItemProps> = ({ analysis, onPress }) => {
  const handlePress = () => {
    onPress(analysis)
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={$item}>
        <View style={$values}>
          <Text preset="subheading" style={$name} text={analysis.name} />
          <Text preset="helper" style={$info} text={analysis.date} />
        </View>
        <Icon name="chevron-right" style={$arrow} />
      </View>
    </TouchableOpacity>
  )
}

export const AnalysisRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "AnalysisRecords">
> = observer(function AnalysisRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { analyzes, loading } = records
  const { setActiveAnalysis } = analyzes

  const onPress = (analysis: Analysis) => {
    setActiveAnalysis(analysis.uid)
    navigation.navigate(navigateToDictionary.analysisDetails)
  }

  return (
    <ScreenWithActionSheet loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="analysisRecordsScreen.title" />
        <View style={$list}>
          <ScrollView
            contentContainerStyle={$scrollView}
            style={$flex}
            showsVerticalScrollIndicator={false}
          >
            {analyzes.filteredItems.map((analysis) => {
              return <AnalysisItem onPress={onPress} analysis={analysis} key={analysis.uid} />
            })}
          </ScrollView>
        </View>
      </View>
    </ScreenWithActionSheet>
  )
})

const $root: ViewStyle = {
  paddingVertical: spacing.medium,
  paddingHorizontal: spacing.extraSmall,
  flex: 1,
}
const $flex: ViewStyle = {
  flex: 1,
}
const $list: ViewStyle = {
  paddingHorizontal: spacing.small,
  flex: 1,
}

const $scrollView: ViewStyle = {
  flexGrow: 1,
}
const $item: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingVertical: spacing.medium,
  borderBottomColor: "#EAEAEA",
  borderBottomWidth: 1,
}
const $values: ViewStyle = {
  flex: 1,
}
const $name: TextStyle = {
  fontSize: 16,
}
const $info: TextStyle = {
  color: COLORS.subtitleGray,
}
const $arrow: TextStyle = {
  paddingLeft: spacing.large,
  color: COLORS.lightBlue,
  fontSize: 24,
}
