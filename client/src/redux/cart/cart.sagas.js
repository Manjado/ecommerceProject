import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";

export function* clearCartOnSignOut() {
  console.log("clearCartOnSignOut");
  yield put(clearCart());
}
export function* onSignOutSuccess() {
  console.log("onSignOutSuccess");
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  console.log("cartsaga");
  yield all([call(onSignOutSuccess)]);
}

//606
