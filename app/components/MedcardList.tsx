import { observer } from "mobx-react-lite"
import React, { FC, useState } from "react"
import {
  FlatList,
  ListRenderItem,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { useTranslate } from "../i18n"
import { MedicalCardListItem } from "../interfaces"
import { useStores } from "../store"
import { COLORS, spacing } from "../theme"
import { ArrowRightSVG, SearchSVG } from "./svg"
import { Preloader, Text, TextField } from "./ui"

interface MedcardListProps {
  data: MedicalCardListItem[]
  searchText: string
  onSearchChange: (value: string) => void
}

type keyExtractorType = (item: any, index: number) => string
const keyExtractor: keyExtractorType = (item: MedicalCardListItem) => item.uid

export const MedcardList: FC<MedcardListProps> = observer(
  ({ data, searchText, onSearchChange }) => {
    const { setActiveOrg, loading } = useStores().medicalCard

    const renderItem: ListRenderItem<MedicalCardListItem> = ({ item }) => {
      const onPress = () => {
        setActiveOrg(item.uid)
      }
      return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
          <View style={$item}>
            <View style={$values}>
              <Text preset="subheading" style={$name} text={item.patient} />
              <Text
                preset="helper"
                style={$info}
                text={`${item.age} лет, госпитализация: ${item.admissionDate}`}
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
        <TextField
          value={searchText}
          onChangeText={onSearchChange}
          LeftIcon={({ style }) => (
            <SearchSVG height={16} width={24} style={[style, $searchIcon]} color={COLORS.icons} />
          )}
          wrapperStyle={$search}
          inputStyle={$searchInput}
          placeholderInner={"search.patientsPlaceholder"}
        />
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
  },
)

const $container: ViewStyle = {
  borderRadius: 12,
  backgroundColor: "#fff",
  padding: spacing.medium,
  flex: 1,
}
const $search: ViewStyle = {
  marginBottom: spacing.large,
}
const $searchInput: ViewStyle = {
  paddingLeft: 40,
}
const $searchIcon: ViewStyle = {
  left: 10,
}
const $list: ViewStyle = {}
const $listContainer: ViewStyle = {}
const $item: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: spacing.medium,
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
