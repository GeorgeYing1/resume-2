import React from 'react';
import mmm from '../assets/images/3M-logo.png'
import uhg from '../assets/images/optumuhg.png'
import sage from '../assets/images/sage.jpg'
import { Card, Image, Label } from 'semantic-ui-react'

class Work extends React.Component {
  styles={
    logos: {
      width: "200px",
      height: "100px",
    }
  }
  render() {
    return (
      <div>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image src={mmm} style={this.styles.logos}/>
              <Card.Header>
                3M Material Resource Division
              </Card.Header>
              <br/>
              <Card.Meta>
                <Label>Reactor Maintenance</Label>Cordova, IL
              </Card.Meta>
              <Card.Description>
                The goal of the project is to reduce unexpected reactor downtime.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src={uhg} style={this.styles.logos}/>
              <Card.Header>
                UnitedHealthGroup
              </Card.Header>
              <br/>
              <Card.Meta>
                <Label>AppStore Project </Label>Windsor, CT
              </Card.Meta>
              <Card.Description>
                The Appstore is the online portal for employee to install and manage their desktop software.
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src={sage} style={this.styles.logos}/>
              <Card.Header>
                Sage
              </Card.Header>
              <br/>
              <Card.Meta>
                <Label>Sage Match and SageOne </Label>Atlanta, GA
              </Card.Meta>
              <Card.Description>
                ongoing
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}
export default Work;
