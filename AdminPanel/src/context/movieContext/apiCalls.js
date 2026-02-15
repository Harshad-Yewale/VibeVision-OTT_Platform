import axios from "axios";

import {
  createMovieFailure,
  createMovieStart,
  createMovieSuccess,
  deleteMovieFailure,
  deleteMovieStart,
  deleteMovieSuccess,
  getMoviesFailure,
  getMoviesStart,
  getMoviesSuccess,
  updateMovieFailure,
  updateMovieStart,
  updateMovieSuccess,
} from "./MovieActions";


// helper to safely get token
const getToken = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? "Bearer " + user.accessToken : "";
};



// GET MOVIES

export const getMovies = async (dispatch) => {

  dispatch(getMoviesStart());

  try {

    const res = await axios.get("/api/movies", {
      headers: {
        token: getToken(),
      },
    });

    dispatch(getMoviesSuccess(res.data));

  } catch (err) {

    dispatch(getMoviesFailure());

    console.log(err);

  }

};



// CREATE MOVIE

export const createMovie = async (movie, dispatch) => {

  dispatch(createMovieStart());

  try {

    const res = await axios.post("/api/movies", movie, {
      headers: {
        token: getToken(),
      },
    });

    dispatch(createMovieSuccess(res.data));

  } catch (err) {

    dispatch(createMovieFailure());

    console.log(err);

  }

};



// DELETE MOVIE

export const deleteMovie = async (id, dispatch) => {

  dispatch(deleteMovieStart());

  try {

    await axios.delete("/api/movies/" + id, {
      headers: {
        token: getToken(),
      },
    });

    dispatch(deleteMovieSuccess(id));

  } catch (err) {

    dispatch(deleteMovieFailure());

    console.log(err);

  }

};



// UPDATE MOVIE

export const updateMovie = async (id, updatedMovie, dispatch) => {

  dispatch(updateMovieStart());

  try {

    const res = await axios.put(
      "/api/movies/" + id,
      updatedMovie,
      {
        headers: {
          token: getToken(),
        },
      }
    );

    dispatch(updateMovieSuccess(res.data));

  } catch (err) {

    dispatch(updateMovieFailure());

    console.log(err);

  }

};
