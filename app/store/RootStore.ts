import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { createMedicalCardStoreDefault } from "./MedicalCardStore"
import { createAppStoreDefault } from "./AppStore"
import { createUserInfoStoreDefault } from "./UserInfoStore"
import { createRecordsStoreDefault } from "./RecordsStore"
import { createSearchMedicalCardStoreDefault } from "./SearchMedicalCardStore"

export const RootStoreModel = types.model("RootStore").props({
  app: createAppStoreDefault(),
  medicalCard: createMedicalCardStoreDefault(),
  userInfo: createUserInfoStoreDefault(),
  records: createRecordsStoreDefault(),
  search: createSearchMedicalCardStoreDefault(),
})

export interface RootStore extends Instance<typeof RootStoreModel> {}

export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
