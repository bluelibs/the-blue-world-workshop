export default /* GraphQL */ `
  type Query {
    DepartmentsFindOne(query: QueryInput): Department
    DepartmentsFindOneByID(_id: ObjectId!): Department
    DepartmentsFind(query: QueryInput): [Department]!
    DepartmentsCount(query: QueryInput): Int!
  }

  type Mutation {
    DepartmentsInsertOne(document: DepartmentInsertInput!): Department
    DepartmentsUpdateOne(
      _id: ObjectId!
      document: DepartmentUpdateInput!
    ): Department!
    DepartmentsDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    DepartmentsSubscription(body: EJSON): SubscriptionEvent
    DepartmentsSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
