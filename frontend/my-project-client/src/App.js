import React, { Component } from 'react';
import './App.css';
import { Route, Redirect, withRouter } from "react-router-dom";

import Designer from './containers/Designer'
import DesignerCard from './components/DesignerCard'
import City from './containers/City'
import CityCard from './components/CityCard'
import Home from './containers/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import NavBar from './components/NavBar'
import Spot from './components/Spot'
import Schedule from './components/Schedule'

class App extends Component {

  state = {
    user: {},
    cities: [],
    designers: [],
    selectedCity: {},
    userInput: ""
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
            this.props.history.push("/home");
        })
      );
    }

  handleLogin = (event, userInfo) => {
    event.preventDefault();
    this.setState({user: [...this.state.user, userInfo]})
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
        <NavBar user={this.state.user} userInput={this.state.userInput} changeSearchFilter={this.changeSearchFilter}/>
        <Route exact path="/login" render={() => <Login handleLogin={this.handleLogin} />} />
        <Route exact path="/signup" render={() => < Signup />} />
        <Route exact path="/schedules" render={() => <Schedule />} />
        <Route exact path="/cities/:name" render={() => <City  />} />
        <Route exact path="/cities" render={() => <City selectCity={this.selectCity}/>} />
        <Route exact path="/designers/:name" render={() => < Designer selectedCity={this.state.selectedCity} reset={this.resetSelectedCity}/>} />
        <Route exact path="/designers" render={() => < Designer selectedCity={{}}/>} />
        <Route exact path="/spots" render={() => <Spot />} />
        <Route exact path="/spots/:name" render={() => <Spot />} />
        <Route exact path="/home" render={Home} />
        <Route exact path="/" render={() => (<Redirect to="/home"/>)} />
      </div>
    );
  }
}

export default withRouter(App);

// <Route exact path="/login" render={() => <Login user={this.state.user} handleLogin={this.handleLogin} />} />
// <Route exact path="/home" render={Home} />
