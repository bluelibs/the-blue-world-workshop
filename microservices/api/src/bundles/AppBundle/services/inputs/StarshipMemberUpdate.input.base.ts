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
export class StarshipMemberUpdateInput {
  @Is(() => an.array().of(Schema.from(StarshipMemberChildInput)))
  children?: StarshipMemberChildInput[] = [];

  @Is(an.objectId().nullable())
  departmentId?: any;

  @Is(() => Schema.from(StarshipMemberEmergencyContactInput))
  emergencyContact?: StarshipMemberEmergencyContactInput;

  @Is(a.string().nullable())
  firstName?: string;

  @Is(a.boolean().nullable())
  isRecruit?: boolean;

  @Is(a.string().nullable())
  lastName?: string;

  @Is(a.number().nullable())
  yearOfBirth?: number;
}
