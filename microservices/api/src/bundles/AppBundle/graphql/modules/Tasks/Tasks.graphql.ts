export default /* GraphQL */ `
  type Query {
    TasksFindOne(query: QueryInput): Task
    TasksFindOneByID(_id: ObjectId!): Task
    TasksFind(query: QueryInput): [Task]!
    TasksCount(query: QueryInput): Int!
  }

  type Mutation {
    TasksInsertOne(document: TaskInsertInput!): Task
    TasksUpdateOne(_id: ObjectId!, document: TaskUpdateInput!): Task!
    TasksDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    TasksSubscription(body: EJSON): SubscriptionEvent
    TasksSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
