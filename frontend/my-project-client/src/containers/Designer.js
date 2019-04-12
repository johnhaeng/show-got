import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card, Container, Header } from 'semantic-ui-react'

import DesignerCard from '../components/DesignerCard'
import Schedule from '../containers/Schedule'
import Search from '../components/Search'

let URL = "http://localhost:4000/api/v1/designers"

class Designer extends React.Component {

  state = {
    designers: [],
    selectedDesigner: {}
  }

  componentDidMount () {
    fetch(URL)
      .then(res => res.json())
      .then(designer => this.setState({designers:designer}))
  }

  selectDesigner = (designer) => {
    this.setState({selectedDesigner: designer})
  }

  render() {

    let arrayOfDesigners = this.state.designers
    if (Object.keys(this.props.selectedCity).length > 0) {
      arrayOfDesigners = this.state.designers.filter(designersObj => designersObj.city_id === this.props.selectedCity.id)
    }

    let designerCards = arrayOfDesigners.map(designersObj =>
      <DesignerCard key={designersObj.id} designer={designersObj} selectDesigner={this.selectDesigner} schedule={this.props.schedules}/>
    )

    return (
      <Container>
        <Header as='h1' text='center'> DESIGNER YOU COP </Header>
        <Card.Group itemsPerRow={4}>
          {this.state.designers.length > 0 ? designerCards : <h5> Loading </h5>}
        </Card.Group>
      </Container>
    );
  }

}

export default withRouter(Designer);











// let cityid = parseInt(window.location.href.split("/")[window.location.href.split("/").length-1])
// let filteredArr = this.state.designers.filter(designersObj =>
//   designersObj.city_id == cityid
// )
// console.log("arrayOfDesigners: ", arrayOfDesigners);
// console.log(this.state);
