import React, { FC, useEffect, useMemo, useState } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { TxKeyPath } from "../i18n"
import { COLORS, spacing } from "../theme"
import { AppCheckbox, AppCustomCheckbox, Button, ScreenTitle, Text } from "./ui"

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
              titleStyle={$titleCheckbox}
              wrapperStyle={$wrapperCheckbox}
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
  untilDate: number | null
  saveDateFilter: (untilDate: number) => void
  resetDateFilter: () => void
}

export const RecordsFilterDate: FC<RecordsFilterDateProps> = ({
  style,
  untilDate,
  saveDateFilter,
  resetDateFilter,
}) => {
  const dateFilter = useMemo(() => getDateFilter(), [])

  const [tempDate, setTempDate] = useState<number | null>(null)

  useEffect(() => {
    setTempDate(untilDate)
  }, [untilDate])

  const save = () => {
    saveDateFilter(tempDate)
  }

  const reset = () => {
    setTempDate(null)
    resetDateFilter()
  }

  return (
    <View style={[$containerDates, style]}>
      <ScreenTitle containerStyle={$filterTitle} text="recordsScreen.filter.date" />
      <View style={$filterList}>
        {Object.keys(dateFilter).map((key) => {
          return (
            <AppCustomCheckbox
              wrapperStyle={$wrapperCheckbox}
              titleStyle={$titleCheckbox}
              key={key}
              active={tempDate === dateFilter[key]}
              onPress={() => setTempDate(dateFilter[key])}
              tx={`recordsScreen.filter.${key}` as TxKeyPath}
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

const $containerHeader: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
}
const $containerCategories: ViewStyle = {
  flex: 1,
}
const $containerDates: ViewStyle = {
  flex: 1,
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
const $filterTitle: ViewStyle = {
  alignItems: "flex-start",
}
const $titleCheckbox: TextStyle = {
  flex: 1,
  paddingLeft: 0,
  fontSize: 16,
  maxWidth: "100%",
}
const $wrapperCheckbox: ViewStyle = {
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

const getDateFilter = () => {
  const today = new Date()
  const year = today.getFullYear()
  const month = today.getMonth()
  const day = today.getDate()

  const one = new Date(year, month, day - 1).getTime() / 1000
  const two = new Date(year, month, day - 2).getTime() / 1000
  const three = new Date(year, month, day - 3).getTime() / 1000
  const six = new Date(year, month, day - 6).getTime() / 1000
  const eight = new Date(year, month, day - 8).getTime() / 1000
  const ten = new Date(year, month, day - 10).getTime() / 1000
  const twelve = new Date(year, month, day - 12).getTime() / 1000

  return {
    one,
    two,
    three,
    six,
    eight,
    ten,
    twelve,
  }
}
