/** @overridable */
import { notification } from "antd";
import { XFormElementType, XList, XForm } from "@bluelibs/x-ui-admin";
import { Service } from "@bluelibs/core";
import { IComponents, XRouter, use } from "@bluelibs/x-ui";
import * as Ant from "antd";
import {
  StarshipMember,
  DepartmentsCollection,
  StarshipMembersCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class StarshipMemberListFiltersForm extends XForm {
  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "firstName",
        label: t("management.starship_members.fields.firstName"),
        name: ["firstName"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "lastName",
        label: t("management.starship_members.fields.lastName"),
        name: ["lastName"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Input />
          </Ant.Form.Item>
        ),
      },

      {
        id: "isRecruit",
        label: t("management.starship_members.fields.isRecruit"),
        name: ["isRecruit"],
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
        render: (props) => (
          <Ant.Form.Item {...props}>
            <Ant.Slider range step={10} min={0} max={100000} />
          </Ant.Form.Item>
        ),
      },

      {
        id: "emergencyContact",
        label: t("management.starship_members.fields.emergencyContact"),
        name: ["emergencyContact"],
        columns: true,
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
        columns: true,
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
      },

      {
        id: "departmentId",
        label: t("management.starship_members.fields.department"),
        name: ["departmentId"],
        render: (props) => (
          <Ant.Form.Item {...props}>
            <UIComponents.RemoteSelect
              collectionClass={DepartmentsCollection}
              field="name"
              placeholder="Please select an option"
              mode="multiple"
            />
          </Ant.Form.Item>
        ),
      },
    ]);
  }
}
