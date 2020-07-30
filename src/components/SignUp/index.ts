import React, { useState } from 'react';
import { SignUpView } from './SignUpView'
import { SignUpViewProps } from './model';
import { useDispatch } from 'react-redux';
import { signUpFieldChange } from '../../store/actions/signUp/actions';


export const SignUp: React.FC = () => {
    const dispatch = useDispatch();
    
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = evt.target;
        dispatch(signUpFieldChange(name, value));
    }

    const stateProps: SignUpViewProps = {
        handleChange
    }

    return SignUpView(stateProps);
} 