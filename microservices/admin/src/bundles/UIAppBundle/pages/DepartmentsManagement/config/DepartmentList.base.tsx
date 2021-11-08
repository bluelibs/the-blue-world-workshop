/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  Department,
  StarshipMembersCollection,
  DepartmentsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DepartmentList extends XList<Department> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "name",
        title: t("management.departments.fields.name"),
        key: "management.departments.fields.name",
        dataIndex: ["name"],
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
        id: "members",
        title: t("management.departments.fields.members"),
        key: "management.departments.fields.members",
        dataIndex: ["members"],
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
      members: "members.fullName",
    };
  }

  static getRequestBody(): QueryBodyType<Department> {
    return {
      _id: 1,
      name: 1,
      members: {
        _id: 1,
        fullName: 1,
      },
    };
  }
}
