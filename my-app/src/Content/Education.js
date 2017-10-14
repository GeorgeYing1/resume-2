import React from 'react';
//import Header from '../Header/Header.js'
import gt from '../assets/images/gt.jpg'
import nfls from '../assets/images/nfls.jpg'
import qingliangshan from '../assets/images/qingliangshan.jpg'
import { Card, Image, Modal, Header, Button } from 'semantic-ui-react'

class Education extends React.Component {
  state = { QLSOpen: false, NFLSOpen: false, GTOpen: false }
  close = () => this.setState({ QLSOpen: false, NFLSOpen: false, GTOpen: false })
  handleCardClick = (e, { name }) => this.setState({ [name]: true })
  styles={
    logos: {
      width: "200px",
      height: "200px",
      bottom: "10px"
    }
  }
  render() {
    return (
      <div>
        <Card.Group>
          <Card name='QLSOpen' onClick={this.handleCardClick}>
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
          <Card name='NFLSOpen' onClick={this.handleCardClick}>
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
          <Card name='GTOpen' onClick={this.handleCardClick}>
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
export default Education;
