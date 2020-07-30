import { all } from "redux-saga/effects";
import { watcherDoLogIn } from "../actions/logIn/sagas";

export default function* rootSaga() {
    yield all([
        watcherDoLogIn(),
    ])
}