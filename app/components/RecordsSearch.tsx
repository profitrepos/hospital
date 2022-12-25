import React, { FC } from "react"
import { View, ViewStyle } from "react-native"
import { COLORS } from "../theme"
import { SearchSVG } from "./svg"
import { TextField } from "./ui"

interface RecordsSearchProps {
  search: string
  setSearch: (value: string) => void
  style?: ViewStyle
}

export const RecordsSearch: FC<RecordsSearchProps> = ({ search, setSearch, style }) => {
  return (
    <View style={[$container, style]}>
      <TextField
        value={search}
        onChangeText={setSearch}
        LeftIcon={({ style }) => (
          <SearchSVG height={16} width={24} style={[style, $searchIcon]} color={COLORS.icons} />
        )}
        inputStyle={$searchInput}
        placeholderInner={"search.records"}
      />
    </View>
  )
}

const $container: ViewStyle = {}
const $searchIcon: ViewStyle = {
  left: 10,
}
const $searchInput: ViewStyle = {
  paddingLeft: 40,
}
