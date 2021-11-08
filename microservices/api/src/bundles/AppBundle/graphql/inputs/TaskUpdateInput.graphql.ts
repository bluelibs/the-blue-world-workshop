export default /* GraphQL */ `
  input TaskUpdateInput {
    assigneeId: ObjectId
    status: TaskStatus
    title: String
  }
`;
