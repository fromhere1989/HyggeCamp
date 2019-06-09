import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Logo from '../components/Logo.js';
import Button from '../components/Button.js';
import Contacts from '../components/Contacts.js';
import Location from '../components/Location.js';

class Header extends Component {
  render(){
    return(
      <div className="header">
        <Location />
        <Logo />
        <div className="header_contacts_wrap">
          <Contacts />
          <Button name="ЗАБРОНИРОВАТЬ"/>
        </div>
      </div>
    );
  }
}

export default Header;
