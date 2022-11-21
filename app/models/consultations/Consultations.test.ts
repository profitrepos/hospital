import { ConsultationsModel } from "./Consultations"

test("can be created", () => {
  const instance = ConsultationsModel.create({})

  expect(instance).toBeTruthy()
})
