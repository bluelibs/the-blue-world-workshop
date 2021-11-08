import { Service } from "@bluelibs/core";
import { StarshipMemberListFiltersForm as BaseStarshipMemberListFiltersForm } from "./StarshipMemberListFiltersForm.base";

@Service({ transient: true })
export class StarshipMemberListFiltersForm extends BaseStarshipMemberListFiltersForm {
  build() {
    super.build();

    // Perform additional modifications such as updating rendering functions, labels, description
  }
}
