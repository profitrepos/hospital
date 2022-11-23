import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createAppDefaultModel } from "./app/App"
import { createConsultationsDefaultModel } from "./consultations/Consultations"
import { createEmergencyRoomDefaultModel } from "./emergency-room/EmergencyRoom"
import { createPatientsDefaultModel } from "./patients/Patients"
import { createUserDefaultModel } from "./user/User"

export const RootStoreModel = types
  .model("RootStore")
  .props({
    app: createAppDefaultModel(),
    user: createUserDefaultModel(),
    patients: createPatientsDefaultModel(),
    consultations: createConsultationsDefaultModel(),
    emergencyRoom: createEmergencyRoomDefaultModel(),
  })
  .actions((self) => ({
    afterCreate() {
      console.log("<<<--- RootStoreModel afterCreateHook --->>>>")
      self.app.checkAuth()
      self.app.loadPincode()
      self.app.setLocale()
    },
  }))

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
