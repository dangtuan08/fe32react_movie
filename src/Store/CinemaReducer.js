import * as ActionType from "../Store/Type/ActionTypeMovie";

const initialState = {
  listCinema: [],
  listTheater: [],
  movieTheater: {}
};

const CinemaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_CINEMA:
      state.listCinema = action.listCinema;
      return { ...state };
    case ActionType.GET_LIST_THEATER:
      state.listTheater = [...state.listTheater, action.listTheater];
      return { ...state };
    case ActionType.GET_INFO_MOVIE_THEATER:
      state.movieTheater = action.movieTheater;
      return { ...state };
    default:
      return state;
  }
};

export default CinemaReducer;
