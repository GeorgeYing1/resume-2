import React from 'react';
import gt from '../assets/images/gt.jpg'
import nfls from '../assets/images/nfls.jpg'
class Header extends React.Component {
  styles= {
     gtlogo: {
       width: "200px",
       height: "200px",
       position: "absolute",
       right: "20px",
     },
     nflslogo: {
       width: "200px",
       height: "200px",
       position: "absolute",
       left: "20px",

     },
   }
  constructor() {
    super();
  };

  render() {
    return (
    <div className="page-header">
        <img src={gt} style={this.styles.gtlogo} className="gt-logo" alt="gt" />
        <img src={nfls} style={this.styles.nflslogo} className='nfls-logo' alt='nfls'/>
    </div>
    )
  }
}
export default Header;
