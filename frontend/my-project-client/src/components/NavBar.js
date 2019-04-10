import React  from 'react';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react'


class NavBar extends React.Component {

  state = {
    userInput: ""
  }

  handleItemClick = (e, { name }) =>
    this.setState({ activeItem: name })

  handleSearch = (event) => {
    console.log(event.target);
    this.setState({userInput: event.target.value})
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu secondary>
        <Menu.Item as={Link} exact to='/home' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}> <h2>ShowSuper</h2> </Menu.Item>
        <Menu.Item>
          <Input icon='search' placeholder='Search Brands' value={this.userInput} onSearchChange={(event) => this.handleSearch(event)}/>
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item as={Link} exact to='/cities' name='cities' active={activeItem === 'cities'} onClick={this.handleItemClick}> <h4>CITY</h4>  </Menu.Item>
          <Menu.Item as={Link} exact to="/designers" name='desginer' active={activeItem === 'desginer'} onClick={this.handleItemClick}> <h4>DESIGNER </h4></Menu.Item>
          <Menu.Item as={Link} exact to='/schedule' name='schedule' active={activeItem === 'schedule'} onClick={this.handleItemClick}> <h4>SCHEDULE</h4>  </Menu.Item>
          <Menu.Item as={Link} exact to='/spots' name='spot' active={activeItem === 'spot'} onClick={this.handleItemClick}> <h4>SPOT </h4>  </Menu.Item>
          <Menu.Item as={Link} exact to="/signup" name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}> <h4>SIGNUP </h4></Menu.Item>
          <Menu.Item as={Link} exact to="/login" name='login' active={activeItem === 'login'} onClick={this.handleItemClick}> <h4>LOGIN </h4></Menu.Item>
        </Menu.Menu>

      </Menu>
    )
  }
}

export default NavBar;
