import { ActionTypes } from "..";
import { takeEvery, call, put } from "redux-saga/effects";
import { client } from "../../../axios";
import { IDoLogInRequest } from "./model";
import { doLogInSuccess, doLogInFailure } from "./actions";
import { addUserDetails } from "../user/action";

function doLogIn(username: string, password: string) {
    // return client.post('/login', { username, password });
    return { token: "123asd", user: { name: "Taha", surname: "Abdu" } };
}

function* workerDoLogIn(action: IDoLogInRequest) {
    try {
        const { username, password } = action.payload;
        const data = yield call(doLogIn, username, password);
        const { token, user } = data;
        yield put(doLogInSuccess());
        yield put(addUserDetails(token, user));
    } catch (error) {
        yield put(doLogInFailure(error));
    }
}

export function* watcherDoLogIn() {
    yield takeEvery(ActionTypes.DO_LOGIN_REQUEST, workerDoLogIn);
}