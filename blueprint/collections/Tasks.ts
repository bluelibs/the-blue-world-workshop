import {
  generateProject,
  app,
  collection,
  field,
  relation,
  shortcuts,
  sharedModel,
  GeneratorKind,
  faker,
} from "../utils";

export const Tasks = collection({
  id: "Tasks",
  fields: [
    field.string("title"),
    field.enum("status", {
      enumValues: ["OPEN", "IN_PROGRESS", "DONE"],
    }),
  ],
  mock: {
    count: 100,
  },
  relations: [
    relation({
      id: "assignee",
      to: "StarshipMembers",
    }),
  ],
});
