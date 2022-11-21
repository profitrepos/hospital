import { applySnapshot, IDisposer, onSnapshot } from "mobx-state-tree"
import type { RootStore } from "../RootStore"
import * as asyncStorage from "../../utils/async-storage"
import { ASYNC_STORAGE_KEYS, SECURE_STORAGE_KEYS } from "../../interfaces/Common"

let _disposer: IDisposer
export async function setupRootStore(rootStore: RootStore) {
  let restoredState: any

  try {
    restoredState = (await asyncStorage.load(ASYNC_STORAGE_KEYS.ROOT_STATE_STORAGE_KEY)) || {}

    //TODO: isVerify всегда должно быть false в начале
    // {...restoredState, 'app': {...restoredState.app, 'isVerify': false}}

    // applySnapshot(rootStore, restoredState)
    // console.log(
    //   "***********************************APPLY SNAPSHOT***********************************",
    // )

    // applySnapshot(rootStore, {})
  } catch (e) {
    if (__DEV__) {
      console.tron.error(e.message, null)
    }
  }

  if (_disposer) _disposer()

  _disposer = onSnapshot(rootStore, (snapshot) => {
    return asyncStorage.save(ASYNC_STORAGE_KEYS.ROOT_STATE_STORAGE_KEY, snapshot)
  })

  const unsubscribe = () => {
    _disposer()
    _disposer = undefined
  }

  return { rootStore, restoredState, unsubscribe }
}
