import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { withSetPropAction } from "./helpers/withSetPropAction"

/**
 * Model description here for TypeScript hints.
 */
export const OrganizationModel = types
  .model("Organization")
  .props({})
  .actions(withSetPropAction)
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

export interface Organization extends Instance<typeof OrganizationModel> {}
export interface OrganizationSnapshotOut extends SnapshotOut<typeof OrganizationModel> {}
export interface OrganizationSnapshotIn extends SnapshotIn<typeof OrganizationModel> {}
export const createOrganizationDefaultModel = () => types.optional(OrganizationModel, {})
