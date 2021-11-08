/** @overridable */
import { StarshipMember } from "@root/api.types";
import { Service } from "@bluelibs/core";
import { QueryBodyType, XRouter, IComponents } from "@bluelibs/x-ui";
import { XViewElementType, XViewer } from "@bluelibs/x-ui-admin";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";

@Service({ transient: true })
export class StarshipMemberViewer extends XViewer {
  build() {
    const { UIComponents, router } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "_id",
        label: t("management.starship_members.fields._id"),
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
        id: "firstName",
        label: t("management.starship_members.fields.firstName"),
        dataIndex: ["firstName"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "lastName",
        label: t("management.starship_members.fields.lastName"),
        dataIndex: ["lastName"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "fullName",
        label: t("management.starship_members.fields.fullName"),
        dataIndex: ["fullName"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "isRecruit",
        label: t("management.starship_members.fields.isRecruit"),
        dataIndex: ["isRecruit"],
        render: (value) => {
          const props = {
            type: "boolean",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "yearOfBirth",
        label: t("management.starship_members.fields.yearOfBirth"),
        dataIndex: ["yearOfBirth"],
        render: (value) => {
          const props = {
            type: "number",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "emergencyContact.name",
        label: t("management.starship_members.fields.emergencyContact.name"),
        dataIndex: ["emergencyContact", "name"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "emergencyContact.relation",
        label: t(
          "management.starship_members.fields.emergencyContact.relation"
        ),
        dataIndex: ["emergencyContact", "relation"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "emergencyContact.phoneNumber",
        label: t(
          "management.starship_members.fields.emergencyContact.phoneNumber"
        ),
        dataIndex: ["emergencyContact", "phoneNumber"],
        render: (value) => {
          const props = {
            type: "string",
            value,
          };
          return <UIComponents.AdminListItemRenderer {...props} />;
        },
      },
      {
        id: "children",
        label: t("management.starship_members.fields.children"),
        dataIndex: ["children"],
        render: (value) => {
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
        label: t("management.starship_members.fields.department"),
        dataIndex: ["department"],
        render: (value) => {
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
