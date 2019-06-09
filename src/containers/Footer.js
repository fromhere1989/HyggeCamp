import React, { Component } from 'react';
import Contacts from '../components/Contacts.js';
import Socials from '../components/Socials.js';
import Location from '../components/Location.js';
import Menu from '../components/Menu.js';

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <div className="footer_contacts_wrap">
          <h2>Контакты</h2>
          <Contacts />
          <Location />
        </div>
        <div className="footer_middle">
          <Socials />
          <p>© 2018 Кемпинг Отель Hygge </p>
        </div>
        <div className="footer_menu_wrap">
        <h2>Меню сайта</h2>
        <Menu className="footer_menu"/>
        </div>
      </div>
    );
  }
}

export default Footer;
