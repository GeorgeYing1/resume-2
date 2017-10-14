import React from 'react';
import { Card, Image, Modal, Header, Button } from 'semantic-ui-react';
import pcgames from '../assets/images/pcgames.jpg';
import foods from '../assets/images/foods.jpg';
import Go from '../assets/images/Go.jpg';
import badminton from '../assets/images/badminton.jpg';
import books from '../assets/images/books.jpg';


class Hobbies extends React.Component {
  state = { pcgamesOpen: false, boardgamesOpen: false, booksOpen: false, foodsOpen: false, badmintonOpen: false }
  close = () => this.setState({ pcgamesOpen: false, boardgamesOpen: false, booksOpen: false, foodsOpen: false, badmintonOpen: false })
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
          <Card name='pcgamesOpen' onClick={this.handleCardClick}>
            <Card.Content>
              <Image src={pcgames} style={this.styles.logos}/>
              <Card.Header>
                Computer Games
              </Card.Header>
              <Card.Meta>
                Dota2, Heros of the storm, Starcraft2, Pokemon, etc
              </Card.Meta>
              <Card.Description>
                placeholder
              </Card.Description>
            </Card.Content>
          </Card>
          <Card name='boardgamesOpen' onClick={this.handleCardClick}>
            <Card.Content>
              <Image src={Go} style={this.styles.logos}/>
              <Card.Header>
                Board Games
              </Card.Header>
              <Card.Meta>
                Go, Chinese Chess
              </Card.Meta>
              <Card.Description>
                placeholder
              </Card.Description>
            </Card.Content>
          </Card>
          <Card name='booksOpen' onClick={this.handleCardClick}>
            <Card.Content>
              <Image src={books} style={this.styles.logos}/>
              <Card.Header>
                Books (Novel)
              </Card.Header>
              <Card.Meta>
                placeholder
              </Card.Meta>
              <Card.Description>
                placeholder
              </Card.Description>
            </Card.Content>
          </Card>
          <Card name='foodsOpen' onClick={this.handleCardClick}>
            <Card.Content>
              <Image src={foods} style={this.styles.logos}/>
              <Card.Header>
                Delicious Foods
              </Card.Header>
              <Card.Meta>
                Great taste, great look and great smell
              </Card.Meta>
              <Card.Description>
                placeholder
              </Card.Description>
            </Card.Content>
          </Card>
          <Card name='badmintonOpen' onClick={this.handleCardClick}>
            <Card.Content>
              <Image src={badminton} style={this.styles.logos}/>
              <Card.Header>
                It's a masterpiece between force and art
              </Card.Header>
              <Card.Meta>
                Go, go, go
              </Card.Meta>
              <Card.Description>
                placeholder
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
        <Modal open={this.state.pcgamesOpen} onClose={this.close}>
          <Modal.Header>Place holder for pcgames</Modal.Header>
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
        <Modal open={this.state.boardgamesOpen} onClose={this.close}>
          <Modal.Header> Place holder for board games </Modal.Header>
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
        <Modal open={this.state.foodsOpen} onClose={this.close}>
          <Modal.Header>Place holder for food</Modal.Header>
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
        <Modal open={this.state.booksOpen} onClose={this.close}>
          <Modal.Header>Place holder for book</Modal.Header>
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
        <Modal open={this.state.badmintonOpen} onClose={this.close}>
          <Modal.Header>Place holder for badminton</Modal.Header>
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
export default Hobbies;
