import React from 'react';
import { withRouter } from 'react-router-dom';

class Signup extends React.Component {

  state={
    first_name: '',
    last_name: '',
    username: '',
    password: '',
    password_confirmation: '',
    birthday: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Signup Page</h2>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
          <input type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
          <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
          <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
          <input type="text" placeholder="Password Confirmation" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange}/>
          <input type="text" placeholder="Birthday" name="birthday" value={this.state.birthday} onChange={this.handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }

}

export default withRouter(Signup);
