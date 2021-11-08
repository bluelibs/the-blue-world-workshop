import { Service } from "@bluelibs/core";
import { DepartmentListFiltersForm as BaseDepartmentListFiltersForm } from "./DepartmentListFiltersForm.base";

@Service({ transient: true })
export class DepartmentListFiltersForm extends BaseDepartmentListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
