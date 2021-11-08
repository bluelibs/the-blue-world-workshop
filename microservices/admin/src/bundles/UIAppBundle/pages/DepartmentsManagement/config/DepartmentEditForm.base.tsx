/** @overridable */
import { XRouter, use, IComponents, QueryBodyType } from "@bluelibs/x-ui";
import { XForm } from "@bluelibs/x-ui-admin";
import { Service, Inject } from "@bluelibs/core";
import { SmileOutlined } from "@ant-design/icons";
import { Routes } from "@bundles/UIAppBundle";
import * as Ant from "antd";
import {
  Department,
  StarshipMembersCollection,
  DepartmentsCollection,
} from "@bundles/UIAppBundle/collections";

@Service({ transient: true })
export class DepartmentEditForm extends XForm {
  @Inject(() => DepartmentsCollection)
  collection: DepartmentsCollection;

  build() {
    const { UIComponents } = this;
    const { t } = this.i18n;

    this.add([
      {
        id: "name",
        label: t("management.departments.fields.name"),
        name: ["name"],
        required: true,
        component: Ant.Input,
      },
    ]);
  }

  static getRequestBody(): QueryBodyType<Department> {
    return {
      _id: 1,
      name: 1,
    };
  }

  onSubmit(_id, values: Partial<Department>): Promise<void> {
    const { t } = this.i18n;

    return this.collection
      .updateOne(_id, { $set: values })
      .then(({ _id }) => {
        Ant.notification.success({
          message: t("generics.success"),
          description: t("management.departments.edit_confirmation"),
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
