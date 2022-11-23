import { applySnapshot, IDisposer, onSnapshot } from "mobx-state-tree"
import type { RootStore } from "../RootStore"
import { ASYNC_STORAGE_KEYS } from "../../interfaces/Common"
import { AsyncStorage } from "../../utils/async-storage"

let _disposer: IDisposer
export async function setupRootStore(rootStore: RootStore) {

  console.log("*************************")
  console.log("setup root store .... ")
  console.log(rootStore)
  console.log("*************************")

  let restoredState: any

  try {
    restoredState = (await AsyncStorage.load(ASYNC_STORAGE_KEYS.ROOT_STATE_STORAGE_KEY)) || {}

    //TODO: isVerify всегда должно быть false в начале
    // {...restoredState, 'app': {...restoredState.app, 'isVerify': false}}

    applySnapshot(rootStore, restoredState)
  } catch (e) {
    if (__DEV__) {
      console.tron.error(e.message, null)
    }
  }

  if (_disposer) _disposer()

  _disposer = onSnapshot(rootStore, (snapshot) => {
    console.log("<<<-- onSnapshot -->>>")
    return AsyncStorage.save(ASYNC_STORAGE_KEYS.ROOT_STATE_STORAGE_KEY, snapshot)
  })

  const unsubscribe = () => {
    _disposer()
    _disposer = undefined
  }

  return { rootStore, restoredState, unsubscribe }
}
