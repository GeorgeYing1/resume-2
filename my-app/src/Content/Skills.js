import React from 'react';
import { Accordion, Icon, Card, Image} from 'semantic-ui-react'
import modeling from '../assets/images/modeling.png'
import chemistry from '../assets/images/chemistry_logo.png'
import equations from '../assets/images/equations-logo.gif'
import frontend from '../assets/images/frontend.png'
import backend from '../assets/images/backend.jpeg'
import tools from '../assets/images/tools.png'

class Skills extends React.Component {
  styles={
    logos: {
      width: "200px",
      height: "150px",
    }
  }
  render() {
    // let chemical_engineering = [{
    //   key: 'chemical_engineering',
    //   title: <Label color='red' content="titlehi" />,
    //   content: (
    //   <Message
    //       info
    //       header="headerhi"
    //       content="contenthi"
    //   />)
    // }];
    return (
      <div>
        <div style={{height: "128px"}}>
        </div>
        <Accordion fluid styled style={{textAlign: "left", fontSize: "24px"}}>
            <Accordion.Title>
              <Icon name='dropdown' />
              Chemical Engineering
            </Accordion.Title>
            <Accordion.Content>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Image src={modeling} style={this.styles.logos}/>
                    <Card.Header>
                      Modeling
                    </Card.Header>
                    <br/>
                    <Card.Meta>
                      Using Matlab/Python to build model and simulate lab result
                    </Card.Meta>
                    <Card.Description>
                      placeholder
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image src={chemistry} style={this.styles.logos}/>
                    <Card.Header>
                      Chemistry
                    </Card.Header>
                    <br/>
                    <Card.Meta>
                      Organic, inorganic, lab skills etc
                    </Card.Meta>
                    <Card.Description>
                      placeholder
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image src={equations} style={this.styles.logos}/>
                    <Card.Header>
                      Equations
                    </Card.Header>
                    <br/>
                    <Card.Meta>
                      Differential Equations to solve transfer, thermodynamics and kinetics problems
                    </Card.Meta>
                    <Card.Description>
                      placeholder
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Accordion.Content>
            <Accordion.Title>
              <Icon name='dropdown' />
                Programming
            </Accordion.Title>
            <Accordion.Content>
              <Card.Group>
                <Card>
                  <Card.Content>
                    <Image src={frontend} style={this.styles.logos}/>
                    <Card.Header>
                      Front End
                    </Card.Header>
                    <br/>
                    <Card.Meta>
                    placeholder
                    </Card.Meta>
                    <Card.Description style={{fontFamily: 'Source Serif Pro serif'}}>
                    HTML, CSS, Javascript and popular javascript libraries such as jquery, react etc
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image src={backend} style={this.styles.logos}/>
                    <Card.Header>
                      Back End
                    </Card.Header>
                    <br/>
                    <Card.Meta>
                    placeholder
                    </Card.Meta>
                    <Card.Description>
                      database such as mysql and sql server and related knowledge such as SSIS, SSRS, web serivce and API
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card>
                  <Card.Content>
                    <Image src={tools} style={this.styles.logos}/>
                    <Card.Header>
                      Tools and Framework
                    </Card.Header>
                    <br/>
                    <Card.Meta>
                    placeholder
                    </Card.Meta>
                    <Card.Description>
                      Version Control like: Git, SVN, TFS
                      Agile Tools: VersionOne, Rally, Jira
                      Ruby on Rails, Viusal Stuodio
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Card.Group>
            </Accordion.Content>
            <Accordion.Title>
              <Icon name='dropdown' />
              Communication
            </Accordion.Title>
            <Accordion.Content>
              <p>
                Lanuguages: Chinese (Native), English (Fluent), Japanese (Beginner)
                Able to speak and write professionally and is a team-player
              </p>
            </Accordion.Content>
          </Accordion>

      </div>
    )
  }
}
export default Skills;
