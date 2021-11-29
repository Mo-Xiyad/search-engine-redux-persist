import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import searchResultsReducer from "./reducers/search";
import favoritesListReducer from "./reducers/favorites";
import thunk from "redux-thunk";

const workingMiddleware =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  searchResults: {
    data: [],
    isLoading: true,
    isError: false,
  },
  favoritesList: {
    list: [],
  },
};

const mainReducer = combineReducers({
  searchResults: searchResultsReducer,
  favoritesList: favoritesListReducer,
});

const configureStore = createStore(
  mainReducer,
  initialState,
  workingMiddleware(applyMiddleware(thunk))
);

export default configureStore;
