import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import AppContainer from '../containers/AppContainer';
import AuthContainer from "../containers/AuthContainer";

let store = {
    isLogged: true,
};

const Routes = () => (
    <BrowserRouter>
        <Switch>
            {store.isLogged ?
                <Route path="/" component={AppContainer}/> :
                <Route path="/" component={AuthContainer} />}
        </Switch>
    </BrowserRouter>
);

export default connect(state => {
    return {
        user: state.user,
    };
})(Routes);
