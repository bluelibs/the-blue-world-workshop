/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class DepartmentInsertInput {
  @Is(a.string().required())
  name: string;
}
