import React, { useState } from 'react';
import { LogInView } from './LogInView';
import { LogInViewProps } from './model';
import { useDispatch, useSelector } from 'react-redux';
import { logInFieldChange, doLogInRequest } from '../../store/actions/logIn/actions';
import { IRootState } from '../../store';

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const { username, password } = useSelector((state: IRootState) => state.logInState);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = evt.target;
        dispatch(logInFieldChange(name, value));    
    }
    const handleSubmit = (evt: React.FormEvent): void => {
        evt.preventDefault();
        dispatch(doLogInRequest(username, password));
    }

    const stateProps: LogInViewProps = {
        handleChange,
        handleSubmit
    }

    return LogInView(stateProps);
}
