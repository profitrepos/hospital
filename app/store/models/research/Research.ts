import { Instance, types, cast } from "mobx-state-tree"

export const ResearchModel = types.model("Research").props({
  uid: types.string,
  timestamp: types.number,
  doc: types.literal("Исследование"),
  date: types.string,
  author: types.string,
  code: types.string,
  name: types.string,
  status: types.string,
  description: types.string,
  conclusion: types.string,
})

export const ResearchStore = types
  .model("ResearchStore")
  .props({
    items: types.optional(types.array(ResearchModel), []),
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
  .views((self) => ({}))

export interface Research extends Instance<typeof ResearchModel> {}
