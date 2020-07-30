import { ActionTypes } from "..";

export interface ILogInResponse {
    token: string;
    user: any;
}

export type LogInActions = ILogInFieldChange | IDoLogInRequest | IDoLogInSuccess | IDoLogInFailure;

export interface ILogInFieldChange {
    type: ActionTypes.LOGIN_FIELD_CHANGE;
    payload: {
        field: string,
        value: string
    }
}

export interface IDoLogInRequest {
    type: ActionTypes.DO_LOGIN_REQUEST;
    payload: {
        username: string,
        password: string,
    }
}

export interface IDoLogInSuccess {
    type: ActionTypes.DO_LOGIN_SUCCESS;
}

export interface IDoLogInFailure {
    type: ActionTypes.DO_LOGIN_FAILURE;
    payload: {
        error: { error: string } | string;
    }
}