import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Department as BaseDepartment } from "./Department.model.base";

@Schema()
export class Department extends BaseDepartment {
  // You can extend the base here
}
