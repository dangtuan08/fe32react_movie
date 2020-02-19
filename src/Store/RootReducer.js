import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import CinemaReducer from './CinemaReducer'
import UserReducer from "./UserReducer";

const rootReducer = combineReducers({
  //Nơi chưa các reducer cho tưng nghiệp vụ(store)
  MovieReducer: MovieReducer,
  CinemaReducer:CinemaReducer,
  UserReducer : UserReducer
});

export default rootReducer;
