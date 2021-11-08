export default /* GraphQL */ `
  type Department {
    _id: ObjectId
    members: [StarshipMember]!
    name: String!
  }
`;
