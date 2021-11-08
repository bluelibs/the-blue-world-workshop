import { StarshipMembersCollection } from "../StarshipMembers/StarshipMembers.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const assignee: IBundleLinkCollectionOption = {
  collection: () => StarshipMembersCollection,
  field: "assigneeId",
};
