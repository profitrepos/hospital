import React, { FC, useState } from "react"
import {
  FlatList,
  ListRenderItem,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { COLORS, spacing } from "../theme"
import { ArrowRightSVG, SearchSVG } from "./svg"
import { Text, TextField } from "./ui"

interface PatientsListProps {
  data: any[]
}

//TODO: добавить тип пациента
type keyExtractorType = (item: any, index: number) => string
const keyExtractor: keyExtractorType = (item) => String(Math.random())

export const PatientsList: FC<PatientsListProps> = ({ data }) => {
  const [text, setText] = useState("")

  const renderItem: ListRenderItem<any> = ({ item, index }) => {
    const onPress = () => {
      console.log(item)
    }
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <View style={$item}>
          <View style={$values}>
            <Text preset="subheading" style={$name} text={`${index}.) Булат Тадхтим Утемуратов`} />
            <Text preset="helper" style={$info} text={"28 лет, госпитализация: 23.08.2022 19:30"} />
          </View>
          <ArrowRightSVG style={$arrow} width={10} height={14} />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={$container}>
      <TextField
        value={text}
        onChangeText={setText}
        LeftIcon={({ style }) => (
          <SearchSVG height={16} width={24} style={style} color={COLORS.icons} />
        )}
        wrapperStyle={$search}
        placeholderInner="search.patientsPlaceholder"
      />
      <FlatList
        renderItem={renderItem}
        data={new Array(20)}
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
  borderRadius: 12,
  backgroundColor: "#fff",
  padding: spacing.medium,
  flex: 1,
}
const $search: ViewStyle = {
  marginBottom: spacing.large,
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
