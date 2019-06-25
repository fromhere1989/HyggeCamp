import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Location extends Component {
  render(){
    return(
      <div className={this.props.className}>
        <Link className={this.props.className + `_link`} to="/location">
          <p>Карелия, Лахденпохья, </p>
          <p>деревня Парконмяки </p>
          <p>61.571924, 30.208763 </p>
        </Link>
      </div>
    );
  }
}

export default Location;
