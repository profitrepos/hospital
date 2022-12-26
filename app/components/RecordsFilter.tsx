import React, { FC, useEffect, useMemo, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { TxKeyPath } from "../i18n"
import { COLORS, spacing } from "../theme"
import { AppCheckbox, Button, ScreenTitle, Text } from "./ui"

interface RecordsFilterHeaderProps {
  style?: ViewStyle
  categoryHandler: () => void
  clearCategoryFilter: () => void
  dateHandler: () => void
  clearDateFilter: () => void
  showClearDateFilter: boolean
  showClearCategoryFilter: boolean
}

export const RecordsFilterHeader: FC<RecordsFilterHeaderProps> = ({
  style,
  categoryHandler,
  clearCategoryFilter,
  dateHandler,
  clearDateFilter,
  showClearDateFilter,
  showClearCategoryFilter,
}) => {
  return (
    <View style={[$containerHeader, style]}>
      <Button
        preset="outline"
        onPress={categoryHandler}
        RightAccessory={() => (
          <Icon
            onPress={showClearCategoryFilter ? clearCategoryFilter : undefined}
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
        onPress={dateHandler}
        RightAccessory={() => (
          <Icon
            onPress={showClearDateFilter ? clearDateFilter : undefined}
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

interface RecordsFilterCategoriesProps {
  style?: ViewStyle
  allCategories: string[]
  availableCategories: string[]
  saveCategories: (categories: string[]) => void
  resetCategories: () => void
}

export const RecordsFilterCategories: FC<RecordsFilterCategoriesProps> = ({
  style,
  allCategories,
  saveCategories,
  resetCategories,
  availableCategories,
}) => {
  const [tempCategories, setTempCategories] = useState<Record<string, boolean>>({})

  const allCategoriesMap = useMemo(
    () =>
      allCategories.reduce((prev, category) => {
        return { ...prev, [category]: availableCategories.includes(category) }
      }, {}),
    [allCategories, availableCategories],
  )

  useEffect(() => {
    setTempCategories(allCategoriesMap)
  }, [allCategories, availableCategories])

  const save = () => {
    const result = Object.keys(tempCategories).filter((key) => tempCategories[key])
    saveCategories(result)
  }

  const reset = () => {
    resetCategories()
    setTempCategories(allCategoriesMap)
  }

  const onChange = (category: string, value: boolean) => {
    setTempCategories({ ...tempCategories, [category]: value })
  }

  return (
    <View style={[$containerCategories, style]}>
      <ScreenTitle containerStyle={$filterTitle} text="recordsScreen.filter.category" />
      <View style={$filterList}>
        {Object.keys(tempCategories).map((category) => {
          const text = `recordsScreen.${category}` as TxKeyPath
          return (
            <AppCheckbox
              key={category}
              value={tempCategories[category]}
              titleStyle={$categoryTitleCheckbox}
              wrapperStyle={$categoryWrapperCheckbox}
              tx={text}
              onChange={(value) => onChange(category, value)}
              reverse
            />
          )
        })}
      </View>
      <View style={$filterFooter}>
        <Button
          style={[$filterFooterBtn, $filterBtnFirst]}
          tx="recordsScreen.filter.reset"
          preset="outline"
          onPress={reset}
        />
        <Button style={$filterFooterBtn} tx="recordsScreen.filter.apply" onPress={save} />
      </View>
    </View>
  )
}

interface RecordsFilterDateProps {
  style?: ViewStyle
}

export const RecordsFilterDate: FC<RecordsFilterDateProps> = ({ style }) => {
  return (
    <View style={[$containerDates, style]}>
      <ScreenTitle containerStyle={$filterTitle} text="recordsScreen.filter.date" />
    </View>
  )
}

const $containerHeader: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
}
const $containerCategories: ViewStyle = {
  flex: 1,
}
const $containerDates: ViewStyle = {}
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
const $filterTitle: ViewStyle = {
  alignItems: "flex-start",
}
const $categoryTitleCheckbox: TextStyle = {
  flex: 1,
  paddingLeft: 0,
  fontSize: 16,
}
const $categoryWrapperCheckbox: ViewStyle = {
  paddingVertical: spacing.medium,
  borderTopWidth: 1,
  borderTopColor: "#DEDEDE",
  borderBottomWidth: 1,
  borderBottomColor: "#DEDEDE",
}
const $filterList: ViewStyle = {
  flex: 1,
}
const $filterFooter: ViewStyle = {
  flexDirection: "row",
}
const $filterFooterBtn: ViewStyle = {
  flex: 1,
}
const $filterBtnFirst: ViewStyle = {
  marginRight: spacing.small,
}
