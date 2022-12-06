import { MedicalCardModel } from "./MedicalCard"

test("can be created", () => {
  const instance = MedicalCardModel.create({})

  expect(instance).toBeTruthy()
})
