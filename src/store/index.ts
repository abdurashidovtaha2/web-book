import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
import { ILogInState } from "./reducers/logIn/model";
import { ISignUpState } from "./reducers/signUp/model";
import createSagaMiddleware from "redux-saga";
import { watchDoLogInRequest } from "./actions/logIn/sagas";
import rootSaga from "./sagas";
import { IUserState } from "./reducers/user/model";

export interface IRootState {
    readonly logInState: ILogInState;
    readonly signUpState: ISignUpState;
    readonly userState: IUserState
}

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);