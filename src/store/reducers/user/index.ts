import { IUserState } from "./model";
import { Reducer } from "redux";
import { ActionTypes } from "../../actions";

const initialState: IUserState = {
    loading: false,
    error: null,
    token: null,
    user: {
        name: "",
        surname: ""
    }
}

export const UserReducer: Reducer<IUserState, any> = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER_DETAILS:
            const { token, user } = action.payload;
            console.log({ ...state, token, user });
            return { ...state, token, user };
        default:
            return state;
    }
}