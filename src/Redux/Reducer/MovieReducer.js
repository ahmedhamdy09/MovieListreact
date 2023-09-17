import { AllMOVIES } from "../Types/MoviesType";
//2- create reducer
const initialValue = { movies: [], pageCount: 0 };

export const movieReducer = (state = initialValue, action) => {
  switch (action.type) {
    case AllMOVIES:
      return { movies: action.data, pageCount: action.pages };
    default:
      return state;
  }
};
