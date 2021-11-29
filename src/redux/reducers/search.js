import { initialState } from "../index";
import {
  FETCH_DATA_FROM_API,
  FETCH_DATA_ERROR,
  LOADING_DATA,
} from "../actions";

const searchResultsReducer = (state = initialState.searchResults, action) => {
  switch (action.type) {
    case FETCH_DATA_FROM_API:
      return {
        ...state,
        data: action.payload,
      };
    case LOADING_DATA:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
