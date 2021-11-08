/** overridable */
import { Schema, Is, a, an } from "@bluelibs/validator-bundle";
import { Department } from "../";

@Schema()
export class StarshipMemberChild {
  @Is(a.string().required())
  name: string;

  @Is(a.string().required())
  yearOfBirth: string;
}
@Schema()
export class StarshipMemberEmergencyContact {
  @Is(a.string().required())
  name: string;

  @Is(a.string().required())
  relation: string;

  @Is(a.string().required())
  phoneNumber: string;
}

@Schema()
export class StarshipMember {
  @Is(an.objectId())
  _id?: any;

  @Is(() => an.array().of(Schema.from(StarshipMemberChild)))
  children: StarshipMemberChild[] = [];

  department: Department;

  @Is(an.objectId().required())
  departmentId: any;

  @Is(() => Schema.from(StarshipMemberEmergencyContact))
  emergencyContact: StarshipMemberEmergencyContact;

  @Is(a.string().required())
  firstName: string;

  fullName: string;

  @Is(a.boolean().required())
  isRecruit: boolean;

  @Is(a.string().required())
  lastName: string;

  @Is(a.number().required())
  yearOfBirth: number;
}
