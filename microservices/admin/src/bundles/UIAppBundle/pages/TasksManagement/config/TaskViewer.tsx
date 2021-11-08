import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Task } from "@bundles/UIAppBundle/collections";
import { TaskViewer as BaseTaskViewer } from "./TaskViewer.base";

@Service({ transient: true })
export class TaskViewer extends BaseTaskViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Task> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
