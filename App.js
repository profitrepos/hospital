import App from "./app/app.tsx"
import React from "react"
import { registerRootComponent } from "expo"
import * as SplashScreen from "expo-splash-screen"

SplashScreen.preventAutoHideAsync()

function HospitalApp() {
  return <App hideSplashScreen={SplashScreen.hideAsync} />
}

registerRootComponent(HospitalApp)
export default HospitalApp
