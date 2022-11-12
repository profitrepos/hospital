import React, { FC, PropsWithChildren, ReactElement } from "react"
import { View, TouchableOpacity, StyleProp, ViewStyle, TextStyle } from "react-native"
import { COLORS, SIZES } from "../theme"

import { AppBox, Text } from "./ui"
import { useNavigation } from "@react-navigation/native"
import { IHomeMenuItem } from "../interfaces/Common"

type MenuItemPropsType = {
  item: IHomeMenuItem
  style?: StyleProp<ViewStyle>
}

const MenuItem: FC<MenuItemPropsType> = ({ item, style }) => {
  const navigation = useNavigation()

  const Icon = item.icon
  const handlePress = () => {
    navigation.navigate(item.navigateTo as never)
  }
  return (
    <TouchableOpacity onPress={handlePress} style={[$wrapper, style]} activeOpacity={0.7}>
      <AppBox cardStyle={$item}>
        <Icon width={55} height={55} style={$icon} />
        <Text size="xs" style={$title}>
          {item.title}
        </Text>
      </AppBox>
    </TouchableOpacity>
  )
}

type MenuPropsType = {
  list: IHomeMenuItem[]
  style?: StyleProp<ViewStyle>
}

const GridMenu: FC<MenuPropsType> = ({ list, style = {} }) => {
  return (
    <View style={[$container, style]}>
      <View style={$menu}>
        {list.map((i) => (
          <MenuItem item={i} key={i.title} />
        ))}
      </View>
    </View>
  )
}

const $container: ViewStyle = {
  flex: 1,
  marginVertical: SIZES.height * 0.02,
}

const $menu: ViewStyle = {
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
}
const $wrapper: ViewStyle = {
  width: 140,
  marginBottom: 14,
}
const $item: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
}

const $title: TextStyle = {
  color: COLORS.blackLight3,
  lineHeight: 18,
  textAlign: "center",
  marginTop: -23,
}

const $icon: ViewStyle = {
  shadowColor: "rgba(170, 173, 254, 0.14)",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.23,
  shadowRadius: 2.62,

  elevation: 4,
}

export default GridMenu
