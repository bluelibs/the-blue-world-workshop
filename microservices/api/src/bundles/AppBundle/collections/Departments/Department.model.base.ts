/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { StarshipMember } from "../";

@Schema()
export class Department {
  @Is(an.objectId())
  _id?: any;

  members: StarshipMember[] = [];

  @Is(a.string().required())
  name: string;
}
