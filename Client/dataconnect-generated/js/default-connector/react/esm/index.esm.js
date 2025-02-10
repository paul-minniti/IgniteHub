import { createMovieRef, upsertUserRef, addReviewRef, deleteReviewRef, listMoviesRef, listUsersRef, listUserReviewsRef, getMovieByIdRef, searchMovieRef } from '../../';
import { useDataConnectQuery, useDataConnectMutation } from '@tanstack-query-firebase/react/data-connect';





export function useCreateMovie(options) {
  return useDataConnectMutation(createMovieRef, options);
}






export function useUpsertUser(options) {
  return useDataConnectMutation(upsertUserRef, options);
}






export function useAddReview(options) {
  return useDataConnectMutation(addReviewRef, options);
}






export function useDeleteReview(options) {
  return useDataConnectMutation(deleteReviewRef, options);
}






export function useListMovies( options) {
  return useDataConnectQuery(listMoviesRef(), options);
}






export function useListUsers( options) {
  return useDataConnectQuery(listUsersRef(), options);
}






export function useListUserReviews( options) {
  return useDataConnectQuery(listUserReviewsRef(), options);
}






export function useGetMovieById(vars,  options) {
  return useDataConnectQuery(getMovieByIdRef(vars), options);
}






export function useSearchMovie(vars,  options) {
  return useDataConnectQuery(searchMovieRef(vars), options);
}



