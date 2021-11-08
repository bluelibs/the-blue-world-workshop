import { Service } from "@bluelibs/core";
import { DepartmentEditForm as BaseDepartmentEditForm } from "./DepartmentEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Department } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DepartmentEditForm extends BaseDepartmentEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<Department> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
