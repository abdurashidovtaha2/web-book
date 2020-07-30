import { Reducer } from "redux"
import { ISignUpState } from "./model"
import { ActionTypes } from "../../actions";
import { SignUpActions } from "../../actions/signUp/model";

const initialState: ISignUpState = {
    loading: false,
    error: null,
    phoneOrEmail: "",
    fullName: "",
    username: "",
    password: "",
}

export const SignUpReducer: Reducer<ISignUpState, SignUpActions> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGNUP_FIELD_CHANGE:
            const { field, value } = action.payload;
            return { ...state, [field]: value };
        case ActionTypes.DO_SIGNUP_REQUEST:
            return { ...state, loading: true };
        case ActionTypes.DO_SIGNUP_FAILURE:
            const { error } = action.payload;
            return { ...state, loading: false, error };
        case ActionTypes.DO_SIGNUP_SUCCESS:
            return { ...state, loading: false };``
        default:
            return state;
    }
}