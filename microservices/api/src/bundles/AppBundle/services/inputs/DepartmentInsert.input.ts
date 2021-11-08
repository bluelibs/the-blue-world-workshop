import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { DepartmentInsertInput as BaseDepartmentInsertInput } from "./DepartmentInsert.input.base";

@Schema()
export class DepartmentInsertInput extends BaseDepartmentInsertInput {
  // You can extend the base here
}
