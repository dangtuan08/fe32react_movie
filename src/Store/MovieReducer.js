import * as ActionType from "../Store/Type/ActionTypeMovie";

const initialState = {
  listMovie: [],
  listMoviePage: {},

  MovieInfo:{},
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.listMovie;
      return { ...state };
    case ActionType.GET_LIST_MOVIE_PAGE:
      state.listMoviePage = action.listMoviePage;
      return { ...state };
    case ActionType.GET_DETAIL_MOVIE:
      state.MovieInfo = action.movie;
      return { ...state };
    default:
      return state;
  }
};

export default MovieReducer;
