import React from 'react';
import { Accordion, Icon, Card, Image, Modal, Header, Button, Grid} from 'semantic-ui-react'
import modeling from '../assets/images/modeling.png'
import chemistry from '../assets/images/chemistry_logo.png'
import equations from '../assets/images/equations-logo.gif'
import reactorDesign from '../assets/images/reactorDesign.png'
import thermodynamics from '../assets/images/thermoDynamics.jpg'
import processControl from '../assets/images/processControl.png'
import Matlab from '../assets/images/MATLAB-Logo.png'
import Python from '../assets/images/python-logo.png'
import Aspen from '../assets/images/aspen-logo.gif'
import periodicTable from '../assets/images/periodic-table.png'
import chemPic from '../assets/images/chempic.jpeg'
import PLanguage from '../assets/images/pLanguage.jpeg'
import frontend from '../assets/images/frontend.png'
import backend from '../assets/images/backend.jpeg'
import tools from '../assets/images/tools.png'

class Skills extends React.Component {
  state = { ModelingOpen: false, ChemistryOpen: false ,EquationsOpen: false, PLanguageOpen: false, FrontendOpen: false, BackendOpen: false, ToolsOpen: false }
  close = () => this.setState({ ModelingOpen: false, ChemistryOpen: false ,EquationsOpen: false, PLanguageOpen: false, FrontendOpen: false, BackendOpen: false, ToolsOpen: false })
  handleCardClick = (e, { name }) => this.setState({ [name]: true })
  styles={
    logos: {
      width: "200px",
      height: "150px",
    }
  }
  render() {
    return (
      <div>
        <div style={{height: "108px"}}>
        </div>
        <Accordion fluid styled style={{textAlign: "left", fontSize: "24px"}}>
            <Accordion.Title>
              <Icon name='dropdown' />
              Chemical Engineering
            </Accordion.Title>
            <Accordion.Content>
              <Card.Group>
                <Card name='ModelingOpen' onClick={this.handleCardClick}>
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
                <Card name='ChemistryOpen' onClick={this.handleCardClick}>
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
                <Card name='EquationsOpen' onClick={this.handleCardClick}>
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
                <Card name='PLanguageOpen' onClick={this.handleCardClick}>
                  <Card.Content>
                    <Image src={PLanguage} style={this.styles.logos}/>
                    <Card.Header>
                     Programming Lanuguages
                    </Card.Header>
                    <br/>
                    <Card.Meta>
                    placeholder
                    </Card.Meta>
                    <Card.Description style={{fontFamily: 'Source Serif Pro serif'}}>
                      ruby, c#, etc
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card name='FrontendOpen' onClick={this.handleCardClick}>
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
                      HTML, CSS, Javascript, etc
                    </Card.Description>
                  </Card.Content>
                </Card>
                <Card name='BackendOpen' onClick={this.handleCardClick}>
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
                <Card name='ToolsOpen' onClick={this.handleCardClick}>
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
                      RubyMine, Viusal Studio
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


          {/* Next is Modal Listing */}
          <Modal open={this.state.ModelingOpen} onClose={this.close}>
            <Modal.Header> Chemical Engineering Modeling</Modal.Header>
            <Modal.Content image>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <Image src={Python} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Header> Used Python in my Master degree research in CO2 adsorption with carbon nanotubes</Header>
                    <p>
                      It aims to solve the adsorption separation problems by controlling the temperature of carbon nanotubes, therefore changing
                      the equilibrium balance thus provide the driving force to adsorb carbon-dioxide in one phase and release them in another.
                    </p>
                    <p> I built model with mass, energy and momentum balances and defined derivatives. Then used a python library called Pyomo to solve this.</p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Header> Used Matlab in my Bachelor degree research and several in class assignments</Header>
                    <p>
                      In my Bachelor degree research, we are studying how life starts with primodial condition. I implemented the model with the mass blances,
                       equilibrium constant as a function of temperature and initial condition to solve the degree of polymerization we can achieve within our project.
                    </p>
                    <p>I got a place as one of authers in the paper "Ester Formation and Hydrolysis during Wet–Dry Cycles: Generation of Far-from-Equilibrium Polymers in a Model Prebiotic Reaction"</p>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Image src={Matlab} />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <Image src={Aspen} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Header> Used Aspen in my senior design project and several in class assignments </Header>
                    <p>
                      We aimed to provide a solution to change demulsifier production, a product help to separate petrolum with water, from batch process to continuous process.
                    </p>
                    <p> Our team used Aspen to simulate the mass and energy flow and identified possible material and energy recycle point.</p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Nope
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
            </Modal.Actions>
          </Modal>


          {/* Next is Chemistry */}
          <Modal open={this.state.ChemistryOpen} onClose={this.close}>
            <Modal.Header> Chemistry! </Modal.Header>
            <Modal.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={6}>
                    <Image src={periodicTable} />
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Header> Start learning Chemitry during middle school </Header>
                    <p>
                      Chemistry is an experience + experimental subject. I found the lab interesting and knowledge widely used.
                    </p>
                    <p>
                      I have fostered my interest in chemistry in my high school. One of achievements is the provincial first award in Nantional Chemistry Competition in China.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={10}>
                    <Header> When I entered Georgia Tech, my major was chemistry </Header>
                    <p>
                      I spent my freshman year in GT studying chemistry: doing labs and researches etc. I took classes including basic, inorganic, organic, and quantum chemistry
                    </p>
                    <p>
                      Several reasons make me change my major to chemical engineering:
                      <br/>
                      * chemical engineering has much more popularity in GT and higher average income than chemistry
                      <br/>
                      * the perception that chemical engineering is chem + math and I also have strong math background
                      <br/>
                      * I have learnt a lot knowledge taught here when I took part in competittion
                    </p>
                  </Grid.Column>
                  <Grid.Column width={6}>
                    <Image src={chemPic} />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Nope
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
            </Modal.Actions>
          </Modal>

          {/* Next is equations */}
          <Modal open={this.state.EquationsOpen} onClose={this.close}>
            <Modal.Header>Chemical Engineering Equations</Modal.Header>
            <Modal.Content>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Image src={thermodynamics} />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header> Thermo is why everything starts </Header>
                    <p>
                      Thermo dynamics when combined with quantum statistics, explains how world runs and where those techniques based on.
                    </p>
                    <p>
                      It includes tons of equations from maxwell to phase equilibrium and so on.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Image src={equations} />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header> Heat, momentum and mass transfer </Header>
                    <p>
                      I would say heat, momentum and mass transfer happens everyday. And linking everyday pheno with complicated differential equations
                      and applying my knowledge to real world problems is even more promising.
                    </p>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Image src={processControl} />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header> Process Control </Header>
                    <p>
                      this topic seems got share between many majors
                    </p>
                    <p>
                      The p, pi, pid, cascade design and control methodology is very eye-opening.
                    </p>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Image src={reactorDesign} />
                  </Grid.Column>
                  <Grid.Column width={4}>
                    <Header> Reactor Design </Header>
                    <p>
                      It's a step that finally apply knowledge to real industry
                    </p>
                    <p>
                      place holder
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Nope
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
            </Modal.Actions>
          </Modal>

          {/* Next is programming Language */}
          <Modal open={this.state.PLanguageOpen} onClose={this.close}>
            <Modal.Header>Programming Lanugages</Modal.Header>
            <Modal.Content>
            <p>
              I am very sad today so don't know what to do now
            </p>
            <p>
              ruby, c#, maybe a bit python?
              <strong>whatever</strong>
            </p>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Nope
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
            </Modal.Actions>
          </Modal>

          {/* Next is FrontEnd */}
          <Modal open={this.state.FrontendOpen} onClose={this.close}>
            <Modal.Header>FrontEnd</Modal.Header>
            <Modal.Content>
            <p>
              I am very sad today so don't know what to do now
            </p>
            <p>
              first html, css, javascript
              maybe cards about node.js, react, a bit angularjs etc?
              <strong>whatever</strong>
            </p>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Nope
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
            </Modal.Actions>
          </Modal>

          {/* Backend  */}
          <Modal open={this.state.BackendOpen} onClose={this.close}>
            <Modal.Header> Backend </Modal.Header>
            <Modal.Content>
            <p>basically same thing</p>
            </Modal.Content>
            <Modal.Actions>
              <Button color='black' onClick={this.close}>
                Nope
              </Button>
              <Button positive icon='checkmark' labelPosition='right' content="Yep, that's me" onClick={this.close} />
            </Modal.Actions>
          </Modal>

          {/* Next is Tools Open */}
          <Modal open={this.state.ToolsOpen} onClose={this.close}>
            <Modal.Header>Place holder for Tools</Modal.Header>
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
export default Skills;
