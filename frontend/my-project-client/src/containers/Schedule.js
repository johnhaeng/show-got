import React from 'react';
import { withRouter } from 'react-router-dom'
import ScheduleCard from '../components/ScheduleCard'

let URL = "http://localhost:4000/api/v1/shows"


class Schedule extends React.Component {

  state = {
    schedules: []
  }

  componentDidMount () {
    fetch(URL)
      .then(res => res.json())
      .then(schedules => this.setState({schedules:schedules}))
  }

  render() {
    let arrayOfSchedules = this.state.schedules.map(schedulesObj =>
      <ScheduleCard key={schedulesObj.id} schedule={schedulesObj}/>
    );

    console.log(this.state);
    return (
       <div>
        {arrayOfSchedules}
      </div>
    );
  }

}

export default withRouter(Schedule);
