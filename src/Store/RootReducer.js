import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import CinemaReducer from './CinemaReducer'
import ModalReducer from "./ModalReducer";
const rootReducer = combineReducers({
  //Nơi chưa các reducer cho tưng nghiệp vụ(store)
  MovieReducer: MovieReducer,
  CinemaReducer:CinemaReducer,
  ModalReducer:ModalReducer
});

export default rootReducer;
