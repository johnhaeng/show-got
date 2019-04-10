import React from 'react';
import { Card, Image } from 'semantic-ui-react'


class DesignerCard extends React.Component {


  clickHandler = (event) => {
    
  }



  render() {
    const { designer } = this.props

    return (
      <Card onClick={(event) => this.clickHandler(event)}>
        <Image width="250" height='180' src={designer.img} />
        <Card.Content>
          <Card.Header>{designer.name}</Card.Header>
          <Card.Meta> SHOW DATE</Card.Meta>
          <Card.Description>  CLICK </Card.Description>
        </Card.Content>
      </Card>
    );
  }

}

export default DesignerCard;
