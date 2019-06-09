import React, { Component } from 'react';

class MenuButton extends Component{
  render(){
    return(
      <div className="MenuButton">
        {this.props.name}
      </div>
    );
  }
}

export default MenuButton;
