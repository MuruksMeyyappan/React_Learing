import { userActions } from "../actions";

const initialState = [];

export default function userReducer(
  state = initialState,
  { type, payload, data, error }
) {
  switch (type) {
    case userActions.REGISTER_USER_REQUEST:
      console.log("REGISTER_USER_REQUEST: ", payload);
      return {
        ...state,
        userData: payload
      };
    case userActions.REGISTER_USER_SUCCESS:
      console.log("REGISTER_USER_SUCCESS: ", data);
      return {
        ...state,
        userData: data
      };
    case userActions.REGISTER_USER_FAILURE:
      console.log("REGISTER_USER_FAILURE: ", error);
      return {
        ...state,
        userData: error
      };
    case userActions.LOGIN_USER_REQUEST:
      return {
        ...state,
        payload
      };
    case userActions.LOGIN_USER_SUCCESS:
      return {
        ...state,
        payload
      };
    case userActions.LOGIN_USER_FAILURE:
      return {
        ...state,
        payload
      };
    default:
      return state;
  }
}
