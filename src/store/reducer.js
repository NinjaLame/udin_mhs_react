import * as routerHelpers from "../app/router/RouterHelpers";
import storage from 'redux-persist/lib/storage' 
import { persistReducer } from "redux-persist";

const initialState = {
    access_token : "",
    isAuth : false,
    user: undefined
}
const reducerSwitch = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN" : 
            let { access_token } = action.payload
            return {
                ...state,
                access_token: access_token,
                isAuth : true
            };
        case "LOAD_USER" : 
            let { user } = action.payload
            return {
                ...state,
                user: user
            } 
        case "LOGOUT": 
            routerHelpers.forgotLastLocation();
            return initialState;
    }

    return state;
}

export const reducer = persistReducer(
    { storage, key: "sia-auth", whitelist: ["user", "access_token"] },
    reducerSwitch
);

export const actions = {
    login : access_token => ({ type: "LOGIN", payload: { access_token } }),
    logout : () => ({ type: "LOGOUT"}),
    loadUser : (user) => ({ type: "LOAD_USER",  payload: { user } }),
}


export function* saga() {
    yield takeLatest("LOGIN", function* loginSaga() {
      yield put(actions.loadUser());
    });
  
    yield takeLatest("LOAD_USER", function* userRequested() {
      const { data: user } = yield getUserByToken();
      yield put(actions.loadUser(user));
    });
  }
  