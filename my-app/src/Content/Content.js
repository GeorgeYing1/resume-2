import React from 'react';
import Bio from './Bio.js'
import Education from './Education.js'
import Work from './Work.js'
import Skills from './Skills.js'
import Hobbies from './Hobbies.js'
import Voluntaries from './Voluntaries.js'
import Contacts from './Contacts.js'
import { Image } from 'semantic-ui-react'
import UnderConstruction from '../assets/images/under-construction.jpg';

class Content extends React.Component {


  render() {
    let lowerPart;
    switch (this.props.subjectTopic) {
      case "Bio":
        lowerPart = <Bio/>;
        break;
      case "Education":
        lowerPart = <Education/>;
        break;
      case "Work":
        lowerPart = <Work/>;
        break;
      case "Skills":
        lowerPart = <Skills/>;
        break;
      case "Hobbies":
        lowerPart = <Hobbies/>;
        break;
      case "Voluntaries":
        lowerPart = <Voluntaries/>;
        break;
      case "Contacts":
        lowerPart = <Contacts/>;
        break;
      default:
        lowerPart = <Image style={{width: '90%', padding: '20px 0 20px 0'}} src={UnderConstruction} onClick={this.props.constructionClick}/>;
        break;
    }

    return (
      <div style={{paddingTop: '20px'}}>
      {lowerPart}
    </div>
    )
  }
}
export default Content;
