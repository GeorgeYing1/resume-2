import React from 'react';
import Bio from './Bio.js'
import Education from './Education.js'
import Work from './Work.js'
import Skills from './Skills.js'
import Hobbies from './Hobbies.js'
import Voluntaries from './Voluntaries.js'
import Contacts from './Contacts.js'

class Content extends React.Component {

  render() {
    let lowerPart = <span>Will be replaced soon</span>;
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
        lowerPart = <span>Will be replaced soon</span>;
        break;
    }

    return (
      <div>
      {lowerPart}
    </div>
    )
  }
}
export default Content;
