import React, { FC, useEffect, useRef } from "react"
import {
  FlatList,
  ListRenderItem,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { PatientListItem } from "../interfaces"
import { COLORS, spacing } from "../theme"
import { Preloader, Text } from "./ui"

interface PatientsListProps {
  loading: boolean
  onPress: (item: PatientListItem, index?: number) => void
  data: PatientListItem[]
  scrollToIndex?: number
}

const ITEM_HEIGHT = 100

const keyExtractor = (item: PatientListItem) => item.uid

export const PatientsList: FC<PatientsListProps> = ({ loading, onPress, data, scrollToIndex }) => {
  const flatList = useRef<FlatList>(null)

  useEffect(() => {
    if (scrollToIndex && flatList) {
      flatList.current.scrollToIndex({
        animated: false,
        index: scrollToIndex,
      })
    }
  }, [scrollToIndex])

  const renderItem: ListRenderItem<PatientListItem> = ({ item, index }) => {
    const handlePress = () => {
      onPress(item, index)
    }

    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
        <View style={$item}>
          <View style={$values}>
            <Text preset="subheading" style={$name} text={item.patient} />
            <Text preset="helper" style={$info} text={item.age} />
            {item.address && (
              <Text preset="helper" style={$info} text={item.address} numberOfLines={2} />
            )}
          </View>
          <Icon name="chevron-right" style={$arrow} />
        </View>
      </TouchableOpacity>
    )
  }

  const getItemLayout = (_, index: number) => {
    return { length: ITEM_HEIGHT, offset: ITEM_HEIGHT * index, index }
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
        ref={flatList}
        getItemLayout={getItemLayout}
      />
    </View>
  )
}

const $container: ViewStyle = {
  borderRadius: 12,
  backgroundColor: "#fff",
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
  minHeight: ITEM_HEIGHT,
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
const $arrow: TextStyle = {
  paddingLeft: spacing.large,
  color: COLORS.lightBlue,
  fontSize: 24,
}
