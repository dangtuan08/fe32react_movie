import * as ActionType from "../Type/ActionTypeMovie";
import Axios from "axios";
import { cinemaService } from "./../../Services/index";

export const actGetListCinemaAPI = () => {
  return dispatch => {
    cinemaService
      .getListCinemaAxios()
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_CINEMA,
          listCinema: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetListTheaterAPI = (maHeThong) => {
  return dispatch => {
    cinemaService
      .getListTheaterAxios(maHeThong)
      .then(result => {
        dispatch({
          type: ActionType.GET_LIST_THEATER,
          listTheater: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actGetInfoMovieTheaterAPI = (maPhim) => {
  return dispatch => {
    cinemaService
      .getInfoMovieTheaterAxios(maPhim)
      .then(result => {
        dispatch({
          type: ActionType.GET_INFO_MOVIE_THEATER,
          movieTheater: result.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};
