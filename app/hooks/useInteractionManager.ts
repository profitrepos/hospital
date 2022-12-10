import { useEffect, useState } from "react"
import { InteractionManager } from "react-native"

export const useInteractionManager = () => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    InteractionManager.runAfterInteractions(() => {
      setLoading(false)
    })
  })

  return loading
}
