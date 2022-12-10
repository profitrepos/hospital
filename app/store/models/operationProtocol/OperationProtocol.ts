import { Instance, types } from "mobx-state-tree"

export const OperationProtocolModel = types.model("OperationProtocol").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Протокол операции"),
  date: types.string,
  author: types.string,
  code: types.string,
  protocol: types.string,
})

export const OperationProtocolStore = types
  .model("OperationProtocolStore")
  .props({
    items: types.optional(types.array(OperationProtocolModel), []),
    filter: "",
    search: "",
  })
  .actions((self) => ({
    setFilter: (value: string) => {
      self.filter = value
    },
    setSearch: (value: string) => {
      self.search = value
    },
  }))
  .views((self) => ({
    get items() {
      //TODO: сделать логику фильтрации и поиска
      return self.items
    },
  }))

export interface OperationProtocol extends Instance<typeof OperationProtocolModel> {}