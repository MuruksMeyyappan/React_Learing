import { all, fork } from "redux-saga/effects";
import signUp from "./signup";

export default function* rootSaga() {
  yield all([fork(signUp)]);
}
