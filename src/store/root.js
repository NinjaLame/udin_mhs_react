import { all } from "redux-saga/effects";
import { combineReducers } from "redux";

import { metronic } from "../_metronic";
import * as auth from "./reducer";


export const rootReducer = combineReducers({
    auth: auth.reducer,
    i18n: metronic.i18n.reducer,
    builder: metronic.builder.reducer
  });
  

export function* rootSaga() {
  yield all([auth.saga()]);
}
