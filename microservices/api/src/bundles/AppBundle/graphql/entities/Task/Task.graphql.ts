export default /* GraphQL */ `
  type Task {
    _id: ObjectId
    assignee: StarshipMember!
    assigneeId: ObjectId!
    status: TaskStatus!
    title: String!
  }

  enum TaskStatus {
    OPEN
    IN_PROGRESS
    DONE
  }
`;
