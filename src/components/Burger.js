import React, { Component } from "react";
import { Link } from "react-router-dom";

class Burger extends Component {

  OpenMenu() {
  const menu = document.getElementsByClassName('burger_menu')[0];
  menu.classList.toggle('showMenu')
  }


  render() {
    return(
      <div className="burger_wrapper" onClick={() => this.OpenMenu()} >
        <span className="burger" >
          Меню
        </span>
        <ul className="burger_menu" id="burger_menu">
          <Link to="/"
          ><li className="burger_menu_item">O HYGGE</li></Link>
          <Link to="/price"
          ><li className="burger_menu_item">ЦЕНЫ</li></Link>
          <Link to="/facility"
          className="burger_menu_item"><li >ИНФРАСТРУКТУРА</li></Link>
          <Link to="/location"
          ><li className="burger_menu_item">КАК ДОЕХАТЬ</li></Link>
          <Link to="/faq"
          ><li className="burger_menu_item">ВОПРОС/ОТВЕТ</li></Link>
        </ul>
      </div>
    );
  }
}

export default Burger;
