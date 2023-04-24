import { GET_REPOS, GET_USER } from "./actionTypes";

let initialState = {
  repos: [],
  user: {},
};

export const githubReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_REPOS: {
      return {
        ...state,
        repos: payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: payload,
      };
    }
    default: {
      return state;
    }
  }
};
