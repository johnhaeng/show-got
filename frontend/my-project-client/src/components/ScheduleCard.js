import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

class ScheduleCard extends React.Component {

  render() {
    return (
      <div>
       <Grid columns={2} padded >
         <Grid.Column>
           <h2>{this.props.schedule.name}</h2>
         </Grid.Column>
         <Grid.Column>
           <h2>{this.props.schedule.show_date}</h2>
         </Grid.Column>
       </Grid>
     </div>

    );
  }

}

export default ScheduleCard;
