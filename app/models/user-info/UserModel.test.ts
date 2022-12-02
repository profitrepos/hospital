import { UserModel } from "./UserModel"

test("can be created", () => {
  const instance = UserModel.create({})

  expect(instance).toBeTruthy()
})
