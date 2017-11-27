import React from 'react';
import {
  Grid,
  List,
  Card,
  Table,
  Icon,
  Label
} from 'semantic-ui-react'
class Games extends React.Component {
  state = {
    firstCard: 1,
    firstCardAvailable: true,
    secondCard: 2,
    secondCardAvailable: true,
    thirdCard: 3,
    thirdCardAvailable: true,
    fourthCard: 4,
    fourthCardAvailable: true,
    bottomFirstCard: 0,
    bottomFirstCardAvailable: '',
    bottomSecondCard: 0,
    bottomSecondCardAvailable: '',
    bottomThirdCard: 0,
    bottomThirdCardAvailable: '',
    bottomFourthCard: 0,
    bottomFourthCardAvailable: '',
    toggle1: '+',
    toggle2: '-',
    toggle3: '*',
    result: '0'
  }
  handletoggleClick = (e, {name}) => {
    var toggleCalc = ['+', '-', '*', '/'];
    var togNum = toggleCalc.indexOf(this.state[name]);
    if (togNum < (toggleCalc.length - 1)) {
      togNum = togNum + 1;
    } else {
      togNum = 0;
    }
    this.setState({[name]: toggleCalc[togNum]});
  }
  // style={{minHeight: "100px"}}
  handleCardClick = (e, {name}) => {
    var avaiableStatus = name + "Available";
    if (this.state[avaiableStatus] == true) {
      this.setState({[avaiableStatus]: false});
      //to-do pass the value to bottom section
      if (!this.state.bottomFirstCardAvailable) {
        this.state.bottomFirstCardAvailable = avaiableStatus;
        this.state.bottomFirstCard = this.state[name];
      } else if (!this.state.bottomSecondCardAvailable) {
        this.state.bottomSecondCardAvailable = avaiableStatus;
        this.state.bottomSecondCard = this.state[name];
      } else if (!this.state.bottomThirdCardAvailable) {
        this.state.bottomThirdCardAvailable = avaiableStatus;
        this.state.bottomThirdCard = this.state[name];
      } else if (!this.state.bottomFourthCardAvailable) {
        this.state.bottomFourthCardAvailable = avaiableStatus;
        this.state.bottomFourthCard = this.state[name];
      } else {
        console.log(e);
        console.log('something strange happens')
      }
    }
  }
  handleBottomCardClick = (e, {name}) => {
    var uncheckStatus = name + "Available";
    var originalCard = this.state[uncheckStatus];
    this.setState({[name]: 0, [uncheckStatus]: '', [originalCard]: true});
    console.log(name);
    console.log(originalCard);
  }
  reAssignCards = () => {
    var newCard1 = Math.floor(Math.random() * 12) + 1;
    var newCard2 = Math.floor(Math.random() * 12) + 1;
    var newCard3 = Math.floor(Math.random() * 12) + 1;
    var newCard4 = Math.floor(Math.random() * 12) + 1;
    this.state.firstCard = newCard1;
    this.state.firstCardAvailable = true;
    this.state.secondCard = newCard2;
    this.state.secondCardAvailable = true;
    this.state.thirdCard = newCard3;
    this.state.thirdCardAvailable = true;
    this.state.fourthCard = newCard4;
    this.state.fourthCardAvailable = true;
    this.state.bottomFirstCard = 0;
    this.state.bottomSecondCard = 0;
    this.state.bottomThirdCard = 0;
    this.state.bottomFourthCard = 0;
    this.state.bottomFirstCardAvailable = '';
    this.state.bottomSecondCardAvailable = '';
    this.state.bottomThirdCardAvailable = '';
    this.state.bottomFourthCardAvailable = '';
    this.forceUpdate();
  }
  checkResult = () => {
    if (this.state.bottomFirstCardAvailable && this.state.bottomSecondCardAvailable && this.state.bottomThirdCardAvailable && this.state.bottomFourthCardAvailable) {
      var evalString = this.state.bottomFirstCard + this.state.toggle1 + this.state.bottomSecondCard + this.state.toggle2 + this.state.bottomThirdCard + this.state.toggle3 + this.state.bottomFourthCard;
      var calResult = eval(evalString);
      this.setState({result: calResult});
      if (calResult == 24) {
        alert("Congratulations!");
      } else {
        alert("Try again!");
      }
    } else {
      alert("Please use all four cards!");
    }
  }
  render() {
    return (
      <div>
        <Grid>
          <Grid.Row >
            <Grid.Column width={4}>
              <Card name="firstCard" onClick={this.handleCardClick} draggable={this.state.firstCardAvailable}>
                <Card.Content>
                  {this.state.firstCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card name="secondCard" onClick={this.handleCardClick} draggable={this.state.secondCardAvailable}>
                <Card.Content>
                  {this.state.secondCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card name="thirdCard" onClick={this.handleCardClick} draggable={this.state.thirdCardAvailable}>
                <Card.Content>
                  {this.state.thirdCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card name="fourthCard" onClick={this.handleCardClick} draggable={this.state.fourthCardAvailable}>
                <Card.Content>
                  {this.state.fourthCard}
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <button className="ui primary button" onClick={this.reAssignCards}>
              ReShaffle
            </button>
            <button className="ui button" onClick={this.checkResult}>
              check
            </button>
            <button className="ui button">
              score
            </button>
          </Grid.Row>

          {/* Next is answer panel */}
          <Grid.Row>
            <Grid.Column width={2}>
              <Card name="bottomFirstCard" onClick={this.handleBottomCardClick}>
                <Card.Content>
                  {this.state.bottomFirstCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label name="toggle1" onClick={this.handletoggleClick}>
                {this.state.toggle1}
              </Label>
            </Grid.Column>
            <Grid.Column width={2}>
              <Card name="bottomSecondCard" onClick={this.handleBottomCardClick}>
                <Card.Content>
                  {this.state.bottomSecondCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label name="toggle2" onClick={this.handletoggleClick}>
                {this.state.toggle2}
              </Label>
            </Grid.Column>
            <Grid.Column width={2}>
              <Card name="bottomThirdCard" onClick={this.handleBottomCardClick}>
                <Card.Content>
                  {this.state.bottomThirdCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label name="toggle3" onClick={this.handletoggleClick}>
                {this.state.toggle3}
              </Label>
            </Grid.Column>
            <Grid.Column width={2}>
              <Card name="bottomFourthCard" onClick={this.handleBottomCardClick}>
                <Card.Content>
                  {this.state.bottomFourthCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label onClick={this.checkResult}>
                =
              </Label>
            </Grid.Column>
            <Grid.Column width={2}>
              <Card>
                <Card.Content>
                  Answer: {this.state.result}
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Games;
