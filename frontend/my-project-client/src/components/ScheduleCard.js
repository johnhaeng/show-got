import React from 'react';
import { Grid, Image } from 'semantic-ui-react'

class ScheduleCard extends React.Component {

  render() {
    console.log(this.props);

    return (
      <div>
       <Grid columns={5} padded >
         <Grid.Column>
           <h2>{this.props.schedule.name}</h2>
         </Grid.Column>
         <Grid.Column>
           <h2>{this.props.schedule.season_one}</h2>
         </Grid.Column>
         <Grid.Column>
           <h2>{this.props.schedule.show_date_one}</h2>
         </Grid.Column>
         <Grid.Column>
           <h2>{this.props.schedule.season_two}</h2>
         </Grid.Column>
         <Grid.Column>
           <h2>{this.props.schedule.show_date_two}</h2>
         </Grid.Column>
       </Grid>
     </div>

    );
  }

}

export default ScheduleCard;
