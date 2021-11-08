/** @overridable */
import { XRouter, use, IComponents } from "@bluelibs/x-ui";
import { SmileOutlined } from "@ant-design/icons";
import * as Ant from "antd";
import { XFormElementType, XForm } from "@bluelibs/x-ui-admin";
import { Routes } from "@bundles/UIAppBundle";
import { Service, Inject } from "@bluelibs/core";
import { features } from "./features";

import {
  StarshipMember,
  DepartmentsCollection,
  StarshipMembersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StarshipMemberCreateForm extends XForm {
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

  onSubmit(document: Partial<StarshipMember>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .insertOne(document)
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.starship_members.create_confirmation"),
          icon: <SmileOutlined />,
        });

        if (features.view) {
          return this.router.go(Routes.STARSHIP_MEMBERS_VIEW, {
            params: {
              id: _id,
            },
          });
        }
        if (features.list) {
          return this.router.go(Routes.STARSHIP_MEMBERS_LIST);
        }
        if (features.edit) {
          return this.router.go(Routes.STARSHIP_MEMBERS_EDIT, {
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
