/** @overridable */
import { Task } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class TaskViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.tasks.fields._id"),
        dataIndex: ["_id"],
        render: (value) => {
          const props = {
            type: "objectId",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "title",
        label: t("management.tasks.fields.title"),
        dataIndex: ["title"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "status",
        label: t("management.tasks.fields.status"),
        dataIndex: ["status"],
        render: (value) => {
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
        label: t("management.tasks.fields.assignee"),
        dataIndex: ["assignee"],
        render: (value) => {
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
