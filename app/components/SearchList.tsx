import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { View, ViewStyle } from "react-native"
import { MedicalCardListItem, PatientListItem } from "../interfaces"
import { navigate } from "../navigators"
import { useStores } from "../store"
import { MedCardsList } from "./MedCardsList"
import { PatientsList } from "./PatientsList"

interface SearchListProps {}

export const SearchList: FC<SearchListProps> = observer(() => {
  const { search } = useStores()
  const { loading, patientsList, medCards, searchByPatient, activePatient } = search

  useEffect(() => {
    if (patientsList.length > 1) {
      navigate("SelectPatient")
    }
  }, [patientsList])

  useEffect(() => {
    if (activePatient) {
      searchByPatient()
    }
  }, [activePatient])

  const medCardHandler = (medCard: MedicalCardListItem) => {
    navigate("MedicalCard")
    //TODO: где будет активная мед карта?
  }

  return (
    <View style={$container}>
      <MedCardsList data={medCards} loading={loading} onPress={medCardHandler} />
    </View>
  )
})

const $container: ViewStyle = {
  borderRadius: 12,
  backgroundColor: "#fff",
  flex: 1,
}
