/** @overridable */
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use, QueryBodyType } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  StarshipMember,
  DepartmentsCollection,
  StarshipMembersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StarshipMemberList extends XList<StarshipMember> {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "firstName",
        title: t("management.starship_members.fields.firstName"),
        key: "management.starship_members.fields.firstName",
        dataIndex: ["firstName"],
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
        id: "lastName",
        title: t("management.starship_members.fields.lastName"),
        key: "management.starship_members.fields.lastName",
        dataIndex: ["lastName"],
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
        id: "fullName",
        title: t("management.starship_members.fields.fullName"),
        key: "management.starship_members.fields.fullName",
        dataIndex: ["fullName"],
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
        id: "isRecruit",
        title: t("management.starship_members.fields.isRecruit"),
        key: "management.starship_members.fields.isRecruit",
        dataIndex: ["isRecruit"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "boolean",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "yearOfBirth",
        title: t("management.starship_members.fields.yearOfBirth"),
        key: "management.starship_members.fields.yearOfBirth",
        dataIndex: ["yearOfBirth"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "emergencyContact.name",
        title: t("management.starship_members.fields.emergencyContact.name"),
        key: "management.starship_members.fields.emergencyContact.name",
        dataIndex: ["emergencyContact", "name"],
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
        id: "emergencyContact.relation",
        title: t(
          "management.starship_members.fields.emergencyContact.relation"
        ),
        key: "management.starship_members.fields.emergencyContact.relation",
        dataIndex: ["emergencyContact", "relation"],
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
        id: "emergencyContact.phoneNumber",
        title: t(
          "management.starship_members.fields.emergencyContact.phoneNumber"
        ),
        key: "management.starship_members.fields.emergencyContact.phoneNumber",
        dataIndex: ["emergencyContact", "phoneNumber"],
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
        id: "children",
        title: t("management.starship_members.fields.children"),
        key: "management.starship_members.fields.children",
        dataIndex: ["children"],
        sorter: true,
        render: (value, model) => {
          return (
            <>
              {value &&
                value.map((value: any, idx: number) => {
                  const props = {
                    type: "object",
                    value,
                  };
                  return (
                    <UIComponents.AdminListItemRenderer {...props} key={idx} />
                  );
                })}
            </>
          );
        },
      },
      {
        id: "department",
        title: t("management.starship_members.fields.department"),
        key: "management.starship_members.fields.department",
        dataIndex: ["department"],
        sorter: true,
        render: (value, model) => {
          const props = {
            type: "relation",
            value,
            relation: {
              path: router.path(Routes.DEPARTMENTS_VIEW, {
                params: {
                  id: value?._id,
                },
              }),
              dataIndex: "name",
            },
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
    ]);
  }

  static getSortMap() {
    return {
      department: "department.name",
    };
  }

  static getRequestBody(): QueryBodyType<StarshipMember> {
    return {
      _id: 1,
      firstName: 1,
      lastName: 1,
      fullName: 1,
      isRecruit: 1,
      yearOfBirth: 1,
      emergencyContact: {
        name: 1,
        relation: 1,
        phoneNumber: 1,
      },
      children: {
        name: 1,
        yearOfBirth: 1,
      },
      department: {
        _id: 1,
        name: 1,
      },
      departmentId: 1,
    };
  }
}
