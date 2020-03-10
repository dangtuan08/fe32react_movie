import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import CinemaReducer from './CinemaReducer'
import UserReducer from "./UserReducer";
import BookingReducer from "./BookingReducer";
const rootReducer = combineReducers({
  //Nơi chưa các reducer cho tưng nghiệp vụ(store)
  MovieReducer: MovieReducer,
  CinemaReducer:CinemaReducer,
  UserReducer : UserReducer,
  BookingReducer: BookingReducer
});

export default rootReducer;
