import React from 'react';
import { withRouter } from 'react-router-dom'
import ScheduleCard from '../components/ScheduleCard'
import DesignerCard from '../components/DesignerCard'



class Schedule extends React.Component {

  // componentDidMount () {
  //   fetch(URL)
  //     .then(res => res.json())
  //     .then(schedules => this.setState({schedules:schedules}))
  // }

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
