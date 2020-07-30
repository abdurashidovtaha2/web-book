import { ActionTypes } from "..";

export type SignUpActions = ISignUpFieldChange | IDoSignUpRequest | IDoSignUpSuccess | IDoSignUpFailure;

export interface ISignUpParams {
    phoneOrEmail: string;
    fullName: string;
    username: string;
    password: string;
};

export interface ISignUpFieldChange {
    type: ActionTypes.SIGNUP_FIELD_CHANGE,
    payload: {
        field: string,
        value: string
    }
}

export interface IDoSignUpRequest {
    type: ActionTypes.DO_SIGNUP_REQUEST,
    payload: ISignUpParams
}

export interface IDoSignUpSuccess {
    type: ActionTypes.DO_SIGNUP_SUCCESS
}

export interface IDoSignUpFailure {
    type: ActionTypes.DO_SIGNUP_FAILURE,
    payload: {
        error: { error: string } | string
    }
}