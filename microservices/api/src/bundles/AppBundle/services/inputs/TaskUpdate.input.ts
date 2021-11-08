import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { TaskUpdateInput as BaseTaskUpdateInput } from "./TaskUpdate.input.base";

@Schema()
export class TaskUpdateInput extends BaseTaskUpdateInput {
  // You can extend the base here
}
