import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;


export interface AddNewsletterSignUpData {
  newsletter_insert: Newsletter_Key;
}

export interface AddNewsletterSignUpVariables {
  email: string;
}

export interface AddUserToOrgData {
  user_update?: User_Key | null;
}

export interface AddUserToOrgVariables {
  orginizationId: UUIDString;
}

export interface CreateOrgData {
  orginization_insert: Orginization_Key;
}

export interface CreateOrgVariables {
  orgName: string;
  orgStatus: string;
}

export interface CreateUserData {
  user_insert: User_Key;
}

export interface CreateUserVariables {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface GetNewsletterByEmailData {
  newsletter?: {
    email: string;
  } & Newsletter_Key;
}

export interface GetNewsletterByEmailVariables {
  email?: string | null;
}

export interface GetUserByIdData {
  user?: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    orginizationId?: UUIDString | null;
    roles?: string[] | null;
  } & User_Key;
}

export interface GetUserByIdVariables {
  id: string;
}

export interface GetUserOrgData {
  user?: {
    orginizationId?: UUIDString | null;
    orginization?: {
      id: UUIDString;
      name: string;
      status?: string | null;
    } & Orginization_Key;
  };
}

export interface GetUserOrgVariables {
  id: string;
}

export interface GetWebsitesInOrgData {
  orginization?: {
    websites_on_organization: ({
      name: string;
      domain: string;
      structureId: string;
      status?: string | null;
      createdAt: DateString;
      updatedAt?: DateString | null;
    })[];
  };
}

export interface GetWebsitesInOrgVariables {
  orginizationId: UUIDString;
}

export interface ListNewsletterSignIpsData {
  newsletters: ({
    email: string;
  } & Newsletter_Key)[];
}

export interface ListOrgsData {
  orginizations: ({
    id: UUIDString;
    name: string;
    status?: string | null;
    users_on_orginization: ({
      id: string;
    } & User_Key)[];
  } & Orginization_Key)[];
}

export interface ListUsersData {
  users: ({
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    orginizationId?: UUIDString | null;
    roles?: string[] | null;
  } & User_Key)[];
}

export interface Newsletter_Key {
  email: string;
  __typename?: 'Newsletter_Key';
}

export interface Orginization_Key {
  id: UUIDString;
  __typename?: 'Orginization_Key';
}

export interface User_Key {
  id: string;
  __typename?: 'User_Key';
}

export interface Website_Key {
  id: UUIDString;
  __typename?: 'Website_Key';
}

/* Allow users to create refs without passing in DataConnect */
export function createUserRef(vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createUserRef(dc: DataConnect, vars: CreateUserVariables): MutationRef<CreateUserData, CreateUserVariables>;

export function createUser(vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;
export function createUser(dc: DataConnect, vars: CreateUserVariables): MutationPromise<CreateUserData, CreateUserVariables>;

/* Allow users to create refs without passing in DataConnect */
export function addNewsletterSignUpRef(vars: AddNewsletterSignUpVariables): MutationRef<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addNewsletterSignUpRef(dc: DataConnect, vars: AddNewsletterSignUpVariables): MutationRef<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;

export function addNewsletterSignUp(vars: AddNewsletterSignUpVariables): MutationPromise<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;
export function addNewsletterSignUp(dc: DataConnect, vars: AddNewsletterSignUpVariables): MutationPromise<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;

/* Allow users to create refs without passing in DataConnect */
export function createOrgRef(vars: CreateOrgVariables): MutationRef<CreateOrgData, CreateOrgVariables>;
/* Allow users to pass in custom DataConnect instances */
export function createOrgRef(dc: DataConnect, vars: CreateOrgVariables): MutationRef<CreateOrgData, CreateOrgVariables>;

export function createOrg(vars: CreateOrgVariables): MutationPromise<CreateOrgData, CreateOrgVariables>;
export function createOrg(dc: DataConnect, vars: CreateOrgVariables): MutationPromise<CreateOrgData, CreateOrgVariables>;

/* Allow users to create refs without passing in DataConnect */
export function addUserToOrgRef(vars: AddUserToOrgVariables): MutationRef<AddUserToOrgData, AddUserToOrgVariables>;
/* Allow users to pass in custom DataConnect instances */
export function addUserToOrgRef(dc: DataConnect, vars: AddUserToOrgVariables): MutationRef<AddUserToOrgData, AddUserToOrgVariables>;

export function addUserToOrg(vars: AddUserToOrgVariables): MutationPromise<AddUserToOrgData, AddUserToOrgVariables>;
export function addUserToOrg(dc: DataConnect, vars: AddUserToOrgVariables): MutationPromise<AddUserToOrgData, AddUserToOrgVariables>;

/* Allow users to create refs without passing in DataConnect */
export function listNewsletterSignIpsRef(): QueryRef<ListNewsletterSignIpsData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function listNewsletterSignIpsRef(dc: DataConnect): QueryRef<ListNewsletterSignIpsData, undefined>;

export function listNewsletterSignIps(): QueryPromise<ListNewsletterSignIpsData, undefined>;
export function listNewsletterSignIps(dc: DataConnect): QueryPromise<ListNewsletterSignIpsData, undefined>;

/* Allow users to create refs without passing in DataConnect */
export function getNewsletterByEmailRef(vars?: GetNewsletterByEmailVariables): QueryRef<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getNewsletterByEmailRef(dc: DataConnect, vars?: GetNewsletterByEmailVariables): QueryRef<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;

export function getNewsletterByEmail(vars?: GetNewsletterByEmailVariables): QueryPromise<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;
export function getNewsletterByEmail(dc: DataConnect, vars?: GetNewsletterByEmailVariables): QueryPromise<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;

/* Allow users to create refs without passing in DataConnect */
export function listUsersRef(): QueryRef<ListUsersData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function listUsersRef(dc: DataConnect): QueryRef<ListUsersData, undefined>;

export function listUsers(): QueryPromise<ListUsersData, undefined>;
export function listUsers(dc: DataConnect): QueryPromise<ListUsersData, undefined>;

/* Allow users to create refs without passing in DataConnect */
export function listOrgsRef(): QueryRef<ListOrgsData, undefined>;
/* Allow users to pass in custom DataConnect instances */
export function listOrgsRef(dc: DataConnect): QueryRef<ListOrgsData, undefined>;

export function listOrgs(): QueryPromise<ListOrgsData, undefined>;
export function listOrgs(dc: DataConnect): QueryPromise<ListOrgsData, undefined>;

/* Allow users to create refs without passing in DataConnect */
export function getUserByIdRef(vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getUserByIdRef(dc: DataConnect, vars: GetUserByIdVariables): QueryRef<GetUserByIdData, GetUserByIdVariables>;

export function getUserById(vars: GetUserByIdVariables): QueryPromise<GetUserByIdData, GetUserByIdVariables>;
export function getUserById(dc: DataConnect, vars: GetUserByIdVariables): QueryPromise<GetUserByIdData, GetUserByIdVariables>;

/* Allow users to create refs without passing in DataConnect */
export function getUserOrgRef(vars: GetUserOrgVariables): QueryRef<GetUserOrgData, GetUserOrgVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getUserOrgRef(dc: DataConnect, vars: GetUserOrgVariables): QueryRef<GetUserOrgData, GetUserOrgVariables>;

export function getUserOrg(vars: GetUserOrgVariables): QueryPromise<GetUserOrgData, GetUserOrgVariables>;
export function getUserOrg(dc: DataConnect, vars: GetUserOrgVariables): QueryPromise<GetUserOrgData, GetUserOrgVariables>;

/* Allow users to create refs without passing in DataConnect */
export function getWebsitesInOrgRef(vars: GetWebsitesInOrgVariables): QueryRef<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;
/* Allow users to pass in custom DataConnect instances */
export function getWebsitesInOrgRef(dc: DataConnect, vars: GetWebsitesInOrgVariables): QueryRef<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;

export function getWebsitesInOrg(vars: GetWebsitesInOrgVariables): QueryPromise<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;
export function getWebsitesInOrg(dc: DataConnect, vars: GetWebsitesInOrgVariables): QueryPromise<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;

