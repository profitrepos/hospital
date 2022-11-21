import { PatientsModel } from "./Patients"

test("can be created", () => {
  const instance = PatientsModel.create({})

  expect(instance).toBeTruthy()
})
