import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card, Container, Header } from 'semantic-ui-react'

import DesignerCard from '../components/DesignerCard'
let URL = "http://localhost:4000/api/v1/designers"

class Designer extends React.Component {

  state = {
    designers: []
  }

  componentDidMount () {
    fetch(URL)
      .then(res => res.json())
      .then(designer => this.setState({designers:designer}))
  }

  render() {
    let cityid = parseInt(window.location.href.split("/")[window.location.href.split("/").length-1])
    let filteredArr = this.state.designers.filter(designersObj =>
      designersObj.city_id == cityid
    )

    let arrayOfDesigners = filteredArr.map(designersObj =>
      <DesignerCard key={designersObj.id} designer={designersObj} />
    );
    console.log("filtered: ", filteredArr);
    console.log("arrayOfDesigners: ", arrayOfDesigners);
    console.log(this.state);

    return (
      <Container>
        <Header as='h1' text='center'> DESIGNER YOU COP </Header>
        <Card.Group itemsPerRow={5}>
          {this.state.designers.length > 0 ? arrayOfDesigners : <h5> Loading </h5>}
        </Card.Group>
      </Container>
    );
  }

}

export default withRouter(Designer);
