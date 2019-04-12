import React from 'react';
import { withRouter } from 'react-router-dom'
import ScheduleCard from '../components/ScheduleCard'


class Schedule extends React.Component {

  render() {
    let arrayOfSchedules = this.props.schedules.map(schedulesObj =>
      <ScheduleCard key={schedulesObj.id} schedule={schedulesObj}/>
    );

    return (
       <div>
        {arrayOfSchedules}
      </div>
    );
  }

}

export default withRouter(Schedule);
