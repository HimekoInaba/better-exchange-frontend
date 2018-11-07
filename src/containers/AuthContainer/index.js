import React, { Component } from 'react';
import Login from '../../components/Login';
import Register from '../../components/Register';

export default class AuthContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className="auth_wrap">
        <div className="auth">
          <div className="auth_login">
            <Login/>
          </div>
          <div className="auth_register">
            <Register/>
          </div>
        </div>
      </div>
    );
  }
}
