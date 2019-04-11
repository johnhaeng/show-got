import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Button, Form, Grid, Header, Message, Segment, Image} from 'semantic-ui-react';

class Login extends React.Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleLogin(this.state)
    this.setState({
      email: '',
      password: ''
    })
  }

  render() {
    // console.log(this.state)
    return (
      <div className="login-form">
          <Grid textAlign='center' style={{ height: '200%' }} verticalAlign='middle' className='cform'>
            <Grid.Row>
              <Grid.Column style={{ maxWidth: 400 }}>
                <Header as='h2' color='black' textAlign='center' className='head'>
                  <Image /> ShowSuper <Image />
                </Header>
                <Form size='medium' >
                  <Segment stacked>
                    <Form.Input fluid icon='envelope' iconPosition='left' value={this.state.email} placeholder='EMAIL' name='email' onChange={this.handleChange}/>
                    <Form.Input
                    fluid
                    icon='lock'
                    value={this.state.password}
                    iconPosition='left'
                    placeholder='PASSWORD'
                    type='password'
                    name='password'
                    onChange={this.handleChange}
                    />

                  <Button color='black' fluid size='small' onClick={this.handleSubmit}> LOGIN </Button>
                </Segment>
              </Form>
              <Message> NEW? <Link to="/signup">SIGN UP</Link> </Message>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }

}

export default withRouter(Login)
