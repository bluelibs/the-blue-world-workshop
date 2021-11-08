/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { StarshipMember } from "../";
import { TaskStatus } from "./enums/TaskStatus.enum";
export { TaskStatus };

@Schema()
export class Task {
  @Is(an.objectId())
  _id?: any;

  assignee: StarshipMember;

  @Is(an.objectId().required())
  assigneeId: any;

  @Is(a.string().oneOf(Object.values(TaskStatus)).required())
  status: TaskStatus;

  @Is(a.string().required())
  title: string;
}
