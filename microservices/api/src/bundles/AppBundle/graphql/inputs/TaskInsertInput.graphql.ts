export default /* GraphQL */ `
  input TaskInsertInput {
    assigneeId: ObjectId!
    status: TaskStatus!
    title: String!
  }
`;
