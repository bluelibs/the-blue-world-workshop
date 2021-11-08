import { Link } from "react-router-dom";
import * as Ant from "antd";
import { Routes } from "@bundles/UIAppBundle";
import {
  useUIComponents,
  useRouter,
  useDataOne,
  use,
  XRouter,
  useTranslate,
  useData,
  useLiveData,
} from "@bluelibs/x-ui";
import { ObjectId } from "@bluelibs/ejson";
import {
  StarshipMember,
  StarshipMembersCollection,
} from "@bundles/UIAppBundle/collections";
import { StarshipMemberViewer } from "../../config/StarshipMemberViewer";
import { features } from "../../config/features";
import { TasksCollection } from "../../../../collections/Tasks/Tasks.collection";
import { Task } from "@root/api.types";
import { useState, useEffect } from "react";

export function StarshipMembersView(props: { id: string }) {
  const UIComponents = useUIComponents();
  const router = useRouter();
  const t = useTranslate();
  const collection = use(StarshipMembersCollection);

  // If you want to benefit of live data features use useLiveData()
  const {
    data: document,
    isLoading,
    error,
  } = useDataOne(
    StarshipMembersCollection,
    new ObjectId(props.id),
    StarshipMemberViewer.getRequestBody()
  );

  let content;
  if (isLoading) {
    content = (
      <Ant.Space align="center">
        <Ant.Spin size="large" />
      </Ant.Space>
    );
  } else {
    if (error || document === null) {
      content = (
        <Ant.Alert
          message={error || t("generics.error_message")}
          type="error"
        />
      );
    } else {
      content = <StarshipMembersViewComponent document={document} />;
    }
  }

  return (
    <UIComponents.AdminLayout>
      <Ant.PageHeader
        title={t("management.starship_members.view.header")}
        onBack={() => window.history.back()}
        extra={getHeaderActions(collection, router, props.id)}
      />
      <Ant.Card>{content}</Ant.Card>
      <StarshipMembersTasks assigneeId={props.id} />
    </UIComponents.AdminLayout>
  );
}

type StarshipMembersTasksProps = {
  assigneeId: string;
};

export function StarshipMembersTasks(props: StarshipMembersTasksProps) {
  const {
    data: tasks,
    error,
    isLoading,
  } = useLiveData(
    TasksCollection,
    {
      filters: {
        assigneeId: new ObjectId(props.assigneeId),
      },
    },
    {
      _id: 1,
      title: 1,
      status: 1,
    }
  );

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks &&
          tasks.map((task) => {
            return (
              <li>
                {task.title} {task.status}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export function StarshipMembersViewComponent(props: {
  document: Partial<StarshipMember>;
}) {
  const document = props.document;

  const viewer = use(StarshipMemberViewer, { transient: true });
  viewer.setDocument(document);
  viewer.build();

  return (
    <Ant.Descriptions>
      {viewer.rest().map((item) => {
        return (
          <Ant.Descriptions.Item label={item.label} key={item.id}>
            {viewer.render(item)}
          </Ant.Descriptions.Item>
        );
      })}
    </Ant.Descriptions>
  );
}

export function getHeaderActions(
  collection: StarshipMembersCollection,
  router: XRouter,
  id: string
) {
  const actions = [];
  const t = useTranslate();

  if (features.edit) {
    actions.push(
      <Link
        key="edit"
        to={router.path(Routes.STARSHIP_MEMBERS_EDIT, {
          params: { id },
        })}
      >
        <Ant.Button>{t("generics.edit")}</Ant.Button>
      </Link>
    );
  }
  if (features.delete) {
    actions.push(
      <Ant.Popconfirm
        key="delete"
        title="Are you sure you want to delete this StarshipMember?"
        onConfirm={() => {
          collection.deleteOne(id).then(() => {
            router.go(Routes.STARSHIP_MEMBERS_LIST);
            Ant.notification.success({
              message: "Success",
              description: "You have deleted the StarshipMember",
            });
          });
        }}
      >
        <Ant.Button danger>{t("generics.delete")}</Ant.Button>
      </Ant.Popconfirm>
    );
  }

  const viewRoutePath = router.path(Routes.STARSHIP_MEMBERS_VIEW, {
    params: { id },
  });

  return actions;
}
