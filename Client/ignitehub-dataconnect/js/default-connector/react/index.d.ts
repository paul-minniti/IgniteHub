import { CreateUserData, CreateUserVariables, AddNewsletterSignUpData, AddNewsletterSignUpVariables, CreateOrgData, CreateOrgVariables, AddUserToOrgData, AddUserToOrgVariables, ListNewsletterSignIpsData, GetNewsletterByEmailData, GetNewsletterByEmailVariables, ListUsersData, ListOrgsData, GetUserByIdData, GetUserByIdVariables, GetUserOrgData, GetUserOrgVariables, GetWebsitesInOrgData, GetWebsitesInOrgVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, FirebaseError, CreateUserVariables>): UseDataConnectMutationResult<CreateUserData, CreateUserVariables>;

export function useAddNewsletterSignUp(options?: useDataConnectMutationOptions<AddNewsletterSignUpData, FirebaseError, AddNewsletterSignUpVariables>): UseDataConnectMutationResult<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;
export function useAddNewsletterSignUp(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewsletterSignUpData, FirebaseError, AddNewsletterSignUpVariables>): UseDataConnectMutationResult<AddNewsletterSignUpData, AddNewsletterSignUpVariables>;

export function useCreateOrg(options?: useDataConnectMutationOptions<CreateOrgData, FirebaseError, CreateOrgVariables>): UseDataConnectMutationResult<CreateOrgData, CreateOrgVariables>;
export function useCreateOrg(dc: DataConnect, options?: useDataConnectMutationOptions<CreateOrgData, FirebaseError, CreateOrgVariables>): UseDataConnectMutationResult<CreateOrgData, CreateOrgVariables>;

export function useAddUserToOrg(options?: useDataConnectMutationOptions<AddUserToOrgData, FirebaseError, AddUserToOrgVariables>): UseDataConnectMutationResult<AddUserToOrgData, AddUserToOrgVariables>;
export function useAddUserToOrg(dc: DataConnect, options?: useDataConnectMutationOptions<AddUserToOrgData, FirebaseError, AddUserToOrgVariables>): UseDataConnectMutationResult<AddUserToOrgData, AddUserToOrgVariables>;

export function useListNewsletterSignIps(options?: useDataConnectQueryOptions<ListNewsletterSignIpsData>): UseDataConnectQueryResult<ListNewsletterSignIpsData, undefined>;
export function useListNewsletterSignIps(dc: DataConnect, options?: useDataConnectQueryOptions<ListNewsletterSignIpsData>): UseDataConnectQueryResult<ListNewsletterSignIpsData, undefined>;

export function useGetNewsletterByEmail(vars?: GetNewsletterByEmailVariables, options?: useDataConnectQueryOptions<GetNewsletterByEmailData>): UseDataConnectQueryResult<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;
export function useGetNewsletterByEmail(dc: DataConnect, vars?: GetNewsletterByEmailVariables, options?: useDataConnectQueryOptions<GetNewsletterByEmailData>): UseDataConnectQueryResult<GetNewsletterByEmailData, GetNewsletterByEmailVariables>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseDataConnectQueryResult<ListUsersData, undefined>;

export function useListOrgs(options?: useDataConnectQueryOptions<ListOrgsData>): UseDataConnectQueryResult<ListOrgsData, undefined>;
export function useListOrgs(dc: DataConnect, options?: useDataConnectQueryOptions<ListOrgsData>): UseDataConnectQueryResult<ListOrgsData, undefined>;

export function useGetUserById(vars: GetUserByIdVariables, options?: useDataConnectQueryOptions<GetUserByIdData>): UseDataConnectQueryResult<GetUserByIdData, GetUserByIdVariables>;
export function useGetUserById(dc: DataConnect, vars: GetUserByIdVariables, options?: useDataConnectQueryOptions<GetUserByIdData>): UseDataConnectQueryResult<GetUserByIdData, GetUserByIdVariables>;

export function useGetUserOrg(vars: GetUserOrgVariables, options?: useDataConnectQueryOptions<GetUserOrgData>): UseDataConnectQueryResult<GetUserOrgData, GetUserOrgVariables>;
export function useGetUserOrg(dc: DataConnect, vars: GetUserOrgVariables, options?: useDataConnectQueryOptions<GetUserOrgData>): UseDataConnectQueryResult<GetUserOrgData, GetUserOrgVariables>;

export function useGetWebsitesInOrg(vars: GetWebsitesInOrgVariables, options?: useDataConnectQueryOptions<GetWebsitesInOrgData>): UseDataConnectQueryResult<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;
export function useGetWebsitesInOrg(dc: DataConnect, vars: GetWebsitesInOrgVariables, options?: useDataConnectQueryOptions<GetWebsitesInOrgData>): UseDataConnectQueryResult<GetWebsitesInOrgData, GetWebsitesInOrgVariables>;
