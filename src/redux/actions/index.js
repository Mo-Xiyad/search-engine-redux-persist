export const ADD_TO_FAVORITES = "ADD_TO_CART";
export const REMOVE_ONE_BY_ONE = "REMOVE_ONE_BY_ONE";
export const REMOVE_SELECTED_FROM_FAVORITES = "REMOVE_SELECTED_FROM_FAVORITES";
export const FETCH_DATA_FROM_API = "FETCH_DATA_FROM_API";
export const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const LOADING_DATA = "LOADING_DATA";

export const addToFavorites = (itemToAdd) => ({
  type: ADD_TO_FAVORITES,
  payload: itemToAdd, // this is going to be the item we intend to add to the favorite list
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});

// this reducer is used inside the "FAVORITES" Component
export const removeFromFavoritesOneByOne = (itemToRemove) => ({
  type: REMOVE_ONE_BY_ONE,
  payload: itemToRemove, // this is going to be the item we intend to remove to the favorite list
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});

// this reducer is used inside the "HOME" Component
export const removeSelectedFavorites = (itemToRemove) => ({
  type: REMOVE_SELECTED_FROM_FAVORITES,
  payload: itemToRemove, // this is going to be the item we intend to remove to the favorite list
  // the payload is any other piece of info required by the reducer to understand
  // what we want to do with this action
});

export const searchResultsAction = (query = "developer", isLoading) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: LOADING_DATA,
        payload: true,
      });
      const response = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${query}&limit=10&skip=2`
      );
      if (response.ok) {
        let { data } = await response.json();
        console.log(data);
        dispatch({
          type: FETCH_DATA_FROM_API,
          payload: data,
        });
        setTimeout(() => {
          dispatch({
            type: LOADING_DATA,
            payload: false,
          });
        }, 1000);
      } else {
        console.log("Houston, we got an error :(");
        // we can also dispatch ANOTHER action here for the error!
        dispatch({
          type: FETCH_DATA_ERROR,
          payload: true,
        });
        dispatch({
          type: LOADING_DATA,
          payload: false,
        });
      }
    } catch (error) {
      dispatch({
        type: FETCH_DATA_ERROR,
        payload: true,
      });
      dispatch({
        type: LOADING_DATA,
        payload: false,
      });
    }
  };
};
