/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Task,
  StarshipMembersCollection,
  TasksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TaskListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "title",
        label: t("management.tasks.fields.title"),
        name: ["title"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "status",
        label: t("management.tasks.fields.status"),
        name: ["status"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Select
              mode="multiple"
              placeholder={t("management.tasks.fields.status")}
            >
              <Ant.Select.Option value="OPEN" key="OPEN">
                Open
              </Ant.Select.Option>
              <Ant.Select.Option value="IN_PROGRESS" key="IN_PROGRESS">
                In Progress
              </Ant.Select.Option>
              <Ant.Select.Option value="DONE" key="DONE">
                Done
              </Ant.Select.Option>
            </Ant.Select>
          </Ant.Form.Item>
        ),
      },

      {
        id: "assigneeId",
        label: t("management.tasks.fields.assignee"),
        name: ["assigneeId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={StarshipMembersCollection}
              field="fullName"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
