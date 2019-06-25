import React, { Component } from 'react';
import capture_img1 from "../../public/images/capture_img1.webp"

class Carusel extends Component {
  render() {
    return(
      <div className="carusel">
        <div className="capture_carusel">
          <img className="capture_img1" src={capture_img1}/>
        </div>
      </div>
    );
  }
}

export default Carusel;
