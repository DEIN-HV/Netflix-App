const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIE_START":
            return {
                movie: [],
                isfetching: true,
                error: false,
            }
        case "GET_MOVIE_SUCCESS":
            return {
                movies: action.payload,
                isfetching: false,
                error: false,
            }
        case "GET_MOVIE_FAILURE":
            return {
                movie: [],
                isfetching: true,
                error: true,
            }

        case "DELETE_MOVIE_START":
            return {
                ...state,
                isfetching: true,
                error: false,
            }
        case "DELETE_MOVIE_SUCCESS":
            return {
                movies: state.movies.filter((movie) => movie._id !== action.payload),
                isfetching: false,
                error: false,
            }
        case "DELETE_MOVIE_FAILURE":
            return {
                ...state,
                isfetching: true,
                error: true,
            }

        case "CREATE_MOVIE_START":
            return {
                ...state,
                isfetching: true,
                error: false,
            }
        case "CREATE_MOVIE_SUCCESS":
            return {
                movies: [...state.movies, action.payload],
                isfetching: false,
                error: false,
            }
        case "CREATE_MOVIE_FAILURE":
            return {
                ...state,
                isfetching: true,
                error: true,
            }
        default:
            return { ...state };

    }
}

export default MovieReducer;