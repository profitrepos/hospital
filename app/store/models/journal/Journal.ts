import { Instance, types } from "mobx-state-tree"
import { JournalListItem } from "../../../interfaces"
import { ChapterModel } from "../common-models/common-models"

export const JournalModel = types.model("Journal").props({
  uid: types.identifier,
  timestamp: types.number,
  doc: types.literal("Дневник"),
  date: types.string,
  author: types.string,
  chapters: types.array(ChapterModel),
})

export const JournalsStore = types
  .model("JournalsStore")
  .props({
    items: types.optional(types.array(JournalModel), []),
    activeJournal: types.safeReference(JournalModel),
  })
  .actions((self) => ({
    setActiveJournal: (uid: string) => {
      self.activeJournal = uid as any
    },
  }))
  .views((self) => ({
    get list() {
      return self.items.reduce<JournalListItem[]>((prev, journal) => {
        const { uid, doc, date } = journal
        return [...prev, { uid, doc, date }]
      }, [])
    },
  }))

export interface Journal extends Instance<typeof JournalModel> {}
