import React, { Component } from 'react';
import foto1 from '../../public/images/hc-foto1.jpg';

class Carusel extends Component {
  render() {
    return(
      <div className="carusel"><img src={foto1}/></div>
    );
  }
}

export default Carusel;
