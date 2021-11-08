import { Service } from "@bluelibs/core";
import { TaskListFiltersForm as BaseTaskListFiltersForm } from "./TaskListFiltersForm.base";

@Service({ transient: true })
export class TaskListFiltersForm extends BaseTaskListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
