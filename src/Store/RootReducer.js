import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";

const rootReducer = combineReducers({
  //Nơi chưa các reducer cho tưng nghiệp vụ(store)
  MovieReducer: MovieReducer
});

export default rootReducer;
