//reducer communicates with the store

import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_ERROR,
  FETCH_ITEMS_SUCCESS,
  ADD_FAV,
  REM_FAV,
} from "./FBTypes";

const initialState = {
  loading: false,
  items: [],
  error: "",
  fav: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_ITEMS_SUCCESS:
      return {
        loading: false,
        items: action.payload,
        error: "",
        fav: [],
      };

    case FETCH_ITEMS_ERROR:
      return {
        loading: false,
        items: [],
        error: action.payload,
        fav: [],
      };

    case ADD_FAV:
      return {
        ...state,
        fav: [...state.fav, action.payload],
      };

    case REM_FAV:
      return {
        ...state,
        fav: [...state.fav.filter(video => video.title !== action.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
