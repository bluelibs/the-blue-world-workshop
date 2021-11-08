import { Service } from "@bluelibs/core";
import { DepartmentCreateForm as BaseDepartmentCreateForm } from "./DepartmentCreateForm.base";

@Service({ transient: true })
export class DepartmentCreateForm extends BaseDepartmentCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
