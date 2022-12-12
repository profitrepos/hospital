import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import { View, ViewStyle } from "react-native"
import { MedicalCardListItem, PatientListItem } from "../interfaces"
import { navigate } from "../navigators"
import { useStores } from "../store"
import { spacing } from "../theme"
import { MedCardsList } from "./MedCardsList"
import { PatientsList } from "./PatientsList"
import { Button } from "./ui"

interface SearchListProps {}

export const SearchList: FC<SearchListProps> = observer(() => {
  const { search } = useStores()
  const {
    loading,
    patientsList,
    medCards,
    searchByPatient,
    activePatient,
    setActivePatient,
    searchMedCards,
    searchText,
  } = search

  useEffect(() => {
    if (activePatient) {
      searchByPatient()
    }
  }, [activePatient])

  const medCardHandler = (medCard: MedicalCardListItem) => {
    navigate("MedicalCard")
    //TODO: где будет активная мед карта?
  }

  const patientHandler = (patient: PatientListItem) => {
    setActivePatient(patient.uid)
  }

  const clearActivePatient = () => {
    setActivePatient(undefined)
  }

  const renderList = () => {
    if (activePatient) {
      return (
        <>
          <MedCardsList data={medCards} loading={loading} onPress={medCardHandler} />
          <Button onPress={clearActivePatient} style={$btn} tx="common.back" />
        </>
      )
    } else if (patientsList.length > 1) {
      return (
        <>
          <PatientsList data={patientsList} onPress={patientHandler} loading={loading} />
          <Button
            onPress={searchMedCards}
            style={$btn}
            tx="search.medcards"
            disabled={searchText.length < 5}
          />
        </>
      )
    } else {
      return (
        <>
          <MedCardsList data={medCards} loading={loading} onPress={medCardHandler} />
          <Button
            onPress={searchMedCards}
            style={$btn}
            tx="search.medcards"
            disabled={searchText.length < 5}
          />
        </>
      )
    }
  }

  return <View style={$container}>{renderList()}</View>
})

const $container: ViewStyle = {
  borderRadius: 12,
  backgroundColor: "#fff",
  flex: 1,
}
const $btn: ViewStyle = {
  marginTop: spacing.small,
}
