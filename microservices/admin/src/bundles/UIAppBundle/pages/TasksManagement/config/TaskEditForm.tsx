import { Service } from "@bluelibs/core";
import { TaskEditForm as BaseTaskEditForm } from "./TaskEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Task } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TaskEditForm extends BaseTaskEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Task> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
