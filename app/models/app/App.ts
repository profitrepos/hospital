import { Instance, SnapshotIn, SnapshotOut, types, flow } from "mobx-state-tree"
import { SECURE_STORAGE_KEYS } from "../../interfaces/Common"
import { SecureStore } from "../../utils/secure-storage"
import { withSetPropAction } from "../helpers/withSetPropAction"

export const AppModel = types
  .model("App")
  .props({
    isAuth: types.boolean,
    isVerify: types.boolean,
    pinCode: types.maybeNull(types.string),
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    setIsAuth: (status: boolean) => (self.isAuth = status),
    setIsVerify: (status: boolean) => (self.isVerify = status),
    loadPincode: flow(function* () {
      const pinCode = yield SecureStore.loadString(SECURE_STORAGE_KEYS.PINCODE_KEY)
      self.pinCode = pinCode
    }),
    savePincode: flow(function* (pincode: string) {
      const result = yield SecureStore.saveString(SECURE_STORAGE_KEYS.PINCODE_KEY, pincode)
      if (result) {
        self.pinCode = pincode
        return true
      }
      return false
    }),
    resetPassword: flow(function* () {
      yield SecureStore.remove(SECURE_STORAGE_KEYS.PINCODE_KEY)
      yield SecureStore.remove(SECURE_STORAGE_KEYS.AUTH_KEY)
      self.isAuth = false
      self.isVerify = false
      self.pinCode = null
    }),
    checkAuth: flow(function* () {
      const isAuth = yield SecureStore.loadString(SECURE_STORAGE_KEYS.AUTH_KEY)

      if (isAuth) {
        self.isAuth = true
      }
    }),
  }))
  .actions((self) => ({
    finishAuth: flow(function* (pincode) {
      const authSaved = yield SecureStore.saveString(SECURE_STORAGE_KEYS.AUTH_KEY, "authorized")

      if (authSaved) {
        const pincodeSaved = yield self.savePincode(pincode)

        if (pincodeSaved) {
          self.isAuth = true
          self.isVerify = true
          self.pinCode = pincode
        }
      }
    }),
  }))

export interface App extends Instance<typeof AppModel> {}
export interface AppSnapshotOut extends SnapshotOut<typeof AppModel> {}
export interface AppSnapshotIn extends SnapshotIn<typeof AppModel> {}
export const createAppDefaultModel = () =>
  types.optional(AppModel, {
    isAuth: false,
    isVerify: false,
    pinCode: null,
  })
