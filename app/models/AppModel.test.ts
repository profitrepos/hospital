import { AppModel } from "./AppModel"

test("can be created", () => {
  const instance = AppModel.create({})

  expect(instance).toBeTruthy()
})
