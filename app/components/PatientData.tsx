import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { TxKeyPath } from "../i18n"
import { Patient } from "../store"
import { COLORS, spacing } from "../theme"
import { Text } from "./ui"

interface PatientDataProps {
  patient: Patient
  style?: ViewStyle
}

const keys = ["IIN", "birthDate", "age", "gender", "allergy", "address"] as const

interface RowProps {
  text: string
  txKey: TxKeyPath
}

const Row: FC<RowProps> = ({ text, txKey }) => {
  return (
    <View style={$row}>
      <Text style={$labelText} preset="helper" tx={txKey} />
      <Text style={$rowText}>{text}</Text>
    </View>
  )
}

export const PatientData: FC<PatientDataProps> = ({ patient, style }) => {
  return (
    <View style={[$container, style]}>
      {keys.map((key) => (
        <Row key={key} txKey={`patientDataScreen.${key}`} text={patient[key]} />
      ))}
    </View>
  )
}

const $container: ViewStyle = {
  padding: spacing.medium,
}
const $row: ViewStyle = {
  marginBottom: spacing.medium,
}
const $labelText: TextStyle = {
  color: COLORS.lightGray,
}
const $rowText: TextStyle = {}
