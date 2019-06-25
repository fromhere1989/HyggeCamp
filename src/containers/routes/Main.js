import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Capture from '../../components/Capture.js';

class Main extends Component {
  render() {
    return(
      <div className="main_wrapper">
      <Capture />
      <iframe className="main_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15195.655457370165!2d30.196096060569573!3d61.57056554711546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46999bb60bc7400b%3A0xf4aae4fc3fb0914c!2z0JrQtdC80L_QuNC90LMt0L7RgtC10LvRjCDQpdGO0LPQs9C1!5e0!3m2!1sru!2sru!4v1560072038841!5m2!1sru!2sru"></iframe>
      </div>
    );
  }
}

export default Main;
