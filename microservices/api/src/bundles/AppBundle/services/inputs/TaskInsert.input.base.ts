/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { TaskStatus } from "../../collections";

@Schema()
export class TaskInsertInput {
  @Is(an.objectId().required())
  assigneeId: any;

  @Is(a.string().oneOf(Object.values(TaskStatus)).required())
  status: TaskStatus;

  @Is(a.string().required())
  title: string;
}
