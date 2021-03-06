import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import searchResultsReducer from "./reducers/search";
import favoritesListReducer from "./reducers/favorites";
import companyJobListReducer from "./reducers/companyJobs";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { encryptTransform } from "redux-persist-transform-encrypt";

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
  companyJobList: {
    jobs: [],
    isLoading: true,
  },
};

const persistConfig = {
  key: "root", // this is referring to the entire stor object
  storage, // this is referring to the local storage
  transforms: [
    // this is encrypting the object that gets stored in the local storage so the user cannot manipulate
    encryptTransform({
      secretKey: process.env.REACT_APP_STORE_ENCRYPT_KEY, //this key is a key that is stored in the dotEnv file that is in your local machine
    }), // This key can be anything you want it to be
  ],
};

const mainReducer = combineReducers({
  searchResults: searchResultsReducer,
  favoritesList: favoritesListReducer,
  companyJobList: companyJobListReducer,
});

const persistedReducer = persistReducer(persistConfig, mainReducer);

const configureStore = createStore(
  persistedReducer,
  initialState,
  workingMiddleware(applyMiddleware(thunk))
);

export default configureStore;
export const persister = persistStore(configureStore);
