import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLORS, spacing } from "../theme"
import { Button, Text } from "./ui"

interface RecordsFilterProps {
  style?: ViewStyle
  categoryHandler: () => void
  clearCategoryFilter: () => void
  dateHandler: () => void
  clearDateFilter: () => void
  showClearDateFilter: boolean
  showClearCategoryFilter: boolean
}

export const RecordsFilter: FC<RecordsFilterProps> = ({
  style,
  categoryHandler,
  clearCategoryFilter,
  dateHandler,
  clearDateFilter,
  showClearDateFilter,
  showClearCategoryFilter,
}) => {
  const resetCategoryFilter = () => {
    console.log("ICON PRESS")
  }

  const resetDateFilter = () => {
    console.log("ICON PRESS")
  }

  const categoryFilter = () => {
    console.log("BUTTON PRESS")
    categoryHandler()
  }

  const dateFilter = () => {
    dateHandler()
  }

  return (
    <View style={[$container, style]}>
      <Button
        preset="outline"
        onPress={categoryFilter}
        RightAccessory={() => (
          <Icon
            onPress={showClearCategoryFilter ? resetCategoryFilter : undefined}
            name={showClearCategoryFilter ? "close" : "expand-more"}
            style={$clearIcon}
          />
        )}
        style={$btn}
        textStyle={$btnText}
        tx="recordsScreen.filter.category"
      />
      <Button
        preset="outline"
        onPress={dateFilter}
        RightAccessory={() => (
          <Icon
            onPress={showClearDateFilter ? resetDateFilter : undefined}
            name={showClearDateFilter ? "close" : "expand-more"}
            style={$clearIcon}
          />
        )}
        style={$btn}
        textStyle={$btnText}
        tx="recordsScreen.filter.date"
      />
    </View>
  )
}

const $container: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
}
const $clearIcon: TextStyle = {
  fontSize: 24,
  color: COLORS.mainBlue,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: spacing.small,
}
const $btn: ViewStyle = {
  width: "auto",
  paddingVertical: spacing.extraSmall,
  paddingHorizontal: spacing.extraSmall,
  height: 30,
  minHeight: 40,
  marginRight: spacing.small,
  marginBottom: spacing.small,
}

const $btnText: TextStyle = {
  color: COLORS.mainTextBlack,
  fontSize: 14,
}
