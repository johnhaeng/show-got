import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CityCard extends React.Component {

  clickHandler = (event) => {
    this.props.selectCity(this.props.city)
  }

  render() {
    const { city } = this.props

    return (
        <Card onClick={(event) => this.clickHandler(event)}>
          <Link to={`/designers/${this.props.city.id}`} >
          <Image width="400" height="250" src={city.img} />
          <Card.Content>
            <Card.Header>{city.name.toUpperCase()}</Card.Header>
            <Card.Meta>fashion dates</Card.Meta>
            <Card.Description>CLICK FOR BRANDS</Card.Description>
          </Card.Content>
          </Link>
        </Card>
    );
  }

}

export default CityCard;
