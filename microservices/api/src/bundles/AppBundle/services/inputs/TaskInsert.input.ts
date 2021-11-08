import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { TaskInsertInput as BaseTaskInsertInput } from "./TaskInsert.input.base";

@Schema()
export class TaskInsertInput extends BaseTaskInsertInput {
  // You can extend the base here
}
