import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { StarshipMember as BaseStarshipMember } from "./StarshipMember.model.base";

@Schema()
export class StarshipMember extends BaseStarshipMember {
  // You can extend the base here
}
