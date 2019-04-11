import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card, Image, Divider } from 'semantic-ui-react'

class CityCard extends React.Component {

  clickHandler = (event) => {
    this.props.selectCity(this.props.city)
    this.props.history.push(`/designers/${this.props.city.name.toLowerCase()}`)
  }

  render() {
    const { city } = this.props

    return (
        <Card onClick={(event) => this.clickHandler(event)} style={{ textDecoration: 'none', color: 'black' }} >
        <Image width="400" height="275" src={city.img} />

          <Card.Content>
            <Card.Header>{city.name.toUpperCase()}</Card.Header>
            <Card.Meta> </Card.Meta>
            <Divider/>
            <Card.Description textAlign='bottom'>CLICK FOR BRANDS AND MORE INFO</Card.Description>
          </Card.Content>

        </Card>
    );
  }

}

export default withRouter(CityCard);
