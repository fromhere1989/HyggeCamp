import React, { Component } from 'react';
import logo from '../../public/images/logo.webp';
import { BrowserRouter, Link }  from 'react-router-dom';

class Logo extends Component {
  render(){
    return(
      <div className="header_logo">
        <Link to="/"><img className="header_logo_img" src={logo}/></Link>
      </div>
    );
  }
}

export default Logo;
