import { flow, Instance, SnapshotIn, SnapshotOut, toGenerator, types } from "mobx-state-tree"
import i18n from "i18next"
import * as Updates from "expo-updates"

import { ASYNC_STORAGE_KEYS, SECURE_STORAGE_KEYS } from "../interfaces/Common"
import asyncStorage from "../utils/async-storage/async-storage"
import secureStorage from "../utils/secure-storage/secure-storage"

export const AppStore = types
  .model("AppStore")
  .props({
    pincode: types.maybe(types.string),
    isVerify: false,
    isAuth: false,
    IIN: types.optional(types.string, ""),
    error: types.optional(types.string, ""),
    hasUpdates: false,
  })
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
    setIIN: (value: string) => {
      self.IIN = value
    },
    clearError: () => {
      self.error = ""
    },
  }))
  .actions((self) => ({
    finishAuth: flow(function* (pincode: string) {
      try {
        const pincodeSaved = yield secureStorage.saveString(
          SECURE_STORAGE_KEYS.PINCODE_KEY,
          pincode,
        )
        const iinSaved = yield secureStorage.saveString(SECURE_STORAGE_KEYS.IIN, self.IIN)
        if (pincodeSaved && iinSaved) {
          self.pincode = pincode
          self.isAuth = true
          self.isVerify = true
        }
      } catch (error) {
        self.error = "errors.unknown"
      }
    }),
    resetPassword: flow(function* () {
      try {
        const pincodeRemoved = yield secureStorage.remove(SECURE_STORAGE_KEYS.PINCODE_KEY)
        const iinRemoved = yield secureStorage.remove(SECURE_STORAGE_KEYS.IIN)
        if (pincodeRemoved && iinRemoved) {
          self.pincode = undefined
          self.isAuth = false
          self.isVerify = false
        }
      } catch (error) {
        console.log("resetPassword error ---> ", error)

        // self.error = "errors.unknown"
        self.error = error
      }
    }),
    updateApp: flow(function* () {
      try {
        yield Updates.fetchUpdateAsync()
        setTimeout(() => {
          Updates.reloadAsync()
        }, 3000)
      } catch (error) {
        console.log("UPDATE ERROR - ", error)
      }
    }),
  }))

export interface AppStore extends Instance<typeof AppStore> {}
export interface AppStoreSnapshotOut extends SnapshotOut<typeof AppStore> {}
export interface AppStoreSnapshotIn extends SnapshotIn<typeof AppStore> {}
export const createAppStoreDefault = () => types.optional(AppStore, {})
