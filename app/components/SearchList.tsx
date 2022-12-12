import { observer } from "mobx-react-lite"
import React, { FC, useEffect } from "react"
import {
  View,
  ViewStyle,
} from "react-native"
import { MedicalCardListItem, PatientListItem } from "../interfaces"
import { navigate } from "../navigators"
import { useStores } from "../store"
import { MedCardsList } from "./MedCardsList"
import { PatientsList } from "./PatientsList"

interface SearchListProps {
}

export const SearchList: FC<SearchListProps> = observer(
  () => {

    const { search } = useStores()
    const { loading, patients, medCards, searchByPatient, setActivePatient, activePatient } = search

    useEffect(() => {

      if (activePatient) {
        searchByPatient()
      }

    }, [activePatient])

    const patientHandler = (patient: PatientListItem) => {
      setActivePatient(patient.uid)
    }

    const medCardHandler = (medCard: MedicalCardListItem) => {
        navigate("MedicalCard")
        //TODO: где будет активная мед карта?
    }

    return (
      <View style={$container}>
        { patients.length > 1 ?  
          <PatientsList data={patients} onPress={patientHandler} loading={loading} /> 
          : <MedCardsList data={medCards} loading={loading} onPress={medCardHandler} />}
      </View>
    )
  },
)


const $container: ViewStyle = {
  borderRadius: 12,
  backgroundColor: "#fff",
  flex: 1,
}



