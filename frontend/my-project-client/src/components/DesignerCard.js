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
    console.log(this.props)

    let designerCards = this.props.schedule.map(scheduleObj =>
      <DesignerCard key={scheduleObj.id} schedule={scheduleObj}/>
    )

    return (
      <Card onClick={(event) => this.clickHandler(event)}>
        <Image width="300" height='220' src={designer.img} />
        <Card.Content>
          <Card.Header>{designer.name}</Card.Header>
          <Card.Meta>{this.props.showSchedules}</Card.Meta>
          <Divider/>
          <Card.Description>CLICK FOR MORE INFO</Card.Description>
        </Card.Content>
      </Card>
    );
  }

}

export default DesignerCard;
