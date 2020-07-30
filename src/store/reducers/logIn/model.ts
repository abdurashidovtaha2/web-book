export interface ILogInState {
    loading: boolean;
    error: { error: string } | null | string;
    username: string;
    password: string;
}