import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Burger from "./Burger.js";
import Location from "./Location.js";
import Button from "./Button.js"

class MenuSmall extends Component {

  OpenContacts() {
  const content = document.getElementById('contacts_wrapper');
  content.classList.toggle('showContacts')
}

  render(){
    return(
        <ul className="menu_small">
          <li className="menuSmall_button" ><Burger /></li>
          <li className="contacts_button menuSmall_button" onClick={() => this.OpenContacts()}>Контакты
            <div className="menuSmall_contacts_wrapper" id="contacts_wrapper">
              <a className="menuSmall_phone menuSmall_contacts_item" href="tel:+79218779921"> +7 (921) 877-99-21 </a>
              <a className="menuSmall_email menuSmall_contacts_item" href="mailto:hyggecamp.ru@gmail.com">hyggecamp.ru@gmail.com</a>
              <Link to="/location" className="menuSmall_contacts_item">location</Link>
            </div>
            </li>
        </ul>
    );
  }
}

export default MenuSmall;
