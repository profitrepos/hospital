import { applySnapshot, IDisposer, onSnapshot } from "mobx-state-tree"
import type { RootStore } from "../RootStore"
import * as storage from "../../utils/storage"
import { setLocale } from "../../i18n"
import { STORAGE_KEYS } from "../../interfaces/Common"

let _disposer: IDisposer
export async function setupRootStore(rootStore: RootStore) {
  let restoredState: any

  try {
    restoredState = (await storage.load(STORAGE_KEYS.ROOT_STATE_STORAGE_KEY)) || {}

    const selectedLanguages = (await storage.load(STORAGE_KEYS.STORAGE_LANGUAGES_KEY)) || "ru"
    const isAuth = await storage.loadString(STORAGE_KEYS.AUTH_KEY, true)

    if (isAuth) {
      rootStore.app.setIsAuth(true)
    }

    //TODO: isVerify всегда должно быть false в начале
    // {...restoredState, 'app': {...restoredState.app, 'isVerify': false}}

    setLocale(selectedLanguages)
    applySnapshot(rootStore, restoredState)
  } catch (e) {
    if (__DEV__) {
      console.tron.error(e.message, null)
    }
  }

  if (_disposer) _disposer()

  _disposer = onSnapshot(rootStore, (snapshot) => {
    console.log("onSnapshot ---> ")

    return storage.save(STORAGE_KEYS.ROOT_STATE_STORAGE_KEY, snapshot)
  })

  const unsubscribe = () => {
    _disposer()
    _disposer = undefined
  }

  return { rootStore, restoredState, unsubscribe }
}
