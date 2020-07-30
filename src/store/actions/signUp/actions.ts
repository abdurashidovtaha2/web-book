import { ISignUpFieldChange, IDoSignUpRequest, IDoSignUpSuccess, IDoSignUpFailure } from "./model";
import { ActionTypes } from "..";

export const signUpFieldChange = (field: string, value: string): ISignUpFieldChange => {
    return {
        type: ActionTypes.SIGNUP_FIELD_CHANGE,
        payload: {
            field,
            value
        }
    }
}

export const doSignUpRequest = 
    (phoneOrEmail: string, fullName: string, username: string, password: string): IDoSignUpRequest => {
    return {
        type: ActionTypes.DO_SIGNUP_REQUEST,
        payload: {
            phoneOrEmail,
            fullName,
            username,
            password
        }
    }
}

export const doSignUpSuccess = (): IDoSignUpSuccess => {
    return {
        type: ActionTypes.DO_SIGNUP_SUCCESS
    }
}

export const doSignUpFailure = (error: string): IDoSignUpFailure => {
    return {
        type: ActionTypes.DO_SIGNUP_FAILURE,
        payload: {
            error
        }
    }
}