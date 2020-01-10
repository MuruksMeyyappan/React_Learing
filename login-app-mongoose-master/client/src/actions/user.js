/*
 * action types
 */

// Register User
export const REGISTER_USER_REQUEST = "REGISTER_USER_REQUEST";
export const REGISTER_USER_SUCCESS = "REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "REGISTER_USER_FAILURE";

// Login User
export const LOGIN_USER_REQUEST = "LOGIN_USER_REQUEST";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

// Logout User
export const LOGOUT_USER_REQUEST = "LOGOUT_USER_REQUEST";

/*
 * action creators
 */

// Register User
export function registerUserRequest(payload) {
  return { type: REGISTER_USER_REQUEST, payload };
}
export function registerUserSuccess(data) {
  return { type: REGISTER_USER_SUCCESS, data };
}
export function registerUserFailure(error) {
  return { type: REGISTER_USER_FAILURE, error };
}

// Login User
export function loginUserRequest(post) {
  return { type: LOGIN_USER_REQUEST, post };
}
export function loginUserSuccess(post) {
  return { type: LOGIN_USER_SUCCESS, post };
}
export function loginUserFailure(post) {
  return { type: LOGIN_USER_FAILURE, post };
}
