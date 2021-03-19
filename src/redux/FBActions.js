import axios from "axios";

import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESS,
  ADD_FAV,
  REM_FAV,
} from "./FBTypes";

export const addFav = highlight => {
  return {
    type: ADD_FAV,
    payload: highlight,
  };
};

export const remFav = del => {
  return {
    type: REM_FAV,
    payload: del,
  };
};

export const fetchItemsRequest = () => {
  return {
    type: FETCH_ITEMS_REQUEST,
  };
};

const fetchItemsSuccess = items => {
  return {
    type: FETCH_ITEMS_SUCCESS,
    payload: items,
  };
};

const fetchItemsError = error => {
  return {
    type: FETCH_ITEMS_ERROR,
    payload: error,
  };
};

export const fetchItems = () => {
  return dispatch => {
    dispatch(fetchItemsRequest);
    axios
      .get("https://www.scorebat.com/video-api/v1/")
      .then(response => {
        const items = response.data;
        dispatch(fetchItemsSuccess(items));
      })
      .catch(error => {
        const errorMsg = error.message;
        dispatch(fetchItemsError(errorMsg));
      });
  };
};
