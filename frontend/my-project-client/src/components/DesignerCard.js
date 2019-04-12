import React from 'react';
import { Card, Image, Divider } from 'semantic-ui-react'
import DesignerDetails from '../components/DesignerDetails'

class DesignerCard extends React.Component {

  clickHandler = () => {
    // this.props.selectDesigner(this.props.designer)
    // this.props.history.push(`/designers/${this.props.designer.name}`)
  }

  render() {
    const { designer } = this.props
    // console.log("Designer show_id:", this.props.designer.show_id)
    // console.log("Schedule: ", this.props.schedule.filter(schedulesObj => schedulesObj.id === this.props.designer.show_id)[0])

    return (
      <Card onClick={(event) => this.clickHandler(event)}>
        <Image width="300" height='220' src={designer.img} />
        <Card.Content>
          <Card.Header>{designer.name}</Card.Header>
          <Card.Meta>CLICK FOR MORE INFO</Card.Meta>
          <Divider/>
          <Card.Description>{this.props.schedule.filter(schedulesObj => schedulesObj.id === this.props.designer.show_id)[0].show_date_one} & {this.props.schedule.filter(schedulesObj => schedulesObj.id === this.props.designer.show_id)[0].show_date_two}</Card.Description>
        </Card.Content>
      </Card>
    );
  }

}

export default DesignerCard;
