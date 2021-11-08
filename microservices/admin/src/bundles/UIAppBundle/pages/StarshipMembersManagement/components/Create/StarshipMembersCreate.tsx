import { Routes } from "@bundles/UIAppBundle";
import { useUIComponents, useRouter, use, useTranslate } from "@bluelibs/x-ui";
import * as Ant from "antd";
import { StarshipMemberCreateForm } from "../../config/StarshipMemberCreateForm";
import {
  StarshipMember,
  StarshipMembersCollection,
} from "@bundles/UIAppBundle/collections";

const formLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const formTailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

export function StarshipMembersCreate() {
  const UIComponents = useUIComponents();
  const t = useTranslate();
  const form = use(StarshipMemberCreateForm, { transient: true });
  form.build();

  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.starship_members.create.header")}
        onBack={() => window.history.back()}
      />
      <Ant.Card>
        <Ant.Form
          {...formLayout}
          requiredMark="optional"
          onFinish={(document) => form.onSubmit(document)}
        >
          <Ant.Row>
            <Ant.Col span={12}>{form.render("firstName")}</Ant.Col>
            <Ant.Col span={12}>{form.render("lastName")}</Ant.Col>
          </Ant.Row>
          {form.render()}
          <Ant.Form.Item {...formTailLayout}>
            <Ant.Button type="primary" htmlType="submit">
              {t("generics.submit")}
            </Ant.Button>
          </Ant.Form.Item>
        </Ant.Form>
      </Ant.Card>
    </UIComponents.AdminLayout>
  );
}
