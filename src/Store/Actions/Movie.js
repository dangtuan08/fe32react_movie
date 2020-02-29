import * as ActionType from "../Type/ActionTypeMovie";
import Axios from "axios";
import { movieService } from "./../../Services/index";

export const actGetListMovieAPI = () => {
  return dispatch => {
    movieService
      .getListMovieAxios()
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_MOVIE,
          listMovie: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListMoviePageAPI = (soPhanTu) => {
  return dispatch => {
    movieService
      .getListMoviePageAxios(soPhanTu)
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_MOVIE_PAGE,
          listMoviePage: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetDetailMovieAPI = id => {
  return dispatch => {
    movieService.getMovieDetailAxios(id)
      .then(result => {
        dispatch({
          type: ActionType.GET_DETAIL_MOVIE,
          movie: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
