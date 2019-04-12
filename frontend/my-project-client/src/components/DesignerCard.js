import React from 'react';
import { Card, Image, Divider, Checkbox } from 'semantic-ui-react'
import DesignerDetails from '../components/DesignerDetails'

class DesignerCard extends React.Component {

  clickHandler = (event) => {
    console.log(event.target);
  }

  render() {
    const { designer } = this.props

    return (
      <Card>
        <Image width="300" height='260' src={designer.img} />
        <Card.Content>
          <Card.Header>{designer.name}</Card.Header>
          <Card.Meta>TOGGLE TO SAVE </Card.Meta>
          <Divider/>
          <Card.Description>
              <Checkbox toggle onClick={(event) => this.clickHandler(event)}/>
            {this.props.schedule.filter(schedulesObj => schedulesObj.id === this.props.designer.show_id)[0].show_date_one}
          </Card.Description>
          <Card.Description>
            <Checkbox toggle fitted onClick={(event) => this.clickHandler(event)}/>
            {this.props.schedule.filter(schedulesObj => schedulesObj.id === this.props.designer.show_id)[0].show_date_two}
          </Card.Description>

        </Card.Content>
      </Card>
    );
  }

}

export default DesignerCard;
