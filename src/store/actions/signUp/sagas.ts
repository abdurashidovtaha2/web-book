import { takeEvery, call, put } from "redux-saga/effects";
import { ActionTypes } from "..";
import { IDoSignUpRequest, ISignUpParams } from "./model";
import { IUser } from "../../reducers/user/model";
import { client } from "../../../axios";
import { doSignUpSuccess, doSignUpFailure } from "./actions";
import { addUserDetails } from "../user/action";

function doSignUp(body: ISignUpParams) {
    // return client.post('/login', { body });
    return { token: "123asd", user: { name: "Taha", surname: "Abdu" } };
}

function* workerDoSignUp(action: IDoSignUpRequest) {
    try {
        const body = action.payload;
        const data = yield call(doSignUp, body);
        const { token, user } = data;
        yield put(doSignUpSuccess());
        yield put(addUserDetails(token, user));
    } catch (error) {
        yield put(doSignUpFailure(error));
    }
}

export function* watcherDoSignUp() {
    yield takeEvery(ActionTypes.DO_SIGNUP_REQUEST, workerDoSignUp)
}