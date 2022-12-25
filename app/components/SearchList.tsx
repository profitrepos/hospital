import { observer } from "mobx-react-lite"
import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle } from "react-native"
import { MedicalCardListItem, PatientListItem } from "../interfaces"
import { navigate } from "../navigators"
import { useStores } from "../store"
import { spacing } from "../theme"
import { delay } from "../utils/delay"
import { MedCardsList } from "./MedCardsList"
import { PatientsList } from "./PatientsList"
import { Button } from "./ui"

interface SearchListProps {}

export const SearchList: FC<SearchListProps> = observer(() => {
  //TODO: сделать сохранение позиции скролла https://translated.turbopages.org/proxy_u/en-ru.ru.6e50d9e4-63a82324-3eb021c2-74722d776562/https/stackoverflow.com/questions/41270949/how-can-i-keep-position-on-scrollview-or-listview
  const [patientIndex, setPatientIndex] = useState(0)

  const { search, userInfo, records, assignments } = useStores()
  const { activeOrg } = userInfo
  const { load: recordsLoad } = records
  const { load: assignmentsLoad } = assignments
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

  const medCardHandler = async (item: MedicalCardListItem) => {
    if (activeOrg) {
      navigate("MedicalCard")
      await delay(200)
      recordsLoad(activeOrg.organisationId, item.uid)
      assignmentsLoad(activeOrg.organisationId, item.uid)
    }
  }

  const patientHandler = (patient: PatientListItem, index?: number) => {
    setActivePatient(patient.uid)
    setPatientIndex(index ? index : 0)
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
          <PatientsList
            scrollToIndex={patientIndex}
            data={patientsList}
            onPress={patientHandler}
            loading={loading}
          />
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
