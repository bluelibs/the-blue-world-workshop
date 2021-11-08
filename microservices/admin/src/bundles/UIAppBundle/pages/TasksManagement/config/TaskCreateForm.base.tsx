/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";

import {
  Task,
  StarshipMembersCollection,
  TasksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TaskCreateForm extends XForm {
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

  onSubmit(document: Partial<Task>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.tasks.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.TASKS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.TASKS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.TASKS_EDIT, {
            params: {
              id: _id,
            },
          });
        }
      })
      .catch((err) => {
        Ant.notification.warn({
          message: t("generics.error"),
          description: t("generics.error_message"),
        });
      });
  }
}
