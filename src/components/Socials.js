import React, { Component } from 'react';
import vk from '../../public/images/vk.webp';
import inst from '../../public/images/inst2.png';
import fb from '../../public/images/fb2.png';

class Socials extends Component {
  render(){
    return(
      <div className="socials">
        <div className="socials_large">
          <a className="socials_link" href="https://vk.com/hygge.hotel" target="_blank"><img className="socials_img vk" src={vk}/></a>
          <a className="socials_link" href="https://www.instagram.com/hygge.camp/" target="_blank"><img className="socials_img inst" src={inst}/></a>
          <a className="socials_link" href="https://web.facebook.com/hyggecamp.ru/?_rdc=1&_rdr" target="_blank"><img className="socials_img socials_img-fb" src={fb}/></a>
        </div>
        <div className="socials_small">
          <a className="socials_link" href="https://vk.com/hygge.hotel" target="_blank"><img className="socials_img vk" /></a>
          <a className="socials_link" href="https://www.instagram.com/hygge.camp/" target="_blank"><img className="socials_img inst" /></a>
          <a className="socials_link" href="https://web.facebook.com/hyggecamp.ru/?_rdc=1&_rdr" target="_blank"><img className="socials_img socials_img-fb" /></a>
        </div>
      </div>
    );
  }
}

export default Socials;
