import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { Department } from "@bundles/UIAppBundle/collections";
import { DepartmentList as BaseDepartmentList } from "./DepartmentList.base";

@Service({ transient: true })
export class DepartmentList extends BaseDepartmentList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<Department> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
