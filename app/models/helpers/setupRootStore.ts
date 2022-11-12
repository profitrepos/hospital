import { applySnapshot, IDisposer, onSnapshot } from "mobx-state-tree"
import type { RootStore } from "../RootStore"
import * as storage from "../../utils/storage"
import { setLocale, STORAGE_LANGUAGES_KEY } from "../../i18n"

const ROOT_STATE_STORAGE_KEY = "STORE"

let _disposer: IDisposer
export async function setupRootStore(rootStore: RootStore) {
  let restoredState: any

  try {
    restoredState = (await storage.load(ROOT_STATE_STORAGE_KEY)) || {}
    const selectedLanguages = (await storage.load(STORAGE_LANGUAGES_KEY)) || "ru"

    setLocale(selectedLanguages)
    applySnapshot(rootStore, restoredState)
  } catch (e) {
    if (__DEV__) {
      console.tron.error(e.message, null)
    }
  }

  if (_disposer) _disposer()

  _disposer = onSnapshot(rootStore, (snapshot) => storage.save(ROOT_STATE_STORAGE_KEY, snapshot))

  const unsubscribe = () => {
    _disposer()
    _disposer = undefined
  }

  return { rootStore, restoredState, unsubscribe }
}
