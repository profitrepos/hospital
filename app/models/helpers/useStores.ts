import { createContext, useContext, useEffect, useState } from "react"
import { setLocale } from "../../i18n"
import { ASYNC_STORAGE_KEYS } from "../../interfaces/Common"
import { setReactotronRootStore } from "../../services/reactotron"
import { AsyncStorage } from "../../utils/async-storage"
import { RootStore, RootStoreModel } from "../RootStore"
import { setupRootStore } from "./setupRootStore"

const _rootStore = RootStoreModel.create({})
const RootStoreContext = createContext<RootStore>(_rootStore)

export const RootStoreProvider = RootStoreContext.Provider

export const useStores = () => useContext(RootStoreContext)

export const useInitialRootStore = (callback: () => void | Promise<void>) => {
  const rootStore = useStores()
  const [rehydrated, setRehydrated] = useState(false)

  useEffect(() => {
    let _unsubscribe: () => void
    ;(async () => {
      const selectedLanguages =
        (await AsyncStorage.load(ASYNC_STORAGE_KEYS.STORAGE_LANGUAGES_KEY)) || "ru"
      setLocale(selectedLanguages)

      const { restoredState, unsubscribe } = await setupRootStore(rootStore)
      _unsubscribe = unsubscribe

      setReactotronRootStore(rootStore, restoredState)

      setRehydrated(true)

      if (callback) callback()
    })()

    return () => {
      if (_unsubscribe) _unsubscribe()
    }
  }, [])

  return { rootStore, rehydrated }
}
