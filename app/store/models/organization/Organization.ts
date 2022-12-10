import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"

export const OrganizationModel = types.model("Organization").props({
  organisationId: types.string,
  organisationName: types.string,
  departmentId: types.identifier,
  departmentName: types.string,
})

export interface Organization extends Instance<typeof OrganizationModel> {}
export interface OrganizationSnapshotOut extends SnapshotOut<typeof OrganizationModel> {}
export interface OrganizationSnapshotIn extends SnapshotIn<typeof OrganizationModel> {}
