import { Organization } from "../store"

export interface UserInfo {
  error: string
  data: Organization[]
}

export interface OrganizationListItem
  extends Pick<
    Organization,
    "organisationName" | "departmentId" | "departmentName" | "organisationId"
  > {}
