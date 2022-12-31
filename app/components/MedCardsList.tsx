import React, { FC } from "react"
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { MedicalCardListItem, PatientMedicalCardListItem } from "../interfaces"
import { COLORS, spacing } from "../theme"
import { Preloader, Text } from "./ui"

interface MedCardsListProps {
  data: MedicalCardListItem[] | PatientMedicalCardListItem[]
  onPress: (item: MedicalCardListItem | PatientMedicalCardListItem) => void
  loading: boolean
  onRefresh?: () => void
}

type keyExtractorType = (item: any, index: number) => string
const keyExtractor: keyExtractorType = (item: MedicalCardListItem | PatientMedicalCardListItem) =>
  item.uid

const getDiagnosisCode = (diagnosis: string) => {
  const exec = /^\(.*\)/.exec(diagnosis)
  return exec ? exec[0] : diagnosis
}

export const MedCardsList: FC<MedCardsListProps> = ({ data, onPress, loading, onRefresh }) => {
  const renderItem: ListRenderItem<MedicalCardListItem | PatientMedicalCardListItem> = ({
    item,
  }) => {
    const isPatientMedCard = (item): item is PatientMedicalCardListItem => {
      return "department" in item
    }

    const handlePress = () => {
      onPress(item)
    }
    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
        <View style={$item}>
          <View style={$values}>
            <Text preset="subheading" style={$name} text={item.patient} />
            <Text
              preset="helper"
              style={$info}
              text={`${item.age}, госпитализация: ${item.admissionDate}`}
            />
            {isPatientMedCard(item) && (
              <Text
                preset="helper"
                style={$info}
                text={`${getDiagnosisCode(item.diagnosis)}, ${item.department}`}
              />
            )}
          </View>
          <Icon name="chevron-right" style={$arrow} />
        </View>
      </TouchableOpacity>
    )
  }

  if (loading) {
    return <Preloader />
  }

  return (
    <View style={$container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        style={$list}
        contentContainerStyle={$listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={onRefresh && <RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      />
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
}

const $list: ViewStyle = {}
const $listContainer: ViewStyle = {}
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
