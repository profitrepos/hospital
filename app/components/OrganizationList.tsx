import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import {
  FlatList,
  ListRenderItem,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native"
import { OrganizationListItem } from "../interfaces"
import { Organization, useStores } from "../store"
import { COLORS, spacing } from "../theme"
import { ArrowRightSVG } from "./svg"
import { Preloader, Text } from "./ui"

interface OrganizationListProps {}

type keyExtractorType = (item: any, index: number) => string
const keyExtractor: keyExtractorType = (item: OrganizationListItem) => item.departmentId

export const OrganizationList: FC<OrganizationListProps> = observer(() => {
  const { setActiveOrg, organizations, loading } = useStores().userInfo

  //TODO: подсвечивать выбранную огранизацию (узнать как обрезать текст)

  const renderItem: ListRenderItem<Organization> = ({ item }) => {
    const onPress = () => {
      setActiveOrg(item.departmentId)
    }
    return (
      <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
        <View style={$item}>
          <View style={$values}>
            <Text preset="subheading" style={$name} text={item.organisationName} />
            <Text preset="helper" style={$info} text={item.departmentName} />
          </View>
          <ArrowRightSVG style={$arrow} width={10} height={14} />
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
        data={organizations}
        keyExtractor={keyExtractor}
        showsHorizontalScrollIndicator={false}
        style={$list}
        contentContainerStyle={$listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
})

const $container: ViewStyle = {
  borderRadius: 12,
  backgroundColor: "#fff",
  padding: spacing.medium,
  flex: 1,
}
const $list: ViewStyle = {}
const $listContainer: ViewStyle = {}
const $item: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  paddingBottom: spacing.medium,
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
