import { DepartmentsCollection } from "../Departments/Departments.collection";
import { IBundleLinkCollectionOption } from "@bluelibs/mongo-bundle";

// Export link names as constants with type of: IBundleLinkCollectionOption, sample:
// export const myCustomLink: IBundleLinkCollectionOption = { ... }

export const department: IBundleLinkCollectionOption = {
  collection: () => DepartmentsCollection,
  field: "departmentId",
};
