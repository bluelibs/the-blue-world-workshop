/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Task,
  StarshipMembersCollection,
  TasksCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class TaskList extends XList<Task> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "title",
        title: t("management.tasks.fields.title"),
        key: "management.tasks.fields.title",
        dataIndex: ["title"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "status",
        title: t("management.tasks.fields.status"),
        key: "management.tasks.fields.status",
        dataIndex: ["status"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "enum",
            value,
            labelify: true,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "assignee",
        title: t("management.tasks.fields.assignee"),
        key: "management.tasks.fields.assignee",
        dataIndex: ["assignee"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.STARSHIP_MEMBERS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "fullName",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {
      assignee: "assignee.fullName",
    };
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
}
