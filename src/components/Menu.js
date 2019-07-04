import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Menu extends Component {
  render(){
    return(
        <ul className={this.props.className}>
          <Link to="/" className={this.props.className + `_item`}
          ><li >O HYGGE</li></Link>
          <Link to="/price" className={this.props.className + `_item`}
          ><li >ЦЕНЫ</li></Link>
          <Link to="/facility" className={this.props.className + `_item`}
          ><li >ИНФРАСТРУКТУРА</li></Link>
          <Link to="/location" className={this.props.className + `_item`}
          ><li >КАК ДОЕХАТЬ</li></Link>
          <Link to="/faq" className={this.props.className + `_item`}
          ><li >ВОПРОС/ОТВЕТ</li></Link>
        </ul>
    );
  }
}

export default Menu;
