import { Reducer } from "redux"
import { ILogInState } from "./model";
import { ActionTypes } from "../../actions";
import { LogInActions } from "../../actions/logIn/model";

const initialState: ILogInState = {
    loading: false,
    error: null,
    username: "",
    password: "",
}

export const LogInReducer: Reducer<ILogInState, LogInActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.LOGIN_FIELD_CHANGE:
            const { field, value } = action.payload;
            return { ...state, [field]: value };
        case ActionTypes.DO_LOGIN_REQUEST:
            return { ...state, loading: true };
        case ActionTypes.DO_LOGIN_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case ActionTypes.DO_LOGIN_SUCCESS:
            return { ...state, loading: false };
        default:
            return state;
    }
}