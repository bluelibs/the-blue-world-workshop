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

export const Departments = collection({
  id: "Departments",
  representedBy: "name",
  fields: [field.string("name")],
  mock: {
    count: 10,
  },
  relations: [
    relation({
      id: "members",
      to: "StarshipMembers",
      inversedBy: "department",
    }),
  ],
});
