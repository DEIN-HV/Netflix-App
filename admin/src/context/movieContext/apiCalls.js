import axios from "axios";
import {
    deleteMovieStart,
    deleteMovieSuccess,
    deletetMovieFailure,
    getMovieFailure,
    getMovieStart,
    getMovieSuccess,
    createMovieStart,
    createMovieSuccess,
    createMovieFailure
} from "./MovieAction"

export const getMovie = async (dispatch) => {
    dispatch(getMovieStart());
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(getMovieSuccess(res.data));


    } catch (error) {
        console.log(error);
        dispatch(getMovieFailure());
    }
}

export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete("/movies/" + id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            }
        })
        dispatch(deleteMovieSuccess(id));
    } catch (error) {
        console.log(error);
        dispatch(deletetMovieFailure());
    }
}

export const createMovie = async (movie, dispatch) => {

    console.log(movie)
    dispatch(createMovieStart());
    try {
        const res = await axios.post("/movies", movie, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
            },
        });

        dispatch(createMovieSuccess(res.data));
    } catch (err) {
        dispatch(createMovieFailure());
    }
};