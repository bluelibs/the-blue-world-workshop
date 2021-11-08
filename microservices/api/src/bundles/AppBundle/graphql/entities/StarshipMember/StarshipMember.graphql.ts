export default /* GraphQL */ `
  type StarshipMember {
    _id: ObjectId
    children: [StarshipMemberChild]!
    department: Department!
    departmentId: ObjectId!
    emergencyContact: StarshipMemberEmergencyContact!
    firstName: String!
    fullName: String!
    isRecruit: Boolean!
    lastName: String!
    yearOfBirth: Int!
  }

  type StarshipMemberChild {
    name: String!
    yearOfBirth: String!
  }
  type StarshipMemberEmergencyContact {
    name: String!
    relation: String!
    phoneNumber: String!
  }
`;
