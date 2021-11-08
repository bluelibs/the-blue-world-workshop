import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { DepartmentUpdateInput as BaseDepartmentUpdateInput } from "./DepartmentUpdate.input.base";

@Schema()
export class DepartmentUpdateInput extends BaseDepartmentUpdateInput {
  // You can extend the base here
}
