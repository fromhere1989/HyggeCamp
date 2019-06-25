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
        <Location className="header_location" />
        <Logo />
        <div className="header_contacts_wrap">
          <Contacts className="header_contacts"/>
          <h1 className="logo_name-small">HYGGE CAMP</h1>
          <Button className="button_wrapper" name="ЗАБРОНИРОВАТЬ"/>
        </div>
      </div>
    );
  }
}

export default Header;
