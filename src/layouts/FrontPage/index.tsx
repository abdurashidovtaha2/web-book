import React from 'react';
import { SignUp } from '../../components/SignUp';
import { NetworkLogo } from '../../components/NetworkLogo';
import { GetApp } from '../../components/GetApp';
import { Footer } from '../../components/Footer';
import { Router, Switch, Route } from 'react-router-dom';
import { Login } from '../../components/LogIn';
import history from '../../history';
// import * as style from './index.css';

const FrontPage: React.FC = () => {
    return (
        <>
            <NetworkLogo />
            <Router history={history}>
                <Switch>
                    <Route exact path='/' component={SignUp}/>  
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </Router>
            <GetApp />
            <Footer />
        </>
    )
}

export default FrontPage;
