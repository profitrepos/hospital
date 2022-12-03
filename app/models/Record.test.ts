import { RecordModel } from "./Record"

test("can be created", () => {
  const instance = RecordModel.create({})

  expect(instance).toBeTruthy()
})
