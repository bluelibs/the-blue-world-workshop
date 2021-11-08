import { Service } from "@bluelibs/core";
import { StarshipMemberEditForm as BaseStarshipMemberEditForm } from "./StarshipMemberEditForm.base";
import { QueryBodyType } from "@bluelibs/x-ui";
import { StarshipMember } from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StarshipMemberEditForm extends BaseStarshipMemberEditForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<StarshipMember> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
