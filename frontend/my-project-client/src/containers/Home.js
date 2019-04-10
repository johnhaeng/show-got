import React from 'react';
import { withRouter } from 'react-router-dom'

import HomeCard from '../components/HomeCard'

class Home extends React.Component {

  render() {
    return (
      <div>
        <HomeCard />
      </div>
    );
  }

}

export default withRouter(Home);
