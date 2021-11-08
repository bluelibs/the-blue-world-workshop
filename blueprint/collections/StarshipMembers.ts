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

export const StarshipMembers = collection({
  id: "StarshipMembers",
  representedBy: "fullName",
  fields: [
    field.string("firstName"),
    field.string("lastName"),
    field.string("fullName", {
      isReducer: true,
    }),
    field.boolean("isRecruit"),
    field.integer("yearOfBirth"),
    field.object("emergencyContact", {
      subfields: [
        field.string("name"),
        field.string("relation"),
        field.string("phoneNumber"),
      ],
    }),
    field.object("children", {
      isArray: true,
      subfields: [field.string("name"), field.string("yearOfBirth")],
    }),
  ],
  mock: {
    count: 10,
  },
  relations: [
    relation({
      id: "department",
      to: "Departments",
    }),
  ],
});
