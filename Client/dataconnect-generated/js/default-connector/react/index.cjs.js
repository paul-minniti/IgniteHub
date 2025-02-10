const { createMovieRef, upsertUserRef, addReviewRef, deleteReviewRef, listMoviesRef, listUsersRef, listUserReviewsRef, getMovieByIdRef, searchMovieRef } = require('../');
const { useDataConnectQuery, useDataConnectMutation } = require( '@tanstack-query-firebase/react/data-connect');





exports.useCreateMovie = function useCreateMovie(options) {
  return useDataConnectMutation(createMovieRef, options);
}






exports.useUpsertUser = function useUpsertUser(options) {
  return useDataConnectMutation(upsertUserRef, options);
}






exports.useAddReview = function useAddReview(options) {
  return useDataConnectMutation(addReviewRef, options);
}






exports.useDeleteReview = function useDeleteReview(options) {
  return useDataConnectMutation(deleteReviewRef, options);
}






exports.useListMovies = function useListMovies( options) {
  return useDataConnectQuery(listMoviesRef(), options);
}






exports.useListUsers = function useListUsers( options) {
  return useDataConnectQuery(listUsersRef(), options);
}






exports.useListUserReviews = function useListUserReviews( options) {
  return useDataConnectQuery(listUserReviewsRef(), options);
}






exports.useGetMovieById = function useGetMovieById(vars,  options) {
  return useDataConnectQuery(getMovieByIdRef(vars), options);
}






exports.useSearchMovie = function useSearchMovie(vars,  options) {
  return useDataConnectQuery(searchMovieRef(vars), options);
}




