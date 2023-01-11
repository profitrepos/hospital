import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { Substantiation, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface SubstantiationProps {
  substantiation: Substantiation
  onPress: (substantiation: Substantiation) => void
}

const SubstantiationItem: FC<SubstantiationProps> = ({ substantiation, onPress }) => {
  const handlePress = () => {
    onPress(substantiation)
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={$item}>
        <View style={$values}>
          <Text preset="subheading" style={$name} text={substantiation.doc} />
          <Text preset="helper" style={$info} text={substantiation.date} />
        </View>
        <Icon name="chevron-right" style={$arrow} />
      </View>
    </TouchableOpacity>
  )
}

export const SubstantiationRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "SubstantiationRecords">
> = observer(function SubstantiationRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { loading, substantiations } = records
  const { setActiveSubstantiation } = substantiations

  const onPress = (substantiation: Substantiation) => {
    setActiveSubstantiation(substantiation.uid)
    navigation.navigate(navigateToDictionary.substantiationDetails)
  }

  return (
    <ScreenWithActionSheet loading={loading} showBackBtn showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="substantiationRecordsScreen.title" />
        <View style={$list}>
          <ScrollView
            contentContainerStyle={$scrollView}
            style={$flex}
            showsVerticalScrollIndicator={false}
          >
            {substantiations.filteredItems.map((substantiation) => {
              return (
                <SubstantiationItem
                  onPress={onPress}
                  substantiation={substantiation}
                  key={substantiation.uid}
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
