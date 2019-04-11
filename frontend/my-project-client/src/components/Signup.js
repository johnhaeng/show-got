import React from 'react';
import { withRouter } from 'react-router-dom';

import { Form, Grid, Header, Segment, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Signup extends React.Component{
  state={
    email:'',
    password: '',
    password_confirmation: '',
  }

  handleChange = (event, {name, value}) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }

  handleSubmit = () => {
    this.props.handleSignup(this.state)
    this.setState({
      email: '',
      password: '',
      password_confirmation: '',
    })
  }


  render(){

    return (
      <div className="signup-form">
        <Grid textAlign='center' style={{ height: '200%' }} verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column style={{ maxWidth: 400 }}>
            <Header as='h2' color='white' textAlign='center' className='head'>
            SIGN UP
            </Header>
            <Segment>
              <Form>
                <Form.Group widths='equal'>
                  <Form.Input fluid icon='envelope' iconPosition='left' value={this.state.email} placeholder='email' name='email' onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input fluid icon='lock' iconPosition='left' value={this.state.password} placeholder='password' type='password' name='password' onChange={this.handleChange}/>
                  <Form.Input fluid icon='lock' iconPosition='left' value={this.state.password_confirmation} placeholder='password again' type='password' name='password_confirmation' onChange={this.handleChange}/>
                </Form.Group>

                <Link to= {'/user'} >
                  <Button color='black'  fluid size='medium' onClick={this.handleSubmit}>SUBMIT</Button>
                </Link>
              </Form>
              </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
    )
  }
}
export default withRouter(Signup);



//
// <div>
//   <h2>Signup Page</h2>
//   <form onSubmit={this.props.handleSubmit}>
//     <input type="text" placeholder="First Name" name="first_name" value={this.state.first_name} onChange={this.handleChange}/>
//     <input type="text" placeholder="Last Name" name="last_name" value={this.state.last_name} onChange={this.handleChange}/>
//     <input type="text" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange}/>
//     <input type="text" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
//     <input type="text" placeholder="Password Confirmation" name="password_confirmation" value={this.state.password_confirmation} onChange={this.handleChange}/>
//     <input type="text" placeholder="Birthday" name="birthday" value={this.state.birthday} onChange={this.handleChange}/>
//     <button>Submit</button>
//   </form>
// </div>
