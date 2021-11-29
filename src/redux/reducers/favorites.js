import { initialState } from "../index";

import {
  ADD_TO_FAVORITES,
  REMOVE_ONE_BY_ONE,
  REMOVE_SELECTED_FROM_FAVORITES,
} from "../actions";

const favoritesListReducer = (state = initialState.favoritesList, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITES:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case REMOVE_ONE_BY_ONE:
      return {
        ...state,
        list: state.list.filter((el, i) => i !== action.payload),
      };
    case REMOVE_SELECTED_FROM_FAVORITES:
      return {
        ...state,
        list: state.list.filter((el) => el._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export default favoritesListReducer;
