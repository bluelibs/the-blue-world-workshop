/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";

@Schema()
export class StarshipMemberChildInput {
  @Is(a.string().required())
  name: string;

  @Is(a.string().required())
  yearOfBirth: string;
}
@Schema()
export class StarshipMemberEmergencyContactInput {
  @Is(a.string().required())
  name: string;

  @Is(a.string().required())
  relation: string;

  @Is(a.string().required())
  phoneNumber: string;
}

@Schema()
export class StarshipMemberInsertInput {
  @Is(() => an.array().of(Schema.from(StarshipMemberChildInput)))
  children: StarshipMemberChildInput[] = [];

  @Is(an.objectId().required())
  departmentId: any;

  @Is(() => Schema.from(StarshipMemberEmergencyContactInput))
  emergencyContact: StarshipMemberEmergencyContactInput;

  @Is(a.string().required())
  firstName: string;

  @Is(a.boolean().required())
  isRecruit: boolean;

  @Is(a.string().required())
  lastName: string;

  @Is(a.number().required())
  yearOfBirth: number;
}
