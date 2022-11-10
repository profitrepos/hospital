import App from "./app/app.tsx"
import React from "react"
import { registerRootComponent } from "expo"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

function HostelApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

registerRootComponent(HostelApp)
export default HostelApp
