import React from 'react';
import { Card, Image} from 'semantic-ui-react'
import rah from '../assets/images/rise_against_hunger.jpg'
import sage_build from '../assets/images/sage_build.jpg'
import JABiztown from '../assets/images/JABiztown.jpg'
import ACCA from '../assets/images/ACCA.png'

class Voluntaries extends React.Component {
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
              <Image src={rah} style={this.styles.logos}/>
              <Card.Header>
                Rise Against Hunger
              </Card.Header>
              <br/>
              <Card.Meta>
                Sept 14 2017
              </Card.Meta>
              <Card.Description>
                placeholder for link
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src={JABiztown} style={this.styles.logos}/>
              <Card.Header>
                Junior Achievement BizTown
              </Card.Header>
              <br/>
              <Card.Meta>
                May 9 2017
              </Card.Meta>
              <Card.Description>
                placeholder for link
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src={sage_build} style={this.styles.logos}/>
              <Card.Header>
                Sage Build
              </Card.Header>
              <br/>
              <Card.Meta>
                March 24 2017
              </Card.Meta>
              <Card.Description>
                placeholder for link
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image src={ACCA} style={this.styles.logos}/>
              <Card.Header>
                ACCA
              </Card.Header>
              <br/>
              <Card.Meta>
                July 24 2012
              </Card.Meta>
              <Card.Description>
                placeholder for link
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}
export default Voluntaries;
