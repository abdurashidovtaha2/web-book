import { combineReducers } from "redux";
import { LogInReducer } from "./logIn";
import { IRootState } from "..";
import { SignUpReducer } from "./signUp";
import { UserReducer } from "./user";

export const rootReducer = combineReducers<IRootState>({
    logInState: LogInReducer,
    signUpState: SignUpReducer,
    userState: UserReducer
})