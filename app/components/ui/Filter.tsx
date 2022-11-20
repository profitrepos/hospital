import React, { FC, useEffect, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { PickerStyle } from "react-native-picker-select"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLORS, spacing } from "../../theme"
import { Button } from "./Button"
import { Select } from "./Select"
import { TextField } from "./TextField"

interface FilterProps {
  containerStyle?: ViewStyle
}

export const Filter: FC<FilterProps> = ({ containerStyle }) => {
  const [searchMode, setSearchMode] = useState<"show" | "input">("show")
  const [filterMode, setFilterMode] = useState<"show" | "input">("show")
  const [filter, setFilter] = useState(null)
  const [search, setSearch] = useState("")

  useEffect(() => {
    if (data) {
      setFilter(data[0])
    }
  }, [])

  const hideSearchField = () => {
    setSearchMode("show")
  }

  const showSearchField = () => {
    setSearchMode("input")
  }

  const toggleFilterMode = () => {
    if (filterMode === "input") {
      setFilterMode("show")
    } else {
      setFilterMode("input")
    }
  }

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
        {searchMode === "input" ? (
          <View style={$searchFieldWrapper}>
            <Button
              style={[$btn, $arrowBtn]}
              LeftAccessory={() => <Icon name="arrow-back" style={$icon} />}
              preset="text"
              onPress={hideSearchField}
            />
            <TextField
              value={search}
              onChangeText={setSearch}
              wrapperStyle={$textField}
              autoFocus
            />
          </View>
        ) : (
          <Button
            style={[$btn, $searchBtn]}
            LeftAccessory={() => <Icon name="search" style={$icon} />}
            onPress={showSearchField}
            preset="text"
          />
        )}
      </View>

      <Button
        style={[$btn, $filterBtn]}
        LeftAccessory={() => (
          <Icon name={filterMode === "input" ? "close" : "filter-list"} style={$icon} />
        )}
        onPress={toggleFilterMode}
        preset="text"
      />
      {filterMode === "input" && (
        <Select
          items={data}
          value={filter}
          onValueChange={setFilter}
          containerStyle={$filterSelect}
          style={$selectStyle}
        />
      )}
    </View>
  )
}

const $containerStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-end",
  marginTop: spacing.extraSmall,
  position: "relative",
}
const $searchContainer: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "flex-end",
}
const $textField: ViewStyle = {
  width: "auto",
  flex: 1,
}

const $filterSelect: ViewStyle = {
  position: "absolute",
  top: "100%",
  width: "100%",
}
const $selectStyle: PickerStyle = {
  headlessAndroidContainer: {
    backgroundColor: COLORS.iconsBG,
    borderRadius: 8,
    paddingVertical: 10,
    paddingLeft: spacing.medium,
    justifyContent: "center",
  },
}
const $btn: ViewStyle = {
  width: "auto",
  minHeight: 0,
}
const $arrowBtn: ViewStyle = {}
const $filterBtn: ViewStyle = {}
const $searchBtn: ViewStyle = {}
const $icon: TextStyle = {
  color: COLORS.mainBlue,
  fontSize: 20,
}
const $searchFieldWrapper: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
}
