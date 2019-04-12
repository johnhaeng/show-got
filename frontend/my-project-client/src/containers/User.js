import React from 'react';
import { Card, Container, Divider, Grid, Header, Tab} from 'semantic-ui-react'
import Review from '../components/Review'
import Bookmark from '../components/Bookmark'

class User extends React.Component {

  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const name = `${this.props.user.email}`
    const panes = [
     { menuItem: 'DESIGNERS', render: () =>
     <Tab.Pane >
      <Card.Group centered itemsPerRow={3}>
        <h5>DESIGNERS YOU COPPED </h5>
        <Bookmark name="user"/>
          <Review />
        <Bookmark name="user"/>
          <Review />
        <Bookmark name="user"/>
          <Review />
        </Card.Group>
      </Tab.Pane> },

     { menuItem: 'SPOTS', render: () =>
      <Tab.Pane>
        <Grid.Row columns={3}>
        <h5>SPOTS YOU MARKED</h5>
        <Grid.Column>

        </Grid.Column>
        </Grid.Row>
      </Tab.Pane> },
    ]

  return (

    <Container fluid textAlign='center'>
      <Header as='h2'>{name}</Header>
    <Divider />
      <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={panes} />
    </Container>
  )
}
}

export default User;



// { menuItem: 'YOU', render: () =>
// <Tab.Pane style={{ maxWidth: 200 }}>
// <Grid textAlign='center' verticalAlign='middle' columns={3} style={{ height: '80%' }}>
// <Grid.Column style={{ maxWidth: 200 }}>
// <List>
// <List.Content> <h5> YOUR EMAIL </h5> </List.Content>
// <Divider/>
// <List.Content> <h5> {this.props.user.email} </h5> </List.Content>
// </List>
// </Grid.Column>
// </Grid>
// </Tab.Pane> },
