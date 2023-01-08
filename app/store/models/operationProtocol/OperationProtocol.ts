import { Instance, types } from "mobx-state-tree"
import { getRootStore } from "../../helpers/getRootStore"

export const OperationProtocolModel = types.model("OperationProtocol").props({
  uid: types.identifier,
  timestamp: types.number,
  doc: types.literal("Протокол операции"),
  date: types.string,
  author: types.string,
  code: types.string,
  protocol: types.string,
})

export const OperationProtocolsStore = types
  .model("OperationProtocolsStore")
  .props({
    items: types.optional(types.array(OperationProtocolModel), []),
    activeOperationProtocol: types.safeReference(OperationProtocolModel)
  })
  .actions((self) => ({
    setActiveOperationProtocol: (uid: string | undefined) => {
      self.activeOperationProtocol = uid as any
    },
  }))
  .views((self) => ({
    get filteredItems(): OperationProtocol[] {
      const { records } = getRootStore(self)
      const { search, untilDate } = records
      return self.items.filter(
        (protocol) =>
          protocol.doc.toLowerCase().includes(search.toLowerCase()) &&
          protocol.timestamp > untilDate,
      )
    },
  }))

export interface OperationProtocol extends Instance<typeof OperationProtocolModel> {}
