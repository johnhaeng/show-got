import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card, Container, Header } from 'semantic-ui-react'

import CityCard from '../components/CityCard'
let URL = "http://localhost:4000/api/v1/cities"


class City extends React.Component {

  state = {
    cities: []
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(city => this.setState({cities:city}))
  }

  render() {
    let arrayOfCities = this.state.cities.map(citiesObj =>
      <CityCard key={citiesObj.id} city={citiesObj} selectCity={this.props.selectCity}/>
    );

    return (
      <Container>
        <Header as='h1'text='center'>CITY YOU GO</Header>
        <Card.Group itemsPerRow={3}>
          {this.state.cities.length > 0 ? arrayOfCities : <h5> Loading </h5>}
        </Card.Group>
      </Container>
    )
  }
}

export default withRouter(City);
