import { postActions } from "../actions";

const initialState = [];

export default function postReducer(state = initialState, { type, payload }) {
  switch (type) {
    case postActions.ADD_POST_REQUEST:
      return {
        ...state,
        payload
      };
    case postActions.ADD_POST_SUCCESS:
      return {
        ...state,
        payload
      };
    case postActions.ADD_POST_FAILURE:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
