/*
 * action types
 */

// Add post
export const ADD_POST_REQUEST = "ADD_TODO_REQUEST";
export const ADD_POST_SUCCESS = "ADD_TODO_SUCCESS";
export const ADD_POST_FAILURE = "ADD_TODO_FAILURE";

// View Posts
export const VIEW_POSTS_REQUEST = "VIEW_POSTS_REQUEST";
export const VIEW_POSTS_SUCCESS = "VIEW_POSTS_SUCCESS";
export const VIEW_POSTS_FAILURE = "VIEW_POSTS_FAILURE";

/*
 * action creators
 */

// Add post
export function addPostRequest(post) {
  return { type: ADD_POST_REQUEST, post };
}
export function addPostSuccess(post) {
  return { type: ADD_POST_SUCCESS, post };
}
export function addPostFailure(post) {
  return { type: ADD_POST_FAILURE, post };
}

// View posts
export function viewPostsRequest(post) {
  return { type: VIEW_POSTS_REQUEST, post };
}
export function viewPostsSuccess(post) {
  return { type: VIEW_POSTS_SUCCESS, post };
}
export function viewPostsFailure(post) {
  return { type: VIEW_POSTS_FAILURE, post };
}
