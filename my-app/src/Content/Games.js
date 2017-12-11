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
    bottomFirstCard: '',
    bottomFirstCardAvailable: '',
    bottomSecondCard: '',
    bottomSecondCardAvailable: '',
    bottomThirdCard: '',
    bottomThirdCardAvailable: '',
    bottomFourthCard: '',
    bottomFourthCardAvailable: '',
    toggle1: '+',
    toggle2: '-',
    toggle3: '*',
    p1: 0,
    p1Lock: false,
    p2: 0,
    p2Lock: false,
    p3: 0,
    p3Lock: false,
    p4: 0,
    p4Lock: false,
    p5: 0,
    p5Lock: false,
    p6: 0,
    p6Lock: false,
    result: '0',
    score: 0
  }
  styles={
    pLabel: {
      top: '10px',
      opacity: 0
    },
    cards: {
      minHeight: "320px",
      maxWidth: "223px"
    }
  }
  handleP1MouseEnter = () => {
    if (!this.state.p1Lock) {
    this.setState({p1:1});
    }
  }
  handleP1MouseLeave = () => {
    if (!this.state.p1Lock) {
    this.setState({p1:0});
    }
  }
  handleP2MouseEnter = () => {
    if (!this.state.p2Lock) {
    this.setState({p2:1});
    }
  }
  handleP2MouseLeave = () => {
    if (!this.state.p2Lock) {
    this.setState({p2:0});
    }
  }
  handleP3MouseEnter = () => {
    if (!this.state.p3Lock) {
    this.setState({p3:1});
    }
  }
  handleP3MouseLeave = () => {
    if (!this.state.p3Lock) {
    this.setState({p3:0});
    }
  }
  handleP4MouseEnter = () => {
    if (!this.state.p4Lock) {
    this.setState({p4:1});
    }
  }
  handleP4MouseLeave = () => {
    if (!this.state.p4Lock) {
    this.setState({p4:0});
    }
  }
  handleP5MouseEnter = () => {
    if (!this.state.p5Lock) {
    this.setState({p5:1});
    }
  }
  handleP5MouseLeave = () => {
    if (!this.state.p5Lock) {
    this.setState({p5:0});
    }
  }
  handleP6MouseEnter = () => {
    if (!this.state.p6Lock) {
    this.setState({p6:1});
    }
  }
  handleP6MouseLeave = () => {
    if (!this.state.p6Lock) {
    this.setState({p6:0});
    }
  }
  handlePLabelClick = (e, {name}) => {
    var statusLock=name+"Lock";
    this.setState({[statusLock]: !this.state[statusLock]});
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
    this.setState({[name]:'', [uncheckStatus]: '', [originalCard]: true});
  }
  reAssignCards = () => {
    var newCard1 = Math.floor(Math.random() * 13) + 1;
    var newCard2 = Math.floor(Math.random() * 13) + 1;
    var newCard3 = Math.floor(Math.random() * 13) + 1;
    var newCard4 = Math.floor(Math.random() * 13) + 1;
    // this.replaceState({firstCard:newCard1,
    //                    secondCard:newCard2,
    //                    thirdCard:newCard3,
    //                    fourthCard:newCard4
    // })
    this.state.firstCard = newCard1;
    this.state.firstCardAvailable = true;
    this.state.secondCard = newCard2;
    this.state.secondCardAvailable = true;
    this.state.thirdCard = newCard3;
    this.state.thirdCardAvailable = true;
    this.state.fourthCard = newCard4;
    this.state.fourthCardAvailable = true;
    this.state.bottomFirstCard = '';
    this.state.bottomSecondCard = '';
    this.state.bottomThirdCard = '';
    this.state.bottomFourthCard = '';
    this.state.bottomFirstCardAvailable = '';
    this.state.bottomSecondCardAvailable = '';
    this.state.bottomThirdCardAvailable = '';
    this.state.bottomFourthCardAvailable = '';
    this.state.score = this.state.score-1;
    this.forceUpdate();
  }
  checkResult = () => {
    if (this.state.bottomFirstCardAvailable && this.state.bottomSecondCardAvailable && this.state.bottomThirdCardAvailable && this.state.bottomFourthCardAvailable) {
      var p1String = this.state.p1Lock? "(" : "";
      var p2String = this.state.p2Lock? "(" : "";
      var p3String = this.state.p3Lock? ")" : "";
      var p4String = this.state.p4Lock? "(" : "";
      var p5String = this.state.p5Lock? ")" : "";
      var p6String = this.state.p6Lock? ")" : "";
      var evalString = p1String+this.state.bottomFirstCard + this.state.toggle1 + p2String + this.state.bottomSecondCard + p3String + this.state.toggle2 + p4String + this.state.bottomThirdCard + p5String + this.state.toggle3 + this.state.bottomFourthCard + p6String;
      try {
        var calResult = eval(evalString);
      } catch (e){
        alert("Your formula needs to be rechecked");
        return;
      }
      this.setState({result: calResult});
      if (calResult == 24) {
        alert("Congratulations!");
        this.state.score = this.state.score+2;
        this.reAssignCards();
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
          <Grid.Row style={{minHeight:"200px"}}>
            <Grid.Column width={4}>
              <Card name="firstCard" onClick={this.handleCardClick} draggable={this.state.firstCardAvailable} style={this.styles.cards}>
                <Card.Content className={"_"+this.state.firstCard.toString()}>
                  {this.state.firstCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card name="secondCard" onClick={this.handleCardClick} draggable={this.state.secondCardAvailable} style={this.styles.cards}>
                <Card.Content className={"_"+this.state.secondCard.toString()}>
                  {this.state.secondCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card name="thirdCard" onClick={this.handleCardClick} draggable={this.state.thirdCardAvailable} style={this.styles.cards}>
                <Card.Content className={"_"+this.state.thirdCard.toString()}>
                  {this.state.thirdCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={4}>
              <Card name="fourthCard" onClick={this.handleCardClick} draggable={this.state.fourthCardAvailable} style={this.styles.cards}>
                <Card.Content className={"_"+this.state.fourthCard.toString()}>
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
            <Label>
              {this.state.score}
            </Label>
          </Grid.Row>

          {/* Next is answer panel */}
          <Grid.Row>
            <Grid.Column>
              <Label basic name='p1' ref='p1' style={{opacity: this.state.p1}} onMouseEnter={this.handleP1MouseEnter} onMouseLeave={this.handleP1MouseLeave} onClick={this.handlePLabelClick}>
                (
              </Label>
            </Grid.Column>
            <Grid.Column width={1}>
              <Card name="bottomFirstCard" onClick={this.handleBottomCardClick}>
                <Card.Content>
                  {this.state.bottomFirstCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Label basic name="toggle1" onClick={this.handletoggleClick}>
                {this.state.toggle1}
              </Label>
            </Grid.Column>
            <Grid.Column>
              <Label basic name='p2' ref='p2' style={{opacity: this.state.p2}} onMouseEnter={this.handleP2MouseEnter} onMouseLeave={this.handleP2MouseLeave} onClick={this.handlePLabelClick}>
                (
              </Label>
            </Grid.Column>
            <Grid.Column width={1}>
              <Card name="bottomSecondCard" onClick={this.handleBottomCardClick}>
                <Card.Content>
                  {this.state.bottomSecondCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Label basic name='p3' ref='p3' style={{opacity: this.state.p3}} onMouseEnter={this.handleP3MouseEnter} onMouseLeave={this.handleP3MouseLeave} onClick={this.handlePLabelClick}>
              )
              </Label>
            </Grid.Column>
            <Grid.Column>
              <Label basic name="toggle2" onClick={this.handletoggleClick}>
                {this.state.toggle2}
              </Label>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label basic name='p4' ref='p4' style={{opacity: this.state.p4}} onMouseEnter={this.handleP4MouseEnter} onMouseLeave={this.handleP4MouseLeave} onClick={this.handlePLabelClick}>
                (
              </Label>
            </Grid.Column>
            <Grid.Column width={1}>
              <Card name="bottomThirdCard" onClick={this.handleBottomCardClick}>
                <Card.Content>
                  {this.state.bottomThirdCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label basic name='p5' ref='p5' style={{opacity: this.state.p5}} onMouseEnter={this.handleP5MouseEnter} onMouseLeave={this.handleP5MouseLeave} onClick={this.handlePLabelClick}>
              )
              </Label>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label basic name="toggle3" onClick={this.handletoggleClick}>
                {this.state.toggle3}
              </Label>
            </Grid.Column>
            <Grid.Column width={1}>
              <Card name="bottomFourthCard" onClick={this.handleBottomCardClick}>
                <Card.Content>
                  {this.state.bottomFourthCard}
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label basic name='p6' ref='p6' style={{opacity: this.state.p6}} onMouseEnter={this.handleP6MouseEnter} onMouseLeave={this.handleP6MouseLeave} onClick={this.handlePLabelClick}>
              )
              </Label>
            </Grid.Column>
            <Grid.Column width={1}>
              <Label basic onClick={this.checkResult}>
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
