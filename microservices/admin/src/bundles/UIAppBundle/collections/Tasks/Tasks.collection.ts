import {
  Collection,
  CollectionLinkConfig,
  CollectionTransformMap,
} from "@bluelibs/x-ui";
import { Task } from "@root/api.types";
import { StarshipMembersCollection } from "@bundles/UIAppBundle/collections";
import { ObjectId } from "@bluelibs/ejson";

export type { Task };

export class TasksCollection extends Collection<Task> {
  getName() {
    return "Tasks";
  }

  getInputs() {
    return {
      insert: "TaskInsertInput!",
      update: "TaskUpdateInput!",
    };
  }

  // Return here the relations with other configs
  getLinks(): CollectionLinkConfig<Task>[] {
    return [
      {
        collection: () => StarshipMembersCollection,
        name: "assignee",
        field: "assigneeId",
      },
    ];
  }

  // Return here how you want to transform certain fields
  getTransformMap(): CollectionTransformMap<Task> {
    return {};
  }
}
