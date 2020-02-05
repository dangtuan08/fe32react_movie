import * as ActionType from "../Store/Type/ActionTypeMovie";

const initialState = {
  listMovie: [],
  movie: {}
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_LIST_MOVIE:
      state.listMovie = action.listMovie;
      return { ...state };
    default:
      return state;
  }
};

export default MovieReducer;
