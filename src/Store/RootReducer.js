import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import CinemaReducer from './CinemaReducer'
const rootReducer = combineReducers({
  //Nơi chưa các reducer cho tưng nghiệp vụ(store)
  MovieReducer: MovieReducer,
  CinemaReducer:CinemaReducer
});

export default rootReducer;
