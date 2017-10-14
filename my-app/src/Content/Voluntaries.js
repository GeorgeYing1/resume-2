import React from 'react';
import { Card, Image, Modal, Header, Button} from 'semantic-ui-react'
import rah from '../assets/images/rise_against_hunger.jpg'
import sage_build from '../assets/images/sage_build.jpg'
import JABiztown from '../assets/images/JABiztown.jpg'
import ACCA from '../assets/images/ACCA.png'

class Voluntaries extends React.Component {
  state = { QLSOpen: false, NFLSOpen: false, GTOpen: false, ACCAOpen: false }
  close = () => this.setState({ QLSOpen: false, NFLSOpen: false, GTOpen: false, ACCAOpen:false })
  handleCardClick = (e, { name }) => this.setState({ [name]: true })
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
          <Card name='QLSOpen' onClick={this.handleCardClick}>
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
          <Card name='NFLSOpen' onClick={this.handleCardClick}>
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
          <Card name='GTOpen' onClick={this.handleCardClick}>
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
          <Card name='ACCAOpen' onClick={this.handleCardClick}>
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
        <Modal open={this.state.ACCAOpen} onClose={this.close}>
          <Modal.Header>Place holder for ACCA</Modal.Header>
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
export default Voluntaries;
