import { takeLatest, call, put, fork } from "redux-saga/effects";
import { userActions } from "../actions";
import { registerUser } from "../api";

function* registerUserRequest({ payload }) {
  try {
    const response = yield call(registerUser, payload);
    yield put(userActions.registerUserSuccess(response));
  } catch (e) {
    yield put(userActions.registerUserFailure(e));
  }
}

export default function* watchRegisterUserRequest() {
  yield takeLatest(userActions.REGISTER_USER_REQUEST, registerUserRequest);
}
