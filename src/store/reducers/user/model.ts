export interface IUserState {
    loading: boolean;
    error: null | string;
    token: null | string;
    user: IUser
}

export interface IUser {
    name: string;
    surname: string;
}