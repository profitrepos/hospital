import React, { FC } from "react"
import { ScrollView, TextStyle, View, ViewStyle } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { COLORS, spacing } from "../theme"
import { SearchSVG } from "./svg"
import { Button, TextField } from "./ui"

interface RecordsFilterProps {
  search: string
  setSearch: (value: string) => void
  availableCategories: string[]
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  style?: ViewStyle
}

export const RecordsFilter: FC<RecordsFilterProps> = ({ search, setSearch, style }) => {
  return (
    <View style={style}>
      <ScrollView style={{ marginBottom: spacing.medium }} horizontal>
        <Button
          preset="disabled"
          RightAccessory={() => <Icon name="expand-more" style={$clearIcon} />}
          style={{ alignItems: "center" }}
        >
          Категория
        </Button>
      </ScrollView>
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

// expand-more
// close

const $searchIcon: ViewStyle = {
  left: 10,
}
const $searchInput: ViewStyle = {
  paddingLeft: 40,
}
const $clearIcon: TextStyle = {
  fontSize: 24,
  color: COLORS.mainBlue,
  marginTop: 2,
}
