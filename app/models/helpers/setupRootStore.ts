import { applySnapshot, IDisposer, onSnapshot } from "mobx-state-tree"
import type { RootStore } from "../RootStore"
import { ASYNC_STORAGE_KEYS } from "../../interfaces/Common"
import { AsyncStorage } from "../../utils/async-storage"

let _disposer: IDisposer
export async function setupRootStore(rootStore: RootStore) {
  let restoredState: any

  try {
    restoredState = (await AsyncStorage.load(ASYNC_STORAGE_KEYS.ROOT_STATE_STORAGE_KEY)) || {}
    applySnapshot(rootStore, restoredState)
  } catch (e) {
    if (__DEV__) {
      console.tron.error(e.message, null)
    }
  }

  if (_disposer) _disposer()

  _disposer = onSnapshot(rootStore, (snapshot) => {
    return AsyncStorage.save(ASYNC_STORAGE_KEYS.ROOT_STATE_STORAGE_KEY, {
      ...snapshot,
      // app: {
      //   isAuth: false,
      //   isVerify: false,
      //   pinCode: null,
      // },
    })
  })

  const unsubscribe = () => {
    _disposer()
    _disposer = undefined
  }

  return { rootStore, restoredState, unsubscribe }
}
