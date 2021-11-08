export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date Custom scalar type */
  Date: any;
  /** The `EJSON` scalar type represents EJSON values as specified by [Meteor EJSON](https://docs.meteor.com/api/ejson.html). */
  EJSON: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
  /** ObjectId custom scalar type */
  ObjectId: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AppFile = {
  __typename?: 'AppFile';
  _id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  downloadUrl: Scalars['String'];
  size: Scalars['Int'];
  mimeType: Scalars['String'];
  thumbs: Array<Maybe<AppFileThumb>>;
  resourceType?: Maybe<Scalars['String']>;
  resourceId?: Maybe<Scalars['String']>;
  uploadedById?: Maybe<Scalars['String']>;
  uploadedBy?: Maybe<User>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
};


export type AppFilethumbsArgs = {
  ids?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type AppFileGroup = {
  __typename?: 'AppFileGroup';
  _id: Scalars['ObjectId'];
  name?: Maybe<Scalars['String']>;
  files: Array<Maybe<AppFile>>;
  filesIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type AppFileThumb = {
  __typename?: 'AppFileThumb';
  id: Scalars['String'];
  path: Scalars['String'];
  downloadUrl: Scalars['String'];
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};


export type Department = {
  __typename?: 'Department';
  _id?: Maybe<Scalars['ObjectId']>;
  members: Array<Maybe<StarshipMember>>;
  name: Scalars['String'];
};

export type DepartmentInsertInput = {
  name: Scalars['String'];
};

export type DepartmentUpdateInput = {
  name?: Maybe<Scalars['String']>;
};

export type DocumentUpdateInput = {
  _id: Scalars['ObjectId'];
  modifier: Scalars['EJSON'];
};


export type ForgotPasswordInput = {
  email: Scalars['String'];
};



export type LoginInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  DepartmentsInsertOne?: Maybe<Department>;
  DepartmentsUpdateOne: Department;
  DepartmentsDeleteOne?: Maybe<Scalars['Boolean']>;
  StarshipMembersInsertOne?: Maybe<StarshipMember>;
  StarshipMembersUpdateOne: StarshipMember;
  StarshipMembersDeleteOne?: Maybe<Scalars['Boolean']>;
  TasksInsertOne?: Maybe<Task>;
  TasksUpdateOne: Task;
  TasksDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileGroupsInsertOne?: Maybe<AppFileGroup>;
  AppFilesDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileGroupsDeleteOne?: Maybe<Scalars['Boolean']>;
  AppFileUploadToGroup?: Maybe<AppFile>;
  AppFileUpload?: Maybe<AppFile>;
  UsersInsertOne?: Maybe<User>;
  UsersUpdateOne: User;
  UsersDeleteOne?: Maybe<Scalars['Boolean']>;
  register: RegistrationResponse;
  changePassword?: Maybe<Scalars['Boolean']>;
  login: LoginResponse;
  logout?: Maybe<Scalars['Boolean']>;
  resetPassword: ResetPasswordResponse;
  forgotPassword?: Maybe<Scalars['Boolean']>;
  verifyEmail: VerifyEmailResponse;
};


export type MutationDepartmentsInsertOneArgs = {
  document: DepartmentInsertInput;
};


export type MutationDepartmentsUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: DepartmentUpdateInput;
};


export type MutationDepartmentsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationStarshipMembersInsertOneArgs = {
  document: StarshipMemberInsertInput;
};


export type MutationStarshipMembersUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: StarshipMemberUpdateInput;
};


export type MutationStarshipMembersDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationTasksInsertOneArgs = {
  document: TaskInsertInput;
};


export type MutationTasksUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: TaskUpdateInput;
};


export type MutationTasksDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileGroupsInsertOneArgs = {
  document: Scalars['EJSON'];
};


export type MutationAppFilesDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileGroupsDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationAppFileUploadToGroupArgs = {
  groupId: Scalars['ObjectId'];
  upload: Scalars['Upload'];
  context?: Maybe<Scalars['String']>;
};


export type MutationAppFileUploadArgs = {
  upload: Scalars['Upload'];
  context?: Maybe<Scalars['String']>;
};


export type MutationUsersInsertOneArgs = {
  document: UserInsertInput;
};


export type MutationUsersUpdateOneArgs = {
  _id: Scalars['ObjectId'];
  document: UserUpdateInput;
};


export type MutationUsersDeleteOneArgs = {
  _id: Scalars['ObjectId'];
};


export type MutationregisterArgs = {
  input: RegistrationInput;
};


export type MutationchangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationloginArgs = {
  input: LoginInput;
};


export type MutationresetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationforgotPasswordArgs = {
  input: ForgotPasswordInput;
};


export type MutationverifyEmailArgs = {
  input: VerifyEmailInput;
};


export type Query = {
  __typename?: 'Query';
  DepartmentsFindOne?: Maybe<Department>;
  DepartmentsFindOneByID?: Maybe<Department>;
  DepartmentsFind: Array<Maybe<Department>>;
  DepartmentsCount: Scalars['Int'];
  StarshipMembersFindOne?: Maybe<StarshipMember>;
  StarshipMembersFindOneByID?: Maybe<StarshipMember>;
  StarshipMembersFind: Array<Maybe<StarshipMember>>;
  StarshipMembersCount: Scalars['Int'];
  TasksFindOne?: Maybe<Task>;
  TasksFindOneByID?: Maybe<Task>;
  TasksFind: Array<Maybe<Task>>;
  TasksCount: Scalars['Int'];
  AppFilesFindOne?: Maybe<AppFile>;
  AppFilesFind?: Maybe<Array<Maybe<AppFile>>>;
  AppFileGroupsFindOne?: Maybe<AppFileGroup>;
  AppFileGroupsFind?: Maybe<Array<Maybe<AppFileGroup>>>;
  UsersFindOne?: Maybe<User>;
  UsersFindOneByID?: Maybe<User>;
  UsersFind: Array<Maybe<User>>;
  UsersCount: Scalars['Int'];
  me: User;
  framework?: Maybe<Scalars['String']>;
};


export type QueryDepartmentsFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryDepartmentsFindOneByIDArgs = {
  _id: Scalars['ObjectId'];
};


export type QueryDepartmentsFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryDepartmentsCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryStarshipMembersFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryStarshipMembersFindOneByIDArgs = {
  _id: Scalars['ObjectId'];
};


export type QueryStarshipMembersFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryStarshipMembersCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryTasksFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryTasksFindOneByIDArgs = {
  _id: Scalars['ObjectId'];
};


export type QueryTasksFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryTasksCountArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryAppFilesFindOneArgs = {
  query: QueryInput;
};


export type QueryAppFilesFindArgs = {
  query: QueryInput;
};


export type QueryAppFileGroupsFindOneArgs = {
  query: QueryInput;
};


export type QueryAppFileGroupsFindArgs = {
  query: QueryInput;
};


export type QueryUsersFindOneArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryUsersFindOneByIDArgs = {
  _id: Scalars['ObjectId'];
};


export type QueryUsersFindArgs = {
  query?: Maybe<QueryInput>;
};


export type QueryUsersCountArgs = {
  query?: Maybe<QueryInput>;
};

export type QueryInput = {
  filters?: Maybe<Scalars['EJSON']>;
  options?: Maybe<QueryOptionsInput>;
};

export type QueryOptionsInput = {
  sort?: Maybe<Scalars['JSON']>;
  limit?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  /** This is the Nova body that will get merged deeply with your request body. Useful for passing arguments. */
  sideBody?: Maybe<Scalars['EJSON']>;
};

export type RegistrationInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RegistrationResponse = {
  __typename?: 'RegistrationResponse';
  /** Please not that if the user is required to validate his email for logging in, token will be null */
  token?: Maybe<Scalars['String']>;
};

export type ResetPasswordInput = {
  username: Scalars['String'];
  token: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ResetPasswordResponse = {
  __typename?: 'ResetPasswordResponse';
  token: Scalars['String'];
};

export type StarshipMember = {
  __typename?: 'StarshipMember';
  _id?: Maybe<Scalars['ObjectId']>;
  children: Array<Maybe<StarshipMemberChild>>;
  department: Department;
  departmentId: Scalars['ObjectId'];
  emergencyContact: StarshipMemberEmergencyContact;
  firstName: Scalars['String'];
  fullName: Scalars['String'];
  isRecruit: Scalars['Boolean'];
  lastName: Scalars['String'];
  yearOfBirth: Scalars['Int'];
};

export type StarshipMemberChild = {
  __typename?: 'StarshipMemberChild';
  name: Scalars['String'];
  yearOfBirth: Scalars['String'];
};

export type StarshipMemberChildInput = {
  name: Scalars['String'];
  yearOfBirth: Scalars['String'];
};

export type StarshipMemberEmergencyContact = {
  __typename?: 'StarshipMemberEmergencyContact';
  name: Scalars['String'];
  relation: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type StarshipMemberEmergencyContactInput = {
  name: Scalars['String'];
  relation: Scalars['String'];
  phoneNumber: Scalars['String'];
};

export type StarshipMemberInsertInput = {
  children: Array<Maybe<StarshipMemberChildInput>>;
  departmentId: Scalars['ObjectId'];
  emergencyContact: StarshipMemberEmergencyContactInput;
  firstName: Scalars['String'];
  isRecruit: Scalars['Boolean'];
  lastName: Scalars['String'];
  yearOfBirth: Scalars['Int'];
};

export type StarshipMemberUpdateInput = {
  children?: Maybe<Array<Maybe<StarshipMemberChildInput>>>;
  departmentId?: Maybe<Scalars['ObjectId']>;
  emergencyContact?: Maybe<StarshipMemberEmergencyContactInput>;
  firstName?: Maybe<Scalars['String']>;
  isRecruit?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  yearOfBirth?: Maybe<Scalars['Int']>;
};

export type Subscription = {
  __typename?: 'Subscription';
  DepartmentsSubscription?: Maybe<SubscriptionEvent>;
  DepartmentsSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  StarshipMembersSubscription?: Maybe<SubscriptionEvent>;
  StarshipMembersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  TasksSubscription?: Maybe<SubscriptionEvent>;
  TasksSubscriptionCount?: Maybe<SubscriptionCountEvent>;
  UsersSubscription?: Maybe<SubscriptionEvent>;
  UsersSubscriptionCount?: Maybe<SubscriptionCountEvent>;
};


export type SubscriptionDepartmentsSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionDepartmentsSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionStarshipMembersSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionStarshipMembersSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionTasksSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionTasksSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionUsersSubscriptionArgs = {
  body?: Maybe<Scalars['EJSON']>;
};


export type SubscriptionUsersSubscriptionCountArgs = {
  filters?: Maybe<Scalars['EJSON']>;
};

export type SubscriptionCountEvent = {
  __typename?: 'SubscriptionCountEvent';
  count?: Maybe<Scalars['Int']>;
};

export type SubscriptionEvent = {
  __typename?: 'SubscriptionEvent';
  event: SubscriptionEventType;
  document?: Maybe<Scalars['EJSON']>;
};

export enum SubscriptionEventType {
  added = 'added',
  changed = 'changed',
  removed = 'removed',
  ready = 'ready'
}

export type Task = {
  __typename?: 'Task';
  _id?: Maybe<Scalars['ObjectId']>;
  assignee: StarshipMember;
  assigneeId: Scalars['ObjectId'];
  status: TaskStatus;
  title: Scalars['String'];
};

export type TaskInsertInput = {
  assigneeId: Scalars['ObjectId'];
  status: TaskStatus;
  title: Scalars['String'];
};

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE'
}

export type TaskUpdateInput = {
  assigneeId?: Maybe<Scalars['ObjectId']>;
  status?: Maybe<TaskStatus>;
  title?: Maybe<Scalars['String']>;
};


export type User = {
  __typename?: 'User';
  _id?: Maybe<Scalars['ObjectId']>;
  /** Represents the date when this object was created */
  createdAt: Scalars['Date'];
  /** Represents the user who has created this object */
  createdBy?: Maybe<User>;
  /** Represents the user's id who has created this object */
  createdById?: Maybe<Scalars['ObjectId']>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  isEnabled: Scalars['Boolean'];
  profile: UserProfile;
  roles: Array<Maybe<UserRoles>>;
  /** Represents the last time when the object was updated */
  updatedAt: Scalars['Date'];
  /** Represents the user who has made the latest update on this object */
  updatedBy?: Maybe<User>;
  /** Represents the user's id who has made the latest update on this object */
  updatedById?: Maybe<Scalars['ObjectId']>;
};

export type UserInsertInput = {
  isEnabled: Scalars['Boolean'];
  profile: UserProfileInput;
  roles: Array<Maybe<UserRoles>>;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export type UserProfileInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
};

export enum UserRoles {
  ADMIN = 'ADMIN',
  SALES = 'SALES',
  MANAGER = 'MANAGER',
  END_CUSTOMER = 'END_CUSTOMER'
}

export type UserUpdateInput = {
  isEnabled?: Maybe<Scalars['Boolean']>;
  profile?: Maybe<UserProfileInput>;
  roles?: Maybe<Array<Maybe<UserRoles>>>;
};

export type VerifyEmailInput = {
  username?: Maybe<Scalars['String']>;
  token: Scalars['String'];
};

export type VerifyEmailResponse = {
  __typename?: 'VerifyEmailResponse';
  token: Scalars['String'];
};
