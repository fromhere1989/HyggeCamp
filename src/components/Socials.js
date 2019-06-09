import React, { Component } from 'react';
import vk from '../../public/images/vk.webp';
import inst from '../../public/images/inst2.png';
import fb from '../../public/images/fb2.png';

class Socials extends Component {
  render(){
    return(
      <div className="socials">
        <a className="socials_link"><img className="socials_img vk" src={vk}/></a>
        <a className="socials_link"><img className="socials_img inst" src={inst}/></a>
        <a className="socials_link"><img className="socials_img socials_img-fb" src={fb}/></a>
      </div>
    );
  }
}

export default Socials;
