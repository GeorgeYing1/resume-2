import React from 'react';
import mmm from '../assets/images/3M-logo.png'
import mmmInterns from '../assets/images/3M_interns.jpg'
import mmmInterns2 from '../assets/images/3M_interns2.jpg'
import uhg from '../assets/images/optumuhg.png'
import uhg_dev from '../assets/images/UHG_dev.JPG'
import uhg_frontgate from '../assets/images/UHG_frontgate.JPG'
import dotnet from '../assets/images/dotnet.jpeg'
import sage from '../assets/images/sage.jpg'
import sage_summit from '../assets/images/Sage_summit.png'
import placeholder from '../assets/images/placeholder1.png'
import { Card, Image, Label, Modal, Header, Button,Grid } from 'semantic-ui-react'

class Work extends React.Component {
  state = { MMMOpen: false, UHGOpen: false, SageOpen: false }
  styles={
    logos: {
      width: "200px",
      height: "100px",
    },
    UHGLogo1: {
      height: "200px"
    },
    GTlogo1:{
      width: "100%"
    },
    placeholder: {
      width: "500px",
      height: "100px"
    },
    QLSlogo1: {
      width: "100%",
    }
  }
  close = () => this.setState({ MMMOpen: false, UHGOpen: false, SageOpen: false })
  GoToMMM = () => this.setState({ MMMOpen: true, UHGOpen: false, SageOpen: false })
  GoToUHG =() => this.setState({ MMMOpen: false, UHGOpen: true, SageOpen: false })
  GoToSage = () => this.setState({ MMMOpen: false, UHGOpen: false, SageOpen: true })
  handleCardClick = (e, { name }) => this.setState({ [name]: true })
  render() {
    return (
      <div>
        <Card.Group>
          <Card name='MMMOpen' onClick={this.handleCardClick}>
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
          <Card name='UHGOpen' onClick={this.handleCardClick}>
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
          <Card name='SageOpen' onClick={this.handleCardClick}>
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
        {/* Next is 3M */}
        <Modal open={this.state.MMMOpen} onClose={this.close}>
          <Modal.Header targe='_blank' href='http://www.3m.com/'>3M Manufacturing Engineer Internship</Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image src={mmmInterns} style={this.styles.QLSlogo1}/>

                </Grid.Column>
                <Grid.Column width={8}>
                  <Modal.Description>
                    <Header>3M Company</Header>
                    <p>
                      The 3M Company, formerly known as the Minnesota Mining and Manufacturing Company,
                      is an American multinational conglomerate corporation based in Maplewood, Minnesota.
                    </p>
                    <p>
                      I attended the post-graduation student internship program located in Cordova, IL and met
                      some other interns: Ben, Kelly and Christina whom are very kind and easy-going.
                      I really enjoyed staying with them and had a good time overall.
                    </p>
                  </Modal.Description>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={8}>
                  <p>
                    <strong>Reduce unexpected reactor downtime</strong>
                    <br/>
                    <br/>
                    # Identify and classify downtime causes
                    <br/>
                    # Check reactor's status (T and P profile, Co, etc)
                    <br/>
                    # Observe the maintenance squad's field work
                    <br/>
                    # Collect and make SOP (standard operation procedure)
                  </p>
                  <Image src={mmm} style={this.styles.QLSlogo1}/>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Image src={mmmInterns2} style={this.styles.QLSlogo1}/>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon='checkmark' labelPosition='right' content="Oh, Cool!" onClick={this.close} />
            <Button color='blue' onClick={this.GoToUHG}>
              Go to My UnitedHealth Group Experience
            </Button>
            <Button color='blue' onClick={this.GoToSage}>
              Go to My Sage Experience
            </Button>
          </Modal.Actions>
        </Modal>

        {/* Next is UHG Modal */}
        <Modal open={this.state.UHGOpen} onClose={this.close}>
          <Modal.Header target="_blank" href="http://www.unitedhealthgroup.com/"> UnitedHealth Group Project</Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width={5}>
                  <Image style={this.styles.UHGLogo1} src={uhg} />
                </Grid.Column>
                <Grid.Column width={6}>
                  <Image style={this.styles.UHGLogo1} src={uhg_dev} />
                </Grid.Column>
                <Grid.Column width={5}>
                  <Image style={this.styles.UHGLogo1} src={uhg_frontgate} />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row >
                <Grid.Column width={6}>
                  <Image src={dotnet} />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Header>The AppStore project</Header>
                  <p>It automates the software requesting process for UHG employees which
                    helps to get approval, software licenses, installation workflow</p>
                  <p>I worked with Cally and Uma on: </p>
                  <p>
                    * Experience in the analysis, development and implementation of multi-tier web based applications
                    <br/>
                    * Use C# to realize business logic following MVC pattern in intranet portal called App Store
                    <br/>
                    * Experience in application development following MVC and MVVM pattern
                    <br/>
                    * Developing and consuming web service and web API
                    <br/>
                    * Experience in Development and Programming using SQL Server
                    <br/>
                    * Extensive working experience with Agile(Scrum) methodology,
                    <br/>
                    * Understand business requirement
                    <br/>
                    * Write automated testing script
                    <br/>
                    * Migrate App Store to PMG platform and implement their own workflow
                    <br/>
                    * Create, modify and maintain Sql Server reports
                    <br/>
                    * Create, modify and maintain SSIS packages
                    <br/>
                    * Implement jquery, html and CSS"
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button color='blue' onClick={this.GoToMMM}>
              Go to My 3M Experience
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Oh, Cool!" onClick={this.close} />
            <Button color='blue' onClick={this.GoToSage}>
              Go to My Sage Experience
            </Button>
          </Modal.Actions>
        </Modal>

        {/* Next is Sage Modal */}
        <Modal open={this.state.SageOpen} onClose={this.close}>
          <Modal.Header target="_blank" href="https://www.sage.com/en-us/"> Sage Work </Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Image style={this.styles.GTlogo1} size='medium' src={sage_summit}/>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image wrapped size='medium' src={sage} />
                </Grid.Column>
                <Grid.Column width={10}>
                  <p>
                    The Sage Group plc, commonly known as Sage, is a British multinational enterprise software company headquartered in
                    Newcastle upon Tyne, United Kingdom. It is the world's third-largest supplier of enterprise resource planning software
                    (behind Oracle and SAP), the largest supplier to small businesses.
                  </p>
                  <p>
                    In Sage, I did:
                  </p>
                  <p>
                    * Use react to create and maintain frontend ui.
                    <br/>
                    * Use Ruby on Rails combined with MySQL to create backend of the application.
                    <br/>
                    * Use API to communicate backend and frontend.
                    <br/>
                    * Use github for version control.
                    <br/>
                    * Light touch on angular
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button color='blue' onClick={this.GoToMMM}>
              Back to My 3M Experience
            </Button>
            <Button color='blue' onClick={this.GoToUHG}>
              Go to My UnitedHealth Group Experience
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Oh, Cool!" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
export default Work;
