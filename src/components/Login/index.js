import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios'

import './inxed.scss';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.email.length < 32
      && this.state.password > 0 && this.state.password.length < 32
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:8091/users/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(function (res) {
        console.log(res)
      })
  };

  render() {
    return (
      <div className="login_wrap">
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup controlId="password" bsSize="large">
              <ControlLabel>Password</ControlLabel>
              <FormControl
                type="password"
                value={this.state.password}
                onChange={this.handleChange}/>
            </FormGroup>
            <Button
              block
              bsSize="large"
              type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
