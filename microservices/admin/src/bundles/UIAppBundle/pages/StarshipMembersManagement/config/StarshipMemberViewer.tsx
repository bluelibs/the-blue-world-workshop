import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { StarshipMember } from "@bundles/UIAppBundle/collections";
import { StarshipMemberViewer as BaseStarshipMemberViewer } from "./StarshipMemberViewer.base";

@Service({ transient: true })
export class StarshipMemberViewer extends BaseStarshipMemberViewer {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }

  static getRequestBody(): QueryBodyType<StarshipMember> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
