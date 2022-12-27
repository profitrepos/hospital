import React, { FC } from "react"
import { TextStyle, View, ViewStyle } from "react-native"
import { TxKeyPath } from "../i18n"
import { Patient, RecordMedCard } from "../store"
import { COLORS, spacing } from "../theme"
import { Text } from "./ui"

interface PatientDataProps {
  patient: Patient
  medCard: RecordMedCard
  style?: ViewStyle
}

const keys = [
  "IIN",
  "birthDate",
  "gender",
  "age",
  "allergy",
  "department",
  "ward",
  "diagnosis",
  "admissionDate",
  "hospitalization",
  "doctor",
] as const

interface RowProps {
  text: string
  txKey: TxKeyPath
  hidden: boolean
}

const Row: FC<RowProps> = ({ text, txKey, hidden }) => {
  if (hidden) {
    return null
  }
  return (
    <View style={$row}>
      <Text style={$labelText} preset="helper" tx={txKey} />
      <Text style={$rowText}>{text}</Text>
    </View>
  )
}

export const PatientData: FC<PatientDataProps> = ({ patient, style, medCard }) => {
  const compareDate = { ...patient, ...medCard }

  return (
    <View style={[$container, style]}>
      {keys.map((key) => (
        <Row
          key={key}
          txKey={`patientDataScreen.${key}`}
          text={compareDate[key]}
          hidden={compareDate[key].length === 0}
        />
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
