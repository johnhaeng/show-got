import React from 'react';

class ScheduleCard extends React.Component {

  render() {
    return (
      <div>
        <h2>{this.props.schedule.name}</h2>
        <h2>{this.props.schedule.show_date}</h2>
      </div>
    );
  }

}

export default ScheduleCard;
