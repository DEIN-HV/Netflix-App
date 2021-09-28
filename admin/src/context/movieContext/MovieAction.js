//GET-------------------------------------
export const getMovieStart = () => ({
    type: "GET_MOVIE_START",
});
export const getMovieSuccess = (movies) => ({
    type: "GET_MOVIE_SUCCESS",
    payload: movies,
});
export const getMovieFailure = () => ({
    type: "GET_MOVIE_FAILURE",
});

//DELETE-------------------------------------
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START",
});
export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id,
});
export const deletetMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE",
});

//CREATE-------------------------------------
export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START",
});
export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie,
});
export const createMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE",
});
