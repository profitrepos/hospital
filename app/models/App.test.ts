import { AppModel } from "./App"

test("can be created", () => {
  const instance = AppModel.create({})

  expect(instance).toBeTruthy()
})
