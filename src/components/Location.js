import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class Location extends Component {
  render(){
    return(
      <div className="header_location">
        <Link className="link" to="/location">
          Карелия, Лахденпохья, <br/>
          деревня Парконмяки <br/>
          61.571924, 30.208763
        </Link>
      </div>
    );
  }
}

export default Location;
