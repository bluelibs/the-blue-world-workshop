/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { DepartmentsList } from "../components/List/DepartmentsList";
import { DepartmentsCreate } from "../components/Create/DepartmentsCreate";
import { DepartmentsEdit } from "../components/Edit/DepartmentsEdit";
import { DepartmentsView } from "../components/View/DepartmentsView";

import { SettingFilled } from "@ant-design/icons";

export const DEPARTMENTS_LIST: IRoute = {
  path: "/admin/departments",
  component: DepartmentsList,
  menu: {
    key: "DEPARTMENTS_LIST",
    label: "management.departments.menu.title",
    icon: SettingFilled,
  },
};

export const DEPARTMENTS_CREATE: IRoute = {
  path: "/admin/departments/create",
  component: DepartmentsCreate,
};

export const DEPARTMENTS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/departments/:id/edit",
  component: DepartmentsEdit,
};

export const DEPARTMENTS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/departments/:id/view",
  component: DepartmentsView,
};
