import { Service } from "@bluelibs/core";
import { QueryBodyType } from "@bluelibs/x-ui";
import { StarshipMember } from "@bundles/UIAppBundle/collections";
import { StarshipMemberList as BaseStarshipMemberList } from "./StarshipMemberList.base";

@Service({ transient: true })
export class StarshipMemberList extends BaseStarshipMemberList {
  build() {
    super.build();
    // Perform additional modifications such as updating how a list item renders or add additional ones
  }

  static getRequestBody(): QueryBodyType<StarshipMember> {
    // You have the ability to modify the request by adding certain fields or relations

    return super.getRequestBody();
  }
}
