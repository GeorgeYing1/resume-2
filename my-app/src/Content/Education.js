import React from 'react';
//import Header from '../Header/Header.js'
import gt from '../assets/images/gt.jpg'
import nfls from '../assets/images/nfls.jpg'
import qingliangshan from '../assets/images/qingliangshan.jpg'
import { Card, Image } from 'semantic-ui-react'

class Education extends React.Component {
  styles={
    logos: {
      width: "200px",
      height: "200px",
    }
  }
  render() {
    return (
      <div>
        <Card.Group>
          <Card>
            <Card.Content>
              <Image src={qingliangshan} style={this.styles.logos}/>
              <Card.Header>
                Qingliangshan Primary School
              </Card.Header>
              <Card.Meta>
                Primary School
              </Card.Meta>
              <Card.Description>
                Let it be
              </Card.Description>
              </Card.Content>
            </Card>
          <Card>
            <Card.Content>
              <Image src={nfls} style={this.styles.logos}/>
              <Card.Header>
                Nanjing Foreign Language School
              </Card.Header>
              <Card.Meta>
                Middle School and High School
              </Card.Meta>
              <Card.Description>
                Best school in the city possibly best in the China
              </Card.Description>
              </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src={gt} style={this.styles.logos}/>
              <Card.Header>
                Georgia Tech
              </Card.Header>
              <Card.Meta>
                Bachelor and Master
              </Card.Meta>
              <Card.Description>
                GT, MIT in the South?
                <br/>
                <strong>Nah, MIT is GT in the North</strong>
              </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
      </div>
    )
  }
}
export default Education;
