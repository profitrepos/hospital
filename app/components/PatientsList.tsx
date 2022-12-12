import React, { FC } from 'react'
import { FlatList, ListRenderItem, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native'
import { PatientListItem } from '../interfaces'
import { COLORS, spacing } from '../theme'
import { ArrowRightSVG } from './svg'
import { Preloader, Text } from './ui'


interface PatientsListProps {
    loading: boolean
    onPress: (item: PatientListItem) => void
    data: PatientListItem[]
}

const keyExtractor = (item: PatientListItem) => item.uid

export const PatientsList: FC<PatientsListProps> = ({ loading, onPress, data }) => {
    const renderItem: ListRenderItem<PatientListItem> = ({ item }) => {

        const handlePress = () => {
            onPress(item)
        }

      return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.6}>
          <View style={$item}>
            <View style={$values}>
              <Text preset="subheading" style={$name} text={item.patient} />
              <Text preset="helper" style={$info} text={item.age} />
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
          data={data}
          keyExtractor={keyExtractor}
          showsHorizontalScrollIndicator={false}
          style={$list}
          contentContainerStyle={$listContainer}
          showsVerticalScrollIndicator={false}
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
const $arrow: ViewStyle = {
  paddingLeft: spacing.large,
}
