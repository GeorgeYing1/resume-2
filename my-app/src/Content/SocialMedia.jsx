import React, { Component } from 'react';
import email from '../assets/images/email.png'
import email_hover from '../assets/images/email_hover.png'
import google from '../assets/images/google.png'
import google_hover from '../assets/images/google_hover.png'
import twitter from '../assets/images/twitter.png'
import twitter_hover from '../assets/images/twitter_hover.png'
import facebook from '../assets/images/facebook.png'
import facebook_hover from '../assets/images/facebook_hover.png'
import linkedin from '../assets/images/linkedin.png'
import linkedin_hover from '../assets/images/linkedin_hover.png'

class SocialMedia extends Component{

  state= {
      mailhover: false,
      googlehover: false,
      twitterhover: false,
      facebookhover: false,
      linkedinhover: false
    }

  // socialMediaIcons: [
  //   {
  //     id: "1",
  //     name: "mailhover",
  //     images: "../assets/images/email.png",
  //     imageshover: "../assets/images/email_hover.png",
  //     href: "#"
  //   }, {
  //     id: "2",
  //     name: "googlehover",
  //     images: "../assets/images/google.png",
  //     imageshover: "/assets/images/google_hover.png",
  //     href: "#"
  //   }, {
  //     id: "3",
  //     name: "twitterhover",
  //     images: "../assets/images/twitter.png",
  //     imageshover: "../assets/images/twitter_hover.png",
  //     href: "#"
  //   }, {
  //     id: "4",
  //     name: "facebookhover",
  //     images: "../assets/images/facebook.png",
  //     imageshover: "../assets/images/facebook_hover.png",
  //     href: "#"
  //   }, {
  //     id: "5",
  //     name: "linkedinhover",
  //     images: "../assets/images/linkedin.png",
  //     imageshover: "../assets/images/linkedin_hover.png",
  //     href: "#"
  //   }
  // ]

  render() {
    // var socialMedia = [];
    // for (var i = 0; i < this.socialMediaIcons.length; i++) {
    //   socialMedia.push(
    //     <span key={this.socialMediaIcons[i].id}>
    //       <span onMouseOver={this.handleMediaFocus.bind(this, this.socialMediaIcons[i].name)} onMouseLeave={this.handleMediaFocusOut.bind(this, this.socialMediaIcons[i].name)}>
    //         {this.state[this.socialMediaIcons[i].name]
    //           ? <img alt='' src={this.socialMediaIcons[i].imageshover}/>
    //           : <img alt='' src={this.socialMediaIcons[i].images}/>}
    //       </span>
    //       &nbsp;&nbsp;
    //     </span>
    //   )
    // };

    return (
        <div>
          <span className='mailhover' onMouseOver={(e) => this.handleMediaFocus(e,"mailhover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"mailhover")}>
            {this.state.mailhover? <img src={email_hover}/>: <img src={email}/>}
          </span>
          <span className='googlehover' onMouseOver={(e) => this.handleMediaFocus(e,"googlehover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"googlehover")}>
            {this.state.googlehover? <img src={google_hover}/>: <img src={google}/>}
          </span>
          <span className='twitterhover' onMouseOver={(e) => this.handleMediaFocus(e,"twitterhover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"twitterhover")}>
            {this.state.twitterhover? <img src={twitter_hover}/>: <img src={twitter}/>}
          </span>
          <span className='facebookhover' onMouseOver={(e) => this.handleMediaFocus(e,"facebookhover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"facebookhover")}>
            {this.state.facebookhover? <img src={facebook_hover}/>: <img src={facebook}/>}
          </span>
          <span className='linkedinhover' onMouseOver={(e) => this.handleMediaFocus(e,"linkedinhover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"linkedinhover")}>
            {this.state.linkedinhover? <img src={linkedin_hover}/>: <img src={linkedin}/>}
          </span>
        </div>

    );
  }

  handleMediaFocus = (e,name) => this.setState({[name]: true})
  // this.setState({[e]: true})
  handleMediaFocusOut = (e,name) => this.setState({[name]: false})
}

export default SocialMedia
