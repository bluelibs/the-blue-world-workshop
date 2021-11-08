import { Collection, Behaviors } from "@bluelibs/mongo-bundle";
import { Behaviors as XBehaviors } from "@bluelibs/x-bundle";
import * as links from "./StarshipMembers.links";
import * as reducers from "./StarshipMembers.reducers";
import { StarshipMember } from "./StarshipMember.model";

export class StarshipMembersCollection extends Collection<StarshipMember> {
  static collectionName = "starshipMembers";
  static model = StarshipMember;

  static links = links;
  static reducers = reducers;

  static behaviors = [
    Behaviors.Timestampable(),

    Behaviors.Blameable(),

    Behaviors.Softdeletable(),

    XBehaviors.Live(),
  ];

  // Create an array of indexes
  static indexes = [
    { key: { isDeleted: 1 } },
    { key: { createdAt: 1 } },
    { key: { createdBy: 1 } },
  ];
}
