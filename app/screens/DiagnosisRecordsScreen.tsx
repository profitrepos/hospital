import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { Diagnosis, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface DiagnosisItemProps {
  diagnosis: Diagnosis
  onPress: (diagnosis: Diagnosis) => void
}

const DiagnosisItem: FC<DiagnosisItemProps> = ({ diagnosis, onPress }) => {
  const handlePress = () => {
    onPress(diagnosis)
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={$item}>
        <View style={$values}>
          <Text preset="subheading" style={$name} text={diagnosis.code} />
          <Text preset="helper" style={$info} text={diagnosis.date} />
        </View>
        <Icon name="chevron-right" style={$arrow} />
      </View>
    </TouchableOpacity>
  )
}

export const DiagnosisRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "DiagnosisRecords">
> = observer(function DiagnosisRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { loading, diagnosis } = records
  const { setActiveDiagnosis } = diagnosis

  const onPress = (diagnosis: Diagnosis) => {
    navigation.navigate(navigateToDictionary.diagnosisDetails)
    setActiveDiagnosis(diagnosis.uid)
  }

  return (
    <ScreenWithActionSheet loading={loading} showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="diagnosisRecordsScreen.title" />
        <View style={$list}>
          <ScrollView
            contentContainerStyle={$scrollView}
            style={$flex}
            showsVerticalScrollIndicator={false}
          >
            {diagnosis.filteredItems.map((diagnosis) => {
              return <DiagnosisItem onPress={onPress} diagnosis={diagnosis} key={diagnosis.uid} />
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
