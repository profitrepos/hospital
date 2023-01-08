import React, { FC, useMemo } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { Table, Row, Rows, TableWrapper, Cell } from "react-native-table-component"
import { TxKeyPath } from "../i18n"
import { Indicator } from "../store"
import { COLORS, spacing } from "../theme"
import { Text } from "./ui"

interface IndicatorsDetailsProps {
  indicators: Indicator[]
}

const tableHead: TxKeyPath[] = ["indicators.indicator", "indicators.result", "indicators.unit"]

export const IndicatorsDetails: FC<IndicatorsDetailsProps> = ({ indicators }) => {
  const normalizedIndicators = useMemo(() => {
    return indicators.map((i) => {
      const { result, unit, indicator } = i

      return [indicator, result, unit]
    })
  }, [indicators])

  return (
    <View style={$container}>
      <Table borderStyle={$tableBorder}>
        <TableWrapper style={$head}>
          {tableHead.map((cell, index) => {
            return (
              <Cell
                key={cell}
                data={<Text preset="bold" tx={cell} style={$headText} />}
                style={{ ...$cell, flex: index === 0 ? 3 : index === 1 ? 1.5 : 1 }}
              />
            )
          })}
        </TableWrapper>
        {normalizedIndicators && (
          <Rows flexArr={[3, 1.5, 1]} data={normalizedIndicators} textStyle={$text} />
        )}
      </Table>
    </View>
  )
}

const $container: ViewStyle = {}
const $head: ViewStyle = {
  backgroundColor: COLORS.iconsBG,
  flexDirection: "row",
}
const $cell: ViewStyle = {
  flex: 1,
}
const $headText: TextStyle = {
  padding: spacing.tiny,
}
const $text: TextStyle = {
  padding: spacing.tiny,
  fontFamily: "Gilroy-Medium",
}
const $tableBorder: ViewStyle = {
  borderWidth: 2,
  borderColor: COLORS.darkingBlue,
}
