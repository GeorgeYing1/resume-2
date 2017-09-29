import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import pcgames from '../assets/images/pcgames.jpg';
import foods from '../assets/images/foods.jpg';
import Go from '../assets/images/Go.jpg';
import badminton from '../assets/images/badminton.jpg';
import books from '../assets/images/books.jpg';


class Hobbies extends React.Component {
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
          <Card>
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
          <Card>
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
          <Card>
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
          <Card>
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
      </div>
    )
  }
}
export default Hobbies;
