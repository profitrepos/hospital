import React, { FC, memo } from "react"
import {
  FlatList,
  ListRenderItem,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { JournalListItem } from "../interfaces"
import { COLORS, spacing } from "../theme"
import { ArrowRightSVG } from "./svg"
import { Preloader, Text } from "./ui"

interface JournalsListProps {
  loading: boolean
  onPress: (item: JournalListItem) => void
  data: JournalListItem[]
}

interface JournalProps {
  item: JournalListItem
  onPress: (item: JournalListItem) => void
}

const Journal: FC<JournalProps> = memo(({ item, onPress }) => {
  const handlePress = () => {
    onPress(item)
  }

  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
      <View style={$item}>
        <View style={$values}>
          <Text preset="subheading" style={$name} text={item.doc} />
          <Text preset="helper" style={$info} text={item.date} />
        </View>
        <ArrowRightSVG style={$arrow} width={10} height={14} />
      </View>
    </TouchableOpacity>
  )
})

export const JournalsList: FC<JournalsListProps> = ({ loading, onPress, data }) => {
  if (loading) {
    return <Preloader />
  }

  return (
    <View style={$container}>
      {data.map((journal) => {
        return <Journal key={journal.uid} item={journal} onPress={onPress} />
      })}
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