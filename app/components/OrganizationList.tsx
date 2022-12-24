import React, { FC } from "react"
import {
  FlatList,
  ListRenderItem,
  RefreshControl,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { OrganizationListItem } from "../interfaces"
import { Organization } from "../store"
import { COLORS, spacing } from "../theme"
import { Preloader, Text } from "./ui"

interface OrganizationListProps {
  onPress: (org: OrganizationListItem) => void
  loading: boolean
  data: OrganizationListItem[]
  onRefresh: () => void
}

const keyExtractor = (item: OrganizationListItem) => item.departmentId

export const OrganizationList: FC<OrganizationListProps> = ({
  onPress,
  loading,
  data,
  onRefresh,
}) => {
  const renderItem: ListRenderItem<Organization> = ({ item }) => {
    const handlePress = () => {
      onPress(item)
    }

    return (
      <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
        <View style={$item}>
          <View style={$values}>
            <Text preset="subheading" style={$name} text={item.organisationName} />
            <Text preset="helper" style={$info} text={item.departmentName} />
          </View>
          <Icon name="chevron-right" style={$arrow} />
        </View>
      </TouchableOpacity>
    )
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
        refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
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
