import { IRoute } from "@bluelibs/x-ui";
import "./i18n";

import {
  TASKS_LIST as BASE_TASKS_LIST,
  TASKS_CREATE as BASE_TASKS_CREATE,
  TASKS_EDIT as BASE_TASKS_EDIT,
  TASKS_VIEW as BASE_TASKS_VIEW,
} from "./config/routes";

export const TASKS_LIST: IRoute = {
  ...BASE_TASKS_LIST,
};

export const TASKS_CREATE: IRoute = {
  ...BASE_TASKS_CREATE,
};

export const TASKS_EDIT: IRoute = {
  ...BASE_TASKS_EDIT,
};

export const TASKS_VIEW: IRoute = {
  ...BASE_TASKS_VIEW,
};
