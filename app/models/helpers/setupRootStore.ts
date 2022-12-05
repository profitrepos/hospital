import { applySnapshot, castToSnapshot, onSnapshot } from "mobx-state-tree"

import type { RootStore } from "../RootStore"
import { ASYNC_STORAGE_KEYS, SECURE_STORAGE_KEYS } from "../../interfaces/Common"
import secureStorage from "../../utils/secure-storage/secure-storage"
import asyncStorage from "../../utils/async-storage/async-storage"

export async function setupRootStore(rootStore: RootStore) {
  let restoredState: RootStore = rootStore
  let locale: string
  try {
    const pincode = await secureStorage.loadString(SECURE_STORAGE_KEYS.PINCODE_KEY)
    const isAuth = await secureStorage.loadString(SECURE_STORAGE_KEYS.AUTH_KEY)
    locale = (await asyncStorage.loadString(ASYNC_STORAGE_KEYS.STORAGE_LANGUAGES_KEY)) || "ru"

    restoredState = {
      ...rootStore,
      app: {
        ...rootStore.app,
        isAuth: Boolean(isAuth),
        isVerify: true, //TODO: для разработки
        pincode,
      },
    }
    onSnapshot(rootStore, (snapshot) => console.log("SNAPSHOT ---- ", snapshot))
    applySnapshot(rootStore, castToSnapshot(restoredState))
  } catch (e) {
    if (__DEV__) {
      console.tron.error(e.message, null)
    }
  }

  return { rootStore, restoredState, locale }
}
