import React, { FC, useEffect } from "react"
import {
  FlatList,
  ListRenderItem,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { FilterItem } from "../../interfaces/Common"
import { COLORS, spacing } from "../../theme"
import { Text } from "./Text"

type keyExtractorType = (item: FilterItem, index: number) => string
const keyExtractor: keyExtractorType = (item) => item.title

interface FilterProps {
  data: FilterItem[]
  onChange: (item: FilterItem) => void
  activeItem?: FilterItem
}

export const Filter: FC<FilterProps> = ({ data, onChange, activeItem }) => {
  useEffect(() => {
    onChange(data[0])
  }, [])

  const renderItem: ListRenderItem<FilterItem> = ({ item }) => {
    const onPress = () => {
      onChange(item)
    }

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[$item, activeItem?.value === item.value && $activeItem]}
        activeOpacity={0.6}
      >
        <Text
          preset={activeItem?.value === item.value ? "bold" : "default"}
          tx={item.title}
          style={[$text, activeItem?.value === item.value && $activeText]}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={$container}>
      <FlatList
        renderItem={renderItem}
        data={data}
        horizontal={true}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        style={$list}
        contentContainerStyle={$listContainer}
      />
    </View>
  )
}

const $container: ViewStyle = {
  marginVertical: spacing.medium,
  alignItems: "center",
}

const $list: ViewStyle = {}

const $listContainer: ViewStyle = {}

const $item: ViewStyle = {
  marginHorizontal: spacing.extraSmall,
  paddingVertical: spacing.extraSmall,
  paddingHorizontal: spacing.small,
  borderRadius: 5,
  backgroundColor: COLORS.tabIconBG,
}

const $activeItem: ViewStyle = {
  backgroundColor: COLORS.mainBlue,
}

const $text: TextStyle = {
  color: COLORS.lightGray,
  fontSize: 14,
}
const $activeText: TextStyle = {
  color: "#fff",
}
