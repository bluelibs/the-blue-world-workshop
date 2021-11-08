import * as X from "@bluelibs/x-bundle";
import { IResolverMap } from "@bluelibs/graphql-bundle";
import {
  DepartmentInsertInput,
  DepartmentUpdateInput,
} from "../../../services/inputs";
import { DepartmentsCollection } from "../../../collections/Departments/Departments.collection";

export default {
  Query: [
    [],
    {
      DepartmentsFindOne: [X.ToNovaOne(DepartmentsCollection)],
      DepartmentsFind: [X.ToNova(DepartmentsCollection)],
      DepartmentsCount: [X.ToCollectionCount(DepartmentsCollection)],
    },
  ],
  Mutation: [
    [],
    {
      DepartmentsInsertOne: [
        X.ToModel(DepartmentInsertInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.ToDocumentInsert(DepartmentsCollection),
        X.ToNovaByResultID(DepartmentsCollection),
      ],
      DepartmentsUpdateOne: [
        X.ToModel(DepartmentUpdateInput, { field: "document" }),
        X.Validate({ field: "document" }),
        X.CheckDocumentExists(DepartmentsCollection),
        X.ToDocumentUpdateByID(DepartmentsCollection, null, ({ document }) => ({
          $set: document,
        })),
        X.ToNovaByResultID(DepartmentsCollection),
      ],
      DepartmentsDeleteOne: [
        X.CheckDocumentExists(DepartmentsCollection),
        X.ToDocumentDeleteByID(DepartmentsCollection),
      ],
    },
  ],
  Subscription: {
    DepartmentsSubscription: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscription(DepartmentsCollection)],
    },
    DepartmentsSubscriptionCount: {
      resolve: (payload) => payload,
      subscribe: [X.ToSubscriptionCount(DepartmentsCollection)],
    },
  },
} as IResolverMap;
