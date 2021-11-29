import { initialState } from "../index";

import { GET_LISTED_JOBS, LOADING_DATA } from "../actions";

const companyJobListReducer = (state = initialState.companyJobList, action) => {
  switch (action.type) {
    case GET_LISTED_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case LOADING_DATA:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default companyJobListReducer;
