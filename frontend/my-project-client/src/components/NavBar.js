import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'


class NavBar extends React.Component {

  state = {}

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary>
        <Menu.Item as={Link} exact to='/home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}> <h2>ShowSuper</h2> </Menu.Item>
        <Menu.Item> <Input icon='search' placeholder='Search...' /> </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item as={Link} exact to='/cities' name='cities' active={activeItem === 'cities'} onClick={this.handleItemClick}> <h4>CITY</h4>  </Menu.Item>
          <Menu.Item as={Link} exact to="/brands" name='brand' active={activeItem === 'brand'} onClick={this.handleItemClick}> <h4>BRAND </h4></Menu.Item>
          <Menu.Item as={Link} exact to='/restaurants' name='restaurants' active={activeItem === 'restaurants'} onClick={this.handleItemClick}> <h4>RESTAURANT</h4>  </Menu.Item>
          <Menu.Item as={Link} exact to="/signup" name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}> <h4>SIGNUP </h4></Menu.Item>
          <Menu.Item as={Link} exact to="/login" name='login' active={activeItem === 'login'} onClick={this.handleItemClick}> <h4>LOGIN </h4></Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}

export default NavBar;
