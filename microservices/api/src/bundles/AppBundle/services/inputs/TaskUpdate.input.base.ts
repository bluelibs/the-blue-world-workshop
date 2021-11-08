/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { TaskStatus } from "../../collections";

@Schema()
export class TaskUpdateInput {
  @Is(an.objectId().nullable())
  assigneeId?: any;

  @Is(a.string().oneOf(Object.values(TaskStatus)).required())
  status?: TaskStatus;

  @Is(a.string().nullable())
  title?: string;
}
