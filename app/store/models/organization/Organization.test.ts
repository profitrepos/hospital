import { OrganizationModel } from "./Organization"

test("can be created", () => {
  const instance = OrganizationModel.create({})

  expect(instance).toBeTruthy()
})
