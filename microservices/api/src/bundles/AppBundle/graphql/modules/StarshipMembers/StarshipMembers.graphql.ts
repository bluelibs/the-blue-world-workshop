export default /* GraphQL */ `
  type Query {
    StarshipMembersFindOne(query: QueryInput): StarshipMember
    StarshipMembersFindOneByID(_id: ObjectId!): StarshipMember
    StarshipMembersFind(query: QueryInput): [StarshipMember]!
    StarshipMembersCount(query: QueryInput): Int!
  }

  type Mutation {
    StarshipMembersInsertOne(
      document: StarshipMemberInsertInput!
    ): StarshipMember
    StarshipMembersUpdateOne(
      _id: ObjectId!
      document: StarshipMemberUpdateInput!
    ): StarshipMember!
    StarshipMembersDeleteOne(_id: ObjectId!): Boolean
  }

  type Subscription {
    StarshipMembersSubscription(body: EJSON): SubscriptionEvent
    StarshipMembersSubscriptionCount(filters: EJSON): SubscriptionCountEvent
  }
`;
