import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, withRouter } from "react-router-dom";

import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import City from './components/City'
import Brand from './components/Brand'


class App extends Component {

  state = {
    user: {}
  }

  handleLogin = (userInfo) => {
      fetch('http://localhost:4000/api/v1/users', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ user: userInfo })
      }).then(resp => resp.json())
        .then(json => this.setState({user: json.user },
          () => { localStorage.setItem("token", json.jwt);
            this.props.history.push("/journal");
        })
      );
    }

  handleLogin = (event, userInfo) => {
    event.preventDefault();
    console.log('submitted')

    this.setState({user: [...this.state.user, userInfo]})
  }

  render() {
    return (
      <div>
        <NavBar user={this.state.user} />
        <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin} />} />
        <Route exact path="/signup" render={Signup} />
        <Route exact path="/city" render={City} />
        <Route exact path="/cities" render={City} />
        <Route exact path="/brand" render={Brand} />
        <Route exact path="/brands" render={Brand} />
        <Route exact path="/home" render={Home} />
        <Route exact path="/" render={() => (<Redirect to="/home"/>)} />
      </div>
    );
  }
}

export default withRouter(App);

// <Route exact path="/login" render={() => <Login user={this.state.user} handleLogin={this.handleLogin} />} />
// <Route exact path="/home" render={Home} />
