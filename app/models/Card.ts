---
patches:
  - path: "app/models/RootStore.ts"
    after: "from \"mobx-state-tree\"\n"
    insert: "import { CardModel } from \"./Card\"\n"
    skip: true
  - path: "app/models/RootStore.ts"
    after: "types.model(\"RootStore\").props({\n"
    insert: "  card: types.optional(CardModel, {} as any),\n"
    skip: true
  - path: "app/models/index.ts"
    append: "export * from \"./Card\"\n" 
    skip: 
---
import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const CardModel = types
  .model("Card")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Card extends Instance<typeof CardModel> {}
export interface CardSnapshotOut extends SnapshotOut<typeof CardModel> {}
export interface CardSnapshotIn extends SnapshotIn<typeof CardModel> {}
export const createCardDefaultModel = () => types.optional(CardModel, {})
