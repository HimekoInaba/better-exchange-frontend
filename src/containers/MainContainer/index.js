import React, { Component } from 'react';
import AppContainer from '../AppContainer';
import AuthContainer from '../AuthContainer';

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    let isLoggedIn = false;
    return (
      <div className="main_wrap">
        <div className="main">
          {isLoggedIn ? <AppContainer/> : <AuthContainer/>}
        </div>
      </div>
    );
  }
}
