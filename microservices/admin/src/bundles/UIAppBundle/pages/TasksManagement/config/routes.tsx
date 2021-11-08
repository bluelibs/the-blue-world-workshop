/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { TasksList } from "../components/List/TasksList";
import { TasksCreate } from "../components/Create/TasksCreate";
import { TasksEdit } from "../components/Edit/TasksEdit";
import { TasksView } from "../components/View/TasksView";

import { SettingFilled } from "@ant-design/icons";

export const TASKS_LIST: IRoute = {
  path: "/admin/tasks",
  component: TasksList,
  menu: {
    key: "TASKS_LIST",
    label: "management.tasks.menu.title",
    icon: SettingFilled,
  },
};

export const TASKS_CREATE: IRoute = {
  path: "/admin/tasks/create",
  component: TasksCreate,
};

export const TASKS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/tasks/:id/edit",
  component: TasksEdit,
};

export const TASKS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/tasks/:id/view",
  component: TasksView,
};
