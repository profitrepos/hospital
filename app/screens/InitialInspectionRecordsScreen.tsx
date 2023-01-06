import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { InitialInspection, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface InitialInspectionItemProps {
  initialInspection: InitialInspection
  onPress: (initialInspection: InitialInspection) => void
}

const InitialInspectionItem: FC<InitialInspectionItemProps> = ({ initialInspection, onPress }) => {
  const handlePress = () => {
    onPress(initialInspection)
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={$item}>
        <View style={$values}>
          <Text preset="subheading" style={$name} text={initialInspection.doc} />
          <Text preset="helper" style={$info} text={initialInspection.date} />
        </View>
        <Icon name="chevron-right" style={$arrow} />
      </View>
    </TouchableOpacity>
  )
}

export const InitialInspectionRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "InitialInspectionRecords">
> = observer(function InitialInspectionRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { loading, initialInspections } = records
  const { setActiveInitialInspection } = initialInspections

  const onPress = (initialInspection: InitialInspection) => {
    setActiveInitialInspection(initialInspection.uid)
    navigation.navigate(navigateToDictionary.initialInspectionDetails)
  }

  return (
    <ScreenWithActionSheet loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="initialInspectionRecordsScreen.title" />
        <View style={$list}>
          <ScrollView
            contentContainerStyle={$scrollView}
            style={$flex}
            showsVerticalScrollIndicator={false}
          >
            {initialInspections.filteredItems.map((initialInspection) => {
              return (
                <InitialInspectionItem
                  onPress={onPress}
                  initialInspection={initialInspection}
                  key={initialInspection.uid}
                />
              )
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
