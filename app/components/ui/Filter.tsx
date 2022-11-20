import React, { FC, useEffect, useState } from "react"
import { StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { PickerStyle } from "react-native-picker-select"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLORS, spacing } from "../../theme"
import { Button } from "./Button"
import { Select } from "./Select"
import { TextField } from "./TextField"

type Presets = "transparent" | "filled"

interface FilterProps {
  containerStyle?: ViewStyle
  preset?: Presets
}

export const Filter: FC<FilterProps> = ({ containerStyle, preset = "transparent" }) => {
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
    <>
      <View style={[$containerPresets[preset], containerStyle]}>
        <View style={$searchContainer}>
          {searchMode === "input" ? (
            <View style={$searchFieldWrapper}>
              <Button
                style={[$btn]}
                LeftAccessory={() => <Icon name="arrow-back" style={$iconPresets[preset]} />}
                preset="text"
                onPress={hideSearchField}
              />
              <TextField
                value={search}
                onChangeText={setSearch}
                wrapperStyle={$textField}
                inputWrapperStyle={$searchInutPresets[preset]}
                autoFocus
              />
            </View>
          ) : (
            <Button
              style={[$btn]}
              LeftAccessory={() => <Icon name="search" style={$iconPresets[preset]} />}
              onPress={showSearchField}
              preset="text"
            />
          )}
        </View>

        <Button
          style={[$btn]}
          LeftAccessory={() => (
            <Icon
              name={filterMode === "input" ? "close" : "filter-list"}
              style={$iconPresets[preset]}
            />
          )}
          onPress={toggleFilterMode}
          preset="text"
        />
      </View>
      {filterMode === "input" && (
        <Select
          items={data}
          value={filter}
          onValueChange={setFilter}
          containerStyle={$filterSelect}
          style={$selectPresets[preset]}
        />
      )}
    </>
  )
}

const $containerStyle: ViewStyle = {
  flexDirection: "row",
  justifyContent: "flex-end",
  paddingVertical: spacing.extraSmall,
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
  top: 58,
  width: "90%",
  zIndex: 1000,
  left: "5%",
  right: "5%",
}
const $filledSelectStyle: PickerStyle = {
  headlessAndroidContainer: {
    backgroundColor: "#EEF4FE",
    borderRadius: 8,
    paddingVertical: spacing.extraSmall,
    paddingLeft: spacing.medium,
    justifyContent: "center",
  },
  inputIOSContainer: {
    padding: spacing.extraSmall,
    justifyContent: "center",
    backgroundColor: "#EEF4FE",
  },
}
const $btn: ViewStyle = {
  width: "auto",
  minHeight: 0,
}
const $icon: TextStyle = {
  fontSize: 20,
}
const $searchFieldWrapper: ViewStyle = {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
}

//Presets
const $containerPresets: Record<Presets, StyleProp<ViewStyle>> = {
  filled: [
    $containerStyle,
    {
      backgroundColor: COLORS.mainBlue,
    },
  ],
  transparent: [$containerStyle],
}
const $selectPresets: Record<Presets, PickerStyle> = {
  filled: $filledSelectStyle,
  transparent: undefined,
}
const $searchInutPresets: Record<Presets, StyleProp<ViewStyle>> = {
  transparent: undefined,
  filled: { backgroundColor: "#EEF4FE" },
}
const $iconPresets: Record<Presets, StyleProp<TextStyle>> = {
  transparent: [$icon, { color: COLORS.mainBlue }],
  filled: [$icon, { color: "#fff" }],
}
