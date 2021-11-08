import { StarshipMembers } from "./collections/StarshipMembers";
import { Users } from "./collections/Users";
import { generateProject, app } from "./utils";
import { Departments } from "./collections/Departments";
import { Tasks } from "./collections/Tasks";

const application = app({
  id: "the-blue-world",
  sharedModels: [
    // Configure shared models
  ],
  collections: [Users, StarshipMembers, Departments, Tasks],
});

generateProject(application, {
  // Mark this as true when you want to override even the non-overridable files
  // override: true,
});
