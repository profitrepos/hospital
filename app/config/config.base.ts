export interface ConfigBaseProps {
  persistNavigation: "always" | "dev" | "prod" | "never"
  catchErrors: "always" | "dev" | "prod" | "never"
  exitRoutes: string[]
}

export type PersistNavigationConfig = ConfigBaseProps["persistNavigation"]

const BaseConfig: ConfigBaseProps = {
  persistNavigation: "dev",
  catchErrors: __DEV__ ? "dev" : "prod",
  exitRoutes: ["Welcome"],
}

export default BaseConfig
