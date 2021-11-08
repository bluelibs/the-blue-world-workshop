import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Department } from "@bundles/UIAppBundle/collections";
import { DepartmentViewer as BaseDepartmentViewer } from "./DepartmentViewer.base";

@Service({ transient: true })
export class DepartmentViewer extends BaseDepartmentViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Department> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
