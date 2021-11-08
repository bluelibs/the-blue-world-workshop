/** @overridable */
import { IRoute } from "@bluelibs/x-ui";
import * as React from "react";
import { StarshipMembersList } from "../components/List/StarshipMembersList";
import { StarshipMembersCreate } from "../components/Create/StarshipMembersCreate";
import { StarshipMembersEdit } from "../components/Edit/StarshipMembersEdit";
import { StarshipMembersView } from "../components/View/StarshipMembersView";

import { SettingFilled } from "@ant-design/icons";

export const STARSHIP_MEMBERS_LIST: IRoute = {
  path: "/admin/starship-members",
  component: StarshipMembersList,
  menu: {
    key: "STARSHIP_MEMBERS_LIST",
    label: "management.starship_members.menu.title",
    icon: SettingFilled,
  },
};

export const STARSHIP_MEMBERS_CREATE: IRoute = {
  path: "/admin/starship-members/create",
  component: StarshipMembersCreate,
};

export const STARSHIP_MEMBERS_EDIT: IRoute<{ id: string }> = {
  path: "/admin/starship-members/:id/edit",
  component: StarshipMembersEdit,
};

export const STARSHIP_MEMBERS_VIEW: IRoute<{ id: string }> = {
  path: "/admin/starship-members/:id/view",
  component: StarshipMembersView,
};
