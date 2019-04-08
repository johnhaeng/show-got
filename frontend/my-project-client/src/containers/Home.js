import React from 'react';
import { Link, withRouter } from 'react-router-dom'

import Home1 from '../components/Home1'

class Home extends React.Component {

  render() {
    return (
      <div>
        <Home1 />
      </div>
    );
  }

}

export default withRouter(Home);
