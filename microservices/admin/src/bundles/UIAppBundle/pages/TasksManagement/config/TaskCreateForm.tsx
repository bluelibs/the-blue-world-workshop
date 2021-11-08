import { Service } from "@bluelibs/core";
import { TaskCreateForm as BaseTaskCreateForm } from "./TaskCreateForm.base";

@Service({ transient: true })
export class TaskCreateForm extends BaseTaskCreateForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
