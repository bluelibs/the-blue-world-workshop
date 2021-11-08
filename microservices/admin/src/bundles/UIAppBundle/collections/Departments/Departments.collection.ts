import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Department } from "@root/api.types";
import { StarshipMembersCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Department };

export class DepartmentsCollection extends Collection<Department> {
  getName() {
    return "Departments";
  }

  getInputs() {
    return {
      insert: "DepartmentInsertInput!",
      update: "DepartmentUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Department>[] {
    return [
      {
        collection: () => StarshipMembersCollection,
        name: "members",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Department> {
    return {};
  }
}
