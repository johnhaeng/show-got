import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Card, Icon, Image, Container, Header } from 'semantic-ui-react'

class City extends React.Component {

  render() {
    return (

      <Container>
      <Header as='h1' text='center'> CITY YOU GO </Header>
      <Card.Group itemsPerRow={3}>
        <Card>
          <Image width="400" height="250" src="https://dazedimg-dazedgroup.netdna-ssl.com/900/azure/dazed-prod/1150/5/1155709.jpg"/>
          <Card.Content>
            <Card.Header>LONDON</Card.Header>
            <Card.Meta>FASHION WEEK</Card.Meta>
            <Card.Description>Click to see brands</Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image width="400" height="250"  src= "https://anothermanimg-dazedgroup.netdna-ssl.com/1600/azure/anotherman-prod/360/8/368728.jpg" />
          <Card.Content>
            <Card.Header>MILANO</Card.Header>
            <Card.Meta>FASHION WEEK</Card.Meta>
            <Card.Description>Click to access schedules</Card.Description>
          </Card.Content>
        </Card>

        <Card>
        <Image width="400" height="250"  src= "https://adamkatzsinding.com/wp-content/uploads/2017/02/Le-21eme-Adam-Katz-Sinding-Backstage-Y-Project-Paris-Fashion-Week-Mens-Fall-Winter-2017-2018_AKS5016.jpg"  />
        <Card.Content>
        <Card.Header>PARIS</Card.Header>
        <Card.Meta> FASHION WEEK</Card.Meta>
        <Card.Description>Click to access schedules</Card.Description>
        </Card.Content>
        </Card>

        <Card>
          <Image width="400" height="250" src= "https://media.gq.com/photos/5b46185d5a2c720ba597dd4c/16:9/w_1600%2Cc_limit/180710_NYFWMSS19_DR17-8993.jpg"  />
          <Card.Content>
            <Card.Header>NEW YORK</Card.Header>
            <Card.Meta> FASHION WEEK</Card.Meta>
            <Card.Description>Click to access schedules</Card.Description>
          </Card.Content>
        </Card>


        <Card>
          <Image width="400" height="250"  src= "https://image.ytn.co.kr/general/jpg/2015/1028/201510281402548932_d.jpg" />
          <Card.Content>
            <Card.Header>SEOUL</Card.Header>
            <Card.Meta> FASHION WEEK</Card.Meta>
            <Card.Description>Click to access schedules</Card.Description>
          </Card.Content>
        </Card>

        <Card>
          <Image width="400" height="250"  src= "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F03%2Fambush-fall-winter-2018-runway-show-backstage-10.jpg?q=90&w=2800&cbr=1&fit=max" />
          <Card.Content>
            <Card.Header>TOKYO</Card.Header>
            <Card.Meta> FASHION WEEK</Card.Meta>
            <Card.Description>Click to access schedules</Card.Description>
          </Card.Content>
        </Card>

      </Card.Group>
      </Container>
    )
  }
}

export default withRouter(City);
