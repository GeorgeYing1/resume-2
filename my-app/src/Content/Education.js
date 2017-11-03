import React from 'react';
//import Header from '../Header/Header.js'
import gt from '../assets/images/gt.jpg'
import nfls from '../assets/images/nfls.jpg'
import qingliangshan from '../assets/images/qingliangshan.jpg'
import GT_together from '../assets/images/GT_together.jpg'
import GT_companile from '../assets/images/GT_companile.jpg'
import NFLS_together from '../assets/images/NFLS_together.jpg'
import NFLS_frontgate from '../assets/images/NFLS_frontgate.jpg'
import QLS_together from '../assets/images/QLS_together.jpg'
import placeholder from '../assets/images/placeholder1.png'
import { Card, Image, Modal, Header, Button, Popup, Grid } from 'semantic-ui-react'

class Education extends React.Component {
  state = { QLSOpen: false, NFLSOpen: false, GTOpen: false }
  close = () => this.setState({ QLSOpen: false, NFLSOpen: false, GTOpen: false })
  handleCardClick = (e, { name }) => this.setState({ [name]: true })
  GoToQLS = () => this.setState({ QLSOpen: true, NFLSOpen: false, GTOpen: false })
  GoToNFLS =() => this.setState({ QLSOpen: false, NFLSOpen: true, GTOpen: false })
  GoToGT = () => this.setState({ QLSOpen: false, NFLSOpen: false, GTOpen: true })
  styles={
    logos: {
      width: "200px",
      height: "200px",
      bottom: "10px"
    },
    NFLSlogos1: {
      width: "200px",
      height: "200px",
    },
    NFLSlogos2: {
      width: "400px",
      height: "300px",
    },
    GTlogo1:{
      width: "100%"
    },
    placeholder: {
      width: "500px",
      height: "100px"
    },
    QLSlogo1: {
      width: "90%",
    }
  }
  render() {
    return (
      <div>
        {/* <Popup id='nflsPopup' trigger={<Button/>} content={'Directly from wiki'}/> */}

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
        {/* Next is QLS */}
        <Modal open={this.state.QLSOpen} onClose={this.close}>
          <Modal.Header>Qing Liang Shan Primary School</Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Column width={10}>
                <Image src={QLS_together} style={this.styles.QLSlogo1}/>
              </Grid.Column>
              <Grid.Column width={6}>
                <Modal.Description>
                  <Header>QingLiangShan Primary School</Header>
                  <p>The school is no longer there but it lives forever in my memory. It's the place I start learning English,
                    calligraphy, and soccer. I still have contact with some of my classmates! By the way, from 2nd grade and so on,
                    I live cross street to the school which makes my commute very convenient.
                  </p>
                </Modal.Description>
              </Grid.Column>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button positive icon='checkmark' labelPosition='right' content="Oh, Cool!" onClick={this.close} />
            <Button color='black' onClick={this.GoToNFLS}>
              Go to My Nanjing Foreign Language School Experience
            </Button>
            <Button color='black' onClick={this.GoToGT}>
              Go to My Georgia Tech Experience
            </Button>
          </Modal.Actions>
        </Modal>

        {/* Next is NFLS Modal */}
        <Modal open={this.state.NFLSOpen} onClose={this.close}>
          <Modal.Header target="_blank" href="http://www.nfls.com.cn/"> Nanjing Foreign Language School </Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Image  style={this.styles.NFLSlogos1} src={nfls} />
                </Grid.Column>
                <Grid.Column width={11}>
                  <p id='NFLS_ShortExplanation'>Nanjing Foreign Language School, (aka: NFLS, 南京外国语学校, 南外), is a middle and high school located
                    in Nanjing, Jiangsu, People's Republic of China. It's one of the best high schools in the country, renowned for its
                    talented students and quality eduation
                  </p>
                  <Image style={this.styles.placeholder} src={placeholder}/>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row >
                <Grid.Column width={8}>
                  <Image  style={this.styles.NFLSlogos2} src={NFLS_frontgate} />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Image  style={this.styles.NFLSlogos2} src={NFLS_together} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.GoToQLS}>
              Back to My Qingliangshan Experience
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Oh, Cool!" onClick={this.close} />
            <Button color='black' onClick={this.GoToGT}>
              Go to My Georgia Tech Experience
            </Button>
          </Modal.Actions>
        </Modal>

        {/* Next is GT Modal */}
        <Modal open={this.state.GTOpen} onClose={this.close}>
          <Modal.Header target="_blank" href="http://www.gatech.edu/">Georgia Tech</Modal.Header>
          <Modal.Content>
            <Grid>
              <Grid.Row>
                <p>The Georgia Institute of Technology (commonly referred to as Georgia Tech,
                   Tech, or GT) is a public research university in Atlanta, Georgia, in the United States.
                  It is a part of the University System of Georgia and has satellite campuses in Savannah, Georgia;
                  Metz, France; Athlone, Ireland; Shenzhen, China; and Singapore.</p>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={6}>
                  <Image wrapped size='medium' src={GT_together} />
                </Grid.Column>
                <Grid.Column width={10}>
                  <Image style={this.styles.GTlogo1} size='medium' src={GT_companile}/>
                  <br/>
                  <br/>
                  <Image style={this.styles.placeholder} src={placeholder}/>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button color='black' onClick={this.GoToQLS}>
              Back to My Qingliangshan Experience
            </Button>
            <Button color='black' onClick={this.GoToNFLS}>
              Go to My Nanjing Foreign Language School Experience
            </Button>
            <Button positive icon='checkmark' labelPosition='right' content="Oh, Cool!" onClick={this.close} />
          </Modal.Actions>
        </Modal>
      </div>
    )
  }
}
export default Education;
