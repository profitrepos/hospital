import { flow, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import i18n from "i18next"

import { ASYNC_STORAGE_KEYS, SECURE_STORAGE_KEYS } from "../interfaces/Common"
import asyncStorage from "../utils/async-storage/async-storage"
import secureStorage from "../utils/secure-storage/secure-storage"
import { withSetPropAction } from "./helpers/withSetPropAction"

export const AppModel = types
  .model("App")
  .props({
    pincode: types.maybe(types.string),
    isVerify: false,
    isAuth: false,
  })
  .actions(withSetPropAction)
  .actions((self) => ({
    setPincode: (pincode: string) => {
      self.pincode = pincode
    },
    setIsVerify: (status: boolean) => {
      self.isVerify = status
    },
    setIsAuth: (status: boolean) => {
      self.isAuth = status
    },
    savePincode: flow(function* (pincode: string) {
      return yield secureStorage.saveString(SECURE_STORAGE_KEYS.PINCODE_KEY, pincode)
    }),
    setLocale: flow(function* (locale: "ru" | "kz") {
      i18n.changeLanguage(locale)
      return yield asyncStorage.saveString(ASYNC_STORAGE_KEYS.STORAGE_LANGUAGES_KEY, locale)
    }),
  }))
  .actions((self) => ({
    finishAuth: flow(function* (pincode: string) {
      const pincodeSaved = yield secureStorage.saveString(SECURE_STORAGE_KEYS.PINCODE_KEY, pincode)
      const authSaved = yield secureStorage.saveString(SECURE_STORAGE_KEYS.AUTH_KEY, "true")
      if (pincodeSaved && authSaved) {
        self.pincode = pincode
        self.isAuth = true
        self.isVerify = true
      }
    }),
    resetPassword: flow(function* () {
      const pincodeRemoved = yield secureStorage.remove(SECURE_STORAGE_KEYS.PINCODE_KEY)
      const authRemoved = yield secureStorage.remove(SECURE_STORAGE_KEYS.AUTH_KEY)
      if (pincodeRemoved && authRemoved) {
        self.pincode = null
        self.isAuth = false
        self.isVerify = false
      }
    }),
  }))

export interface App extends Instance<typeof AppModel> {}
export interface AppSnapshotOut extends SnapshotOut<typeof AppModel> {}
export interface AppSnapshotIn extends SnapshotIn<typeof AppModel> {}
export const createAppDefaultModel = () => types.optional(AppModel, {})
