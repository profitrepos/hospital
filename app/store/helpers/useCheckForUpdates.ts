import * as Updates from "expo-updates"
import { useEffect, useState } from "react"

export const useCheckForUpdates = (hideSplashScreen: () => void) => {
  const [hasUpdates, setHasUpdates] = useState(false)

  useEffect(() => {
    const check = async () => {
      if (!__DEV__) {
        try {
          const update = await Updates.checkForUpdateAsync()

          if (update.isAvailable) {
            setHasUpdates(true)
            hideSplashScreen()
          }
        } catch (error) {
          console.log("error check updates.... ", error)
        }
      }
    }

    check()
  }, [])

  return hasUpdates
}
