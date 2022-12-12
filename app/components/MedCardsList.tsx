import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  FlatList,
  ListRenderItem,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { MedicalCardListItem } from "../interfaces"
import { COLORS, spacing } from "../theme"
import { ArrowRightSVG } from "./svg"
import { Preloader, Text } from "./ui"

interface MedCardsListProps {
  data: MedicalCardListItem[]
  onPress: (item: MedicalCardListItem) => void
  loading: boolean
}

type keyExtractorType = (item: any, index: number) => string
const keyExtractor: keyExtractorType = (item: MedicalCardListItem) => item.uid

//TODO: refresh controll

export const MedCardsList: FC<MedCardsListProps> = ({ data, onPress, loading }) => {
  const renderItem: ListRenderItem<MedicalCardListItem> = ({ item }) => {
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
          </View>
          <ArrowRightSVG style={$arrow} width={10} height={14} />
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
const $arrow: ViewStyle = {
  paddingLeft: spacing.large,
}
