import React from 'react';
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class CityCard extends React.Component {

  clickHandler = (event) => {

  }

  render() {
    const { city } = this.props

    return (
      <Link to={`/designers/${this.props.city.id}`}>
        <Card onClick={(event) => this.clickHandler(event)}>
          <Image width="400" height="250" src={city.img} />
          <Card.Content>
            <Card.Header>{city.name}</Card.Header>
            <Card.Meta>FASHION WEEK</Card.Meta>
            <Card.Description>Click for Brands</Card.Description>
          </Card.Content>
        </Card>
      </Link>
    );
  }

}

export default CityCard;
