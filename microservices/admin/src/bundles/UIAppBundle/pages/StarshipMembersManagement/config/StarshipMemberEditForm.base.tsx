/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  StarshipMember,
  DepartmentsCollection,
  StarshipMembersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StarshipMemberEditForm extends XForm {
  @Inject(() => StarshipMembersCollection)
  collection: StarshipMembersCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "firstName",
        label: t("management.starship_members.fields.firstName"),
        name: ["firstName"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "lastName",
        label: t("management.starship_members.fields.lastName"),
        name: ["lastName"],
        required: true,
        component: Ant.Input,
      },

      {
        id: "isRecruit",
        label: t("management.starship_members.fields.isRecruit"),
        name: ["isRecruit"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Radio.Group>
              <Ant.Radio value={false} key={0}>
                No
              </Ant.Radio>
              <Ant.Radio value={true} key={1}>
                Yes
              </Ant.Radio>
            </Ant.Radio.Group>
          </Ant.Form.Item>
        ),
      },

      {
        id: "yearOfBirth",
        label: t("management.starship_members.fields.yearOfBirth"),
        name: ["yearOfBirth"],
        required: true,
        component: Ant.InputNumber,
      },

      {
        id: "emergencyContact",
        label: t("management.starship_members.fields.emergencyContact"),
        name: ["emergencyContact"],
        required: true,
        nest: [
          {
            id: "name",
            label: t(
              "management.starship_members.fields.emergencyContact.name"
            ),
            name: ["emergencyContact", "name"],
            required: true,
            component: Ant.Input,
          },

          {
            id: "relation",
            label: t(
              "management.starship_members.fields.emergencyContact.relation"
            ),
            name: ["emergencyContact", "relation"],
            required: true,
            component: Ant.Input,
          },

          {
            id: "phoneNumber",
            label: t(
              "management.starship_members.fields.emergencyContact.phoneNumber"
            ),
            name: ["emergencyContact", "phoneNumber"],
            required: true,
            component: Ant.Input,
          },
        ],
      },

      {
        id: "children",
        label: t("management.starship_members.fields.children"),
        name: ["children"],
        required: true,
        isList: true,
        nest: [
          {
            id: "name",
            label: t("management.starship_members.fields.children.name"),
            name: ["children", "name"],
            required: true,
            initialValue: [],
            component: Ant.Input,
          },

          {
            id: "yearOfBirth",
            label: t("management.starship_members.fields.children.yearOfBirth"),
            name: ["children", "yearOfBirth"],
            required: true,
            initialValue: [],
            component: Ant.Input,
          },
        ],
        initialValue: [],
      },

      {
        id: "departmentId",
        label: t("management.starship_members.fields.department"),
        name: ["departmentId"],
        required: true,
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={DepartmentsCollection}
              field="name"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<StarshipMember> {
    return {
      _id: 1,
      firstName: 1,
      lastName: 1,
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

  onSubmit(_id, values: Partial<StarshipMember>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.starship_members.edit_confirmation"),
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
