import { EmergencyRoomModel } from "./EmergencyRoom"

test("can be created", () => {
  const instance = EmergencyRoomModel.create({})

  expect(instance).toBeTruthy()
})
