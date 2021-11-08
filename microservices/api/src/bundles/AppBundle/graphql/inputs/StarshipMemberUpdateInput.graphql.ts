export default /* GraphQL */ `
  input StarshipMemberUpdateInput {
    children: [StarshipMemberChildInput]
    departmentId: ObjectId
    emergencyContact: StarshipMemberEmergencyContactInput
    firstName: String
    isRecruit: Boolean
    lastName: String
    yearOfBirth: Int
  }

  input StarshipMemberChildInput {
    name: String!
    yearOfBirth: String!
  }
  input StarshipMemberEmergencyContactInput {
    name: String!
    relation: String!
    phoneNumber: String!
  }
`;
