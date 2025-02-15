import { CreateUserData, CreateUserVariables, AddNewsletterSignUpData, AddNewsletterSignUpVariables, ListNewsletterSignIpsData, ListUsersData} from '../';
import { useDataConnectQueryOptions, FlattenedQueryResult, useDataConnectMutationOptions, FlattenedMutationResult} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';


export function useCreateUser(options?: useDataConnectMutationOptions<CreateUserData, CreateUserVariables>): UseMutationResult<FlattenedMutationResult<CreateUserData, CreateUserVariables>, FirebaseError, CreateUserVariables>;
export function useCreateUser(dc: DataConnect, options?: useDataConnectMutationOptions<CreateUserData, CreateUserVariables>): UseMutationResult<FlattenedMutationResult<CreateUserData, CreateUserVariables>, FirebaseError, CreateUserVariables>;

export function useAddNewsletterSignUp(options?: useDataConnectMutationOptions<AddNewsletterSignUpData, AddNewsletterSignUpVariables>): UseMutationResult<FlattenedMutationResult<AddNewsletterSignUpData, AddNewsletterSignUpVariables>, FirebaseError, AddNewsletterSignUpVariables>;
export function useAddNewsletterSignUp(dc: DataConnect, options?: useDataConnectMutationOptions<AddNewsletterSignUpData, AddNewsletterSignUpVariables>): UseMutationResult<FlattenedMutationResult<AddNewsletterSignUpData, AddNewsletterSignUpVariables>, FirebaseError, AddNewsletterSignUpVariables>;

export function useListNewsletterSignIps(options?: useDataConnectQueryOptions<ListNewsletterSignIpsData>): UseQueryResult<FlattenedQueryResult<ListNewsletterSignIpsData, undefined>, FirebaseError>;
export function useListNewsletterSignIps(dc: DataConnect, options?: useDataConnectQueryOptions<ListNewsletterSignIpsData>): UseQueryResult<FlattenedQueryResult<ListNewsletterSignIpsData, undefined>, FirebaseError>;

export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData>): UseQueryResult<FlattenedQueryResult<ListUsersData, undefined>, FirebaseError>;
export function useListUsers(dc: DataConnect, options?: useDataConnectQueryOptions<ListUsersData>): UseQueryResult<FlattenedQueryResult<ListUsersData, undefined>, FirebaseError>;
