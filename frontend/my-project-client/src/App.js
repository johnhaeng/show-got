import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, withRouter } from "react-router-dom";


import Designer from './containers/Designer'
import City from './containers/City'
import Schedule from './containers/Schedule'
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import User from './containers/User'
import NavBar from './components/NavBar'
import Spot from './components/Spot'

let URL = "http://localhost:4000/api/v1/shows"

class App extends Component {

  state = {
    user: {},
    userInput: "",
    cities: [],
    designers: {},
    schedules: [],
    selectedCity: {}
  }

  handleLogin = (userInfo) => {
    console.log("login")
      fetch('http://localhost:4000/api/v1/login', {
        method: "POST",
        headers: {
          "content-type": "application/json",
          accepts: "application/json"
        },
        body: JSON.stringify({ user: userInfo })
      }).then(resp => resp.json())
        .then(json => this.setState({user: json.user },
          () => { localStorage.setItem("token", json.jwt);
            this.props.history.push("/user");
        })
      );
    }

  logOut = () => {
    this.setState({ user: {} }, localStorage.clear())
    this.props.history.push("/home");
  }

  handleSignup = (userInfo) => {
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
        this.props.history.push("/home");
      }
    )
  )
  }

  componentDidMount () {
    fetch(URL)
      .then(res => res.json())
      .then(schedules => this.setState({schedules:schedules},() => console.log(this.state.schedules)))
  }

  selectCity = (city) => {
    this.setState({selectedCity:city})
  }

  resetSelectedCity = () => {
    this.setState({selectedCity: {}})
  }

  changeSearchFilter = (event) => {
    this.setState({userInput: event.target.value})
  }

  render() {


    return (
      <div>
        <NavBar user={this.state.user} userInput={this.state.userInput} changeSearchFilter={this.changeSearchFilter} logOut={this.logOut}/>
        <Route exact path="/login" render={() => <Login user={this.state.user} handleLogin={this.handleLogin} />} />
        <Route exact path="/signup" render={() => < Signup user={this.state.user} handleSignup={this.handleSignup  }/>} />
        <Route exact path="/user" render={() => <User user={this.state.user} /> } />

        <Route exact path="/schedule" render={() => <Schedule user={this.state.user} schedules={this.state.schedules}/>}  />

        <Route exact path="/cities/:name" render={() => <City user={this.state.user}/>} />
        <Route exact path="/cities" render={() => <City user={this.state.user} selectCity={this.selectCity} />} />

        <Route exact path="/designers/:cities" render={() =>
          <Designer user={this.state.user} selectedCity={this.state.selectedCity} reset={this.resetSelectedCity}/>} />
        <Route exact path="/designers" render={() =>
          <Designer user={this.state.user} selectedCity={{}} selectDesigner={this.selectDesigner} schedules={this.state.schedules}/>} />

        <Route exact path="/spots" render={() => <Spot user={this.state.user}/>} />
        <Route exact path="/spots/:name" render={() => <Spot user={this.state.user}/>} />

        <Route exact path="/home" render={Home} />
        <Route exact path="/" render={() => (<Redirect to="/home"/>)} />
      </div>
    );
  }
}

export default withRouter(App);

// <Route exact path="/login" render={() => <Login user={this.state.user} handleLogin={this.handleLogin} />} />
// <Route exact path="/home" render={Home} />
