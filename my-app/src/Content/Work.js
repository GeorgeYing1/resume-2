import React from 'react';
import mmm from '../assets/images/3M-logo.png'
import uhg from '../assets/images/optumuhg.png'
import sage from '../assets/images/sage.jpg'
import { Card, Image, Label, Modal, Header, Button } from 'semantic-ui-react'

class Work extends React.Component {
  state = { QLSOpen: false, NFLSOpen: false, GTOpen: false }
  styles={
    logos: {
      width: "200px",
      height: "100px",
    }
  }
  close = () => this.setState({ QLSOpen: false, NFLSOpen: false, GTOpen: false })
  handleCardClick = (e, { name }) => this.setState({ [name]: true })
  render() {
    return (
      <div>
        <Card.Group>
          <Card name='QLSOpen' onClick={this.handleCardClick}>
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
          <Card name='NFLSOpen' onClick={this.handleCardClick}>
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
          <Card name='GTOpen' onClick={this.handleCardClick}>
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
        <Modal open={this.state.QLSOpen} onClose={this.close}>
          <Modal.Header>Place holder for Qing Liang Shan</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
          </Modal.Actions>
        </Modal>
        <Modal open={this.state.NFLSOpen} onClose={this.close}>
          <Modal.Header> Place holder for NFLS </Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
          </Modal.Actions>
        </Modal>
        <Modal open={this.state.GTOpen} onClose={this.close}>
          <Modal.Header>Place holder for GT</Modal.Header>
          <Modal.Content image>
            <Image wrapped size='medium' src='/assets/images/avatar/large/rachel.png' />
            <Modal.Description>
              <Header>Default Profile Image</Header>
              <p>We've found the following gravatar image associated with your e-mail address.</p>
              <p>Is it okay to use this photo?</p>
            </Modal.Description>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.close}>
              Nope
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
export default Work;
