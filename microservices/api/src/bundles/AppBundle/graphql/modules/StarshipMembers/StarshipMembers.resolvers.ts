import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  StarshipMemberInsertInput,
  StarshipMemberUpdateInput,
} from "../../../services/inputs";
import { StarshipMembersCollection } from "../../../collections/StarshipMembers/StarshipMembers.collection";

export default {
  Query: [
    [],
    {
      StarshipMembersFindOne: [X.ToNovaOne(StarshipMembersCollection)],
      StarshipMembersFind: [X.ToNova(StarshipMembersCollection)],
      StarshipMembersCount: [X.ToCollectionCount(StarshipMembersCollection)],
    },
  ],
  Mutation: [
    [],
    {
      StarshipMembersInsertOne: [
        X.ToModel(StarshipMemberInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(StarshipMembersCollection),
        X.ToNovaByResultID(StarshipMembersCollection),
      ],
      StarshipMembersUpdateOne: [
        X.ToModel(StarshipMemberUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(StarshipMembersCollection),
        X.ToDocumentUpdateByID(
          StarshipMembersCollection,
          null,
          ({ document }) => ({
            $set: document,
          })
        ),
        X.ToNovaByResultID(StarshipMembersCollection),
      ],
      StarshipMembersDeleteOne: [
        X.CheckDocumentExists(StarshipMembersCollection),
        X.ToDocumentDeleteByID(StarshipMembersCollection),
      ],
    },
  ],
  Subscription: {
    StarshipMembersSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(StarshipMembersCollection)],
    },
    StarshipMembersSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(StarshipMembersCollection)],
    },
  },
} as IResolverMap;
