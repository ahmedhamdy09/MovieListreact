import { AllMOVIES, MovieApi } from "../Types/MoviesType";
import axios from "axios";
export const getAllMovie = () => {
  // higer function component
  return async (dispatch) => {
    const res = await axios.get(MovieApi);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getMovieSearch = (word) => {
  // higer function component
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=6cc98218e8ad30d2ebd53f516caf5589&query=${word}&language=ar`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const getPagintationPage = (page) => {
  // higer function component
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6cc98218e8ad30d2ebd53f516caf5589&language=ar&page=${page}`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
