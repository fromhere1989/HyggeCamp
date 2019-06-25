import React, { Component } from 'react';
import { Link } from "react-router-dom";
import capture_img1 from "../../public/images/capture_img1.webp"

class Capture extends Component {
  render() {
    return(
      <div className="capture">
        <span className="capture_text">
        Кемпинг-отель Хюгге - это просторные и тёплые шатры, завтраки
        на террасе, лесные прогулки, тишина и единение с природой
        <p className="capture_link">
        * "Hygge" (Хюгге) на скандинавских языках означает состояние уюта и комфорта. </p><br/>
        <p className="capture_info">ОТКРЫТИЕ - ИЮЛЬ 2019!</p><br/>
        </span>
        <Link className="about_button" to="/facility"><button className="button">УЗНАТЬ О НАС БОЛЬШЕ</button></Link>
        <div className="capture_carusel"><img className="capture_img1" src={capture_img1}/></div>
      </div>
    );
  }
}

export default Capture;
