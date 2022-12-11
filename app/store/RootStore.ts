import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createMedicalCardStoreDefault } from "./MedicalCardStore"
import { createAppStoreDefault } from "./AppStore"
import { createUserInfoStoreDefault } from "./UserInfoStore"
import { createRecordStoreDefault } from "./RecordStore"

export const RootStoreModel = types.model("RootStore").props({
  app: createAppStoreDefault(),
  medicalCard: createMedicalCardStoreDefault(),
  userInfo: createUserInfoStoreDefault(),
  record: createRecordStoreDefault(),
})
//TODO: сделать стор для поиска пациентов
//TODO: сделать обработку ошибок

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
