import { ActionTypes } from "..";
import { ILogInFieldChange, IDoLogInRequest, IDoLogInSuccess, IDoLogInFailure } from "./model";

export const logInFieldChange = (field: string, value: string): ILogInFieldChange => {
    return {
        type: ActionTypes.LOGIN_FIELD_CHANGE,
        payload: {
            field,
            value
        }
    }
}

export const doLogInRequest = (username: string, password: string): IDoLogInRequest => {
    return {
        type: ActionTypes.DO_LOGIN_REQUEST,
        payload: {
            username,
            password
        }
    }
}

export const doLogInSuccess = (): IDoLogInSuccess => {
    return {
        type: ActionTypes.DO_LOGIN_SUCCESS,
    }
}

export const doLogInFailure = (error: string): IDoLogInFailure => {
    return {
        type: ActionTypes.DO_LOGIN_FAILURE,
        payload: {
            error
        }
    }
}