import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Task } from "@bundles/UIAppBundle/collections";
import { TaskList as BaseTaskList } from "./TaskList.base";

@Service({ transient: true })
export class TaskList extends BaseTaskList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Task> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
