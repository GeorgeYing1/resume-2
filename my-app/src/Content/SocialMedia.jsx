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
          <a className='mailhover' onMouseOver={(e) => this.handleMediaFocus(e,"mailhover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"mailhover")} href="mailto:jingya,ying@gmail.com">
            {this.state.mailhover? <img src={email_hover} alt=''/>: <img src={email} alt=''/>}
          </a>
          <a className='googlehover' onMouseOver={(e) => this.handleMediaFocus(e,"googlehover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"googlehover")} rel="noopener noreferrer" href="https://plus.google.com/u/0/103365991027997364834" target="_blank">
            {this.state.googlehover? <img src={google_hover} alt=''/>: <img src={google} alt=''/>}
          </a>
          <a className='twitterhover' onMouseOver={(e) => this.handleMediaFocus(e,"twitterhover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"twitterhover")} rel="noopener noreferrer" href="https://twitter.com/YingJingya" target="_blank">
            {this.state.twitterhover? <img src={twitter_hover} alt=''/>: <img src={twitter} alt=''/>}
          </a>
          <a className='facebookhover' onMouseOver={(e) => this.handleMediaFocus(e,"facebookhover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"facebookhover")} rel="noopener noreferrer" href="https://www.facebook.com/jingya.ying" target="_blank">
            {this.state.facebookhover? <img src={facebook_hover} alt=''/>: <img src={facebook} alt=''/>}
          </a>
          <a className='linkedinhover' onMouseOver={(e) => this.handleMediaFocus(e,"linkedinhover")} onMouseLeave={(e) => this.handleMediaFocusOut(e,"linkedinhover")} rel="noopener noreferrer" href="https://www.linkedin.com/in/jingya-ying-1aa63864" target="_blank">
            {this.state.linkedinhover? <img src={linkedin_hover} alt=''/>: <img src={linkedin} alt=''/>}
          </a>
        </div>

    );
  }

  handleMediaFocus = (e,name) => this.setState({[name]: true})
  // this.setState({[e]: true})
  handleMediaFocusOut = (e,name) => this.setState({[name]: false})
}

export default SocialMedia
