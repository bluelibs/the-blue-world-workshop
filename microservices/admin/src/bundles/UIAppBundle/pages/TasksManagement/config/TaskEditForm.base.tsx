/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Task,
  StarshipMembersCollection,
  TasksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TaskEditForm extends XForm {
  @Inject(() => TasksCollection)
  collection: TasksCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "title",
        label: t("management.tasks.fields.title"),
        name: ["title"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "status",
        label: t("management.tasks.fields.status"),
        name: ["status"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Select placeholder={t("management.tasks.fields.status")}>
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
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={StarshipMembersCollection}
              field="fullName"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Task> {
    return {
      _id: 1,
      title: 1,
      status: 1,
      assignee: {
        _id: 1,
        fullName: 1,
      },
      assigneeId: 1,
    };
  }

  onSubmit(_id, values: Partial<Task>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.tasks.edit_confirmation"),
          icon: <SmileOutlined />,
        });
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
