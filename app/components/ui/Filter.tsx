import React, { FC, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLORS, spacing } from "../../theme"
import { Button } from "./Button"
import { Select } from "./Select"
import { TextField } from "./TextField"

interface FilterProps {
  containerStyle?: ViewStyle
}

export const Filter: FC<FilterProps> = ({ containerStyle }) => {
  const [filter, setFilter] = useState(null)
  const [search, setSearch] = useState("")

  const data = [
    {
      label: "Test item 1",
      value: 1,
    },
    {
      label: "Test item 2",
      value: 2,
    },
  ]
  return (
    <View style={[$containerStyle, containerStyle]}>
      <View style={$searchContainer}>
        <TextField value={search} onChangeText={setSearch} wrapperStyle={$searchFieldWrapper} />
        <Button
          style={[$btn, $searchBtn]}
          LeftAccessory={() => <Icon name="search" style={$icon} />}
        />
      </View>

      <View style={$filterContainer}>
        <Button
          style={[$btn, $filterBtn]}
          LeftAccessory={() => <Icon name="filter-list" style={$icon} />}
        />
        <Select data={data} value={filter} onValueChange={setFilter} />
      </View>
    </View>
  )
}

const $containerStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-end",
  marginTop: spacing.medium,
  paddingHorizontal: spacing.medium,
}
const $searchContainer: ViewStyle = {
  flexDirection: "row",
}
const $filterContainer: ViewStyle = {
  flexDirection: "row",
}
const $btn: ViewStyle = {
  width: "auto",
  minHeight: 0,
}
const $filterBtn: ViewStyle = {}
const $searchBtn: ViewStyle = {
  marginRight: spacing.small,
}
const $icon: TextStyle = {
  color: "#fff",
  fontSize: 20,
}
const $searchFieldWrapper: ViewStyle = {
  marginRight: spacing.small,
}
