import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { Research, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface ResearchItemProps {
  research: Research
  onPress: (research: Research) => void
}

const ResearchItem: FC<ResearchItemProps> = ({ research, onPress }) => {
  const handlePress = () => {
    onPress(research)
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={$item}>
        <View style={$values}>
          <Text preset="subheading" style={$name} text={research.name} />
          <Text preset="helper" style={$info} text={research.date} />
        </View>
        <Icon name="chevron-right" style={$arrow} />
      </View>
    </TouchableOpacity>
  )
}

export const ResearchRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ResearchRecords">
> = observer(function ResearchRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { loading, research } = records
  const { setActiveResearch } = research

  const onPress = (research: Research) => {
    navigation.navigate(navigateToDictionary.researchDetails)
    setActiveResearch(research.uid)
  }

  return (
    <ScreenWithActionSheet loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="researchRecordsScreen.title" />
        <View style={$list}>
          <ScrollView
            contentContainerStyle={$scrollView}
            style={$flex}
            showsVerticalScrollIndicator={false}
          >
            {research.filteredItems.map((research) => {
              return <ResearchItem onPress={onPress} research={research} key={research.uid} />
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
