import React, { Component } from 'react';
import {ControlLabel, FormControl, FormGroup} from 'react-bootstrap';

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      login: "",
      password: "",
      confirmPassword: "",
      birthDate: "",
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  performRegistration() {

  }

  render() {
    return (
      <div className="register_wrap">
        <div className="register">
          <form onSubmit={this.performRegistration}>
            <FormGroup controlId="email" bsSize="large">
              <ControlLabel>Email</ControlLabel>
              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="login" bsSize="large">
              <ControlLabel>Login</ControlLabel>
              <FormControl
                autoFocus
                type="text"
                value={this.state.login}
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="confirmPassword" bsSize="large">
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.confirmPassword}
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="birthDate" bsSize="large">
              <ControlLabel>Birth Date</ControlLabel>
              <FormControl
                type="text"
                value={this.state.birthDate}
                onChange={this.handleChange}/>
            </FormGroup>
          </form>
        </div>
      </div>
    );
  }
}
