import { CreateMovieData, CreateMovieVariables, UpsertUserData, UpsertUserVariables, AddReviewData, AddReviewVariables, DeleteReviewData, DeleteReviewVariables, ListMoviesData, ListUsersData, ListUserReviewsData, GetMovieByIdData, GetMovieByIdVariables, SearchMovieData, SearchMovieVariables} from '../';
import { useDataConnectQueryOptions, FlattenedQueryResult, useDataConnectMutationOptions, FlattenedMutationResult} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';

export function useCreateMovie(options?: useDataConnectMutationOptions<CreateMovieData, CreateMovieVariables, CreateMovieVariables>): UseMutationResult<FlattenedMutationResult<CreateMovieData, CreateMovieVariables>, FirebaseError, CreateMovieVariables>;
export function useUpsertUser(options?: useDataConnectMutationOptions<UpsertUserData, UpsertUserVariables, UpsertUserVariables>): UseMutationResult<FlattenedMutationResult<UpsertUserData, UpsertUserVariables>, FirebaseError, UpsertUserVariables>;
export function useAddReview(options?: useDataConnectMutationOptions<AddReviewData, AddReviewVariables, AddReviewVariables>): UseMutationResult<FlattenedMutationResult<AddReviewData, AddReviewVariables>, FirebaseError, AddReviewVariables>;
export function useDeleteReview(options?: useDataConnectMutationOptions<DeleteReviewData, DeleteReviewVariables, DeleteReviewVariables>): UseMutationResult<FlattenedMutationResult<DeleteReviewData, DeleteReviewVariables>, FirebaseError, DeleteReviewVariables>;
export function useListMovies(options?: useDataConnectQueryOptions<ListMoviesData, undefined>): UseQueryResult<FlattenedQueryResult<ListMoviesData, undefined>, FirebaseError>;
export function useListUsers(options?: useDataConnectQueryOptions<ListUsersData, undefined>): UseQueryResult<FlattenedQueryResult<ListUsersData, undefined>, FirebaseError>;
export function useListUserReviews(options?: useDataConnectQueryOptions<ListUserReviewsData, undefined>): UseQueryResult<FlattenedQueryResult<ListUserReviewsData, undefined>, FirebaseError>;
export function useGetMovieById(vars: GetMovieByIdVariables, options?: useDataConnectQueryOptions<GetMovieByIdData, GetMovieByIdVariables>): UseQueryResult<FlattenedQueryResult<GetMovieByIdData, GetMovieByIdVariables>, FirebaseError>;
export function useSearchMovie(vars: SearchMovieVariables, options?: useDataConnectQueryOptions<SearchMovieData, SearchMovieVariables>): UseQueryResult<FlattenedQueryResult<SearchMovieData, SearchMovieVariables>, FirebaseError>;
