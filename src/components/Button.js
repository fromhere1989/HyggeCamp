import React, { Component } from 'react';
import { BrowserRouter, Link }  from 'react-router-dom';

class Button extends Component {
  render(){
    return(
      <Link to="/">
      <button className="button">
        {this.props.name}
      </button>
      </Link>
    );
  }
}

export default Button;
