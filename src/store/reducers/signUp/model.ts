export interface ISignUpState {
    loading: boolean;
    error: { error: string } | null | string;
    phoneOrEmail: string;
    fullName: string;
    username: string;
    password: string;
}