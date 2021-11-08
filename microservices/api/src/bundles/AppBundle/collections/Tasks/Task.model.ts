import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Task as BaseTask } from "./Task.model.base";
export { TaskStatus } from "./enums/TaskStatus.enum";

@Schema()
export class Task extends BaseTask {
  // You can extend the base here
}
