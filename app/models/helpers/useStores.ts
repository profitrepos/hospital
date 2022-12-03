import { createContext, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

import { setReactotronRootStore } from "../../services/reactotron"
import { RootStore, RootStoreModel } from "../RootStore"
import { setupRootStore } from "./setupRootStore"

const _rootStore = RootStoreModel.create({})
const RootStoreContext = createContext<RootStore>(_rootStore)

export const RootStoreProvider = RootStoreContext.Provider

export const useStores = () => useContext(RootStoreContext)

export const useInitialRootStore = (callback: () => void | Promise<void>) => {
  const rootStore = useStores()
  const [rehydrated, setRehydrated] = useState(false)
  const { i18n } = useTranslation()

  useEffect(() => {
    ;(async () => {
      const { restoredState, locale } = await setupRootStore(rootStore)

      i18n.changeLanguage(locale)

      setReactotronRootStore(rootStore, restoredState)

      setRehydrated(true)

      if (callback) callback()
    })()
  }, [])

  return { rehydrated }
}
