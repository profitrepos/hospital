import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { ScrollView, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { ScreenTitle, Text } from "../components/ui"
import { MedicalCardTabsParamList, navigateToDictionary } from "../navigators"
import { ScreenWithActionSheet } from "../components"
import { Consultation, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import Icon from "react-native-vector-icons/MaterialIcons"

interface ConsultationItemProps {
  consultation: Consultation
  onPress: (consultation: Consultation) => void
}

const ConsultationItem: FC<ConsultationItemProps> = ({ consultation, onPress }) => {
  const handlePress = () => {
    onPress(consultation)
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={$item}>
        <View style={$values}>
          <Text preset="subheading" style={$name} text={consultation.name} />
          <Text preset="helper" style={$info} text={consultation.date} />
        </View>
        <Icon name="chevron-right" style={$arrow} />
      </View>
    </TouchableOpacity>
  )
}

export const ConsultationRecordsScreen: FC<
  StackScreenProps<MedicalCardTabsParamList, "ConsultationRecords">
> = observer(function ConsultationRecordsScreen({ navigation }) {
  const { records } = useStores()
  const { loading, consultations } = records
  const { setActiveConsultation } = consultations

  const onPress = (consultation: Consultation) => {
    navigation.navigate(navigateToDictionary.consultationDetails)
    setActiveConsultation(consultation.uid) //Иванова Лидия Ивановна
  }

  return (
    <ScreenWithActionSheet loading={loading} showBackBtn showPatientInfo>
      <View style={$root}>
        <ScreenTitle text="consultationRecordsScreen.title" />
        <View style={$list}>
          <ScrollView
            contentContainerStyle={$scrollView}
            style={$flex}
            showsVerticalScrollIndicator={false}
          >
            {consultations.filteredItems.map((consultation) => {
              return (
                <ConsultationItem
                  onPress={onPress}
                  consultation={consultation}
                  key={consultation.uid}
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
