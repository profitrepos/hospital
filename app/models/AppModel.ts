import { Instance, SnapshotIn, SnapshotOut, types, flow } from "mobx-state-tree"
import { STORAGE_KEYS } from "../interfaces/Common"
import { loadString } from "../utils/storage"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const AppModel = types
  .model("App")
  .props({
    isInit: types.boolean,
    isAuth: types.boolean,
    isVerify: types.boolean,
    pinCode: types.maybeNull(types.string),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    setIsInit: (status: boolean) => (self.isInit = status),
    setIsAuth: (status: boolean) => (self.isAuth = status),
    setIsVerify: (status: boolean) => (self.isVerify = status),
    loadPincode: flow(function* () {
      const pinCode = yield loadString(STORAGE_KEYS.PINCODE_KEY, true)
      self.pinCode = pinCode
    }),
  }))
  .actions((self) => ({
    afterCreate() {
      self.loadPincode()
    },
  }))

export interface App extends Instance<typeof AppModel> {}
export interface AppSnapshotOut extends SnapshotOut<typeof AppModel> {}
export interface AppSnapshotIn extends SnapshotIn<typeof AppModel> {}
export const createAppDefaultModel = () =>
  types.optional(AppModel, {
    isAuth: false,
    isInit: false,
    isVerify: false,
  })
