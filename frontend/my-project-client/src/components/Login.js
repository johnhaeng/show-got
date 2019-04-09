import React from 'react';
import { withRouter } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment} from 'semantic-ui-react';

class Login extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = () => {
    this.props.handleLogin(this.state)
    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Log In Page</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' placeholder='username' name='username' value={this.state.username} onChange={this.handleChange}/>
          <input type='text' placeholder='password' name='password' password={this.state.password} onChange={this.handleChange}/>
          <button>Login</button>
        </form>
      </div>
    );
  }

}

export default withRouter(Login)
