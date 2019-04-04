import React, { Component } from 'react';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      <form>
        <input type='text' placeholder='username' name='username' value={this.state.username} onClick/>
        <input />
      </form>
    );
  }

}

export default Login;
