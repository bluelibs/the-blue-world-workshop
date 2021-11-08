/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class DepartmentUpdateInput {
  @Is(a.string().nullable())
  name?: string;
}
