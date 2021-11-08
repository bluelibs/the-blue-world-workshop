import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { StarshipMember } from "@root/api.types";
import { DepartmentsCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { StarshipMember };

export class StarshipMembersCollection extends Collection<StarshipMember> {
  getName() {
    return "StarshipMembers";
  }

  getInputs() {
    return {
      insert: "StarshipMemberInsertInput!",
      update: "StarshipMemberUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<StarshipMember>[] {
    return [
      {
        collection: () => DepartmentsCollection,
        name: "department",
        field: "departmentId",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<StarshipMember> {
    return {};
  }
}
