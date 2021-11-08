import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import { TaskInsertInput, TaskUpdateInput } from "../../../services/inputs";
import { TasksCollection } from "../../../collections/Tasks/Tasks.collection";

export default {
  Query: [
    [],
    {
      TasksFindOne: [X.ToNovaOne(TasksCollection)],
      TasksFind: [X.ToNova(TasksCollection)],
      TasksCount: [X.ToCollectionCount(TasksCollection)],
    },
  ],
  Mutation: [
    [],
    {
      TasksInsertOne: [
        X.ToModel(TaskInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(TasksCollection),
        X.ToNovaByResultID(TasksCollection),
      ],
      TasksUpdateOne: [
        X.ToModel(TaskUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(TasksCollection),
        X.ToDocumentUpdateByID(TasksCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(TasksCollection),
      ],
      TasksDeleteOne: [
        X.CheckDocumentExists(TasksCollection),
        X.ToDocumentDeleteByID(TasksCollection),
      ],
    },
  ],
  Subscription: {
    TasksSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(TasksCollection)],
    },
    TasksSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(TasksCollection)],
    },
  },
} as IResolverMap;
