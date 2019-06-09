import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Main from './Main.js';
import Price from './Price.js';
import WayTo from './WayTo.js';
import Faq from './Faq.js';
import Gallary from './Gallary.js';
import Header from '../Header.js';
import Footer from '../Footer.js';
import Menu from '../../components/Menu.js';

class Router extends Component {
  render() {
    return(
      <BrowserRouter>
        <div className="grid_layout">
          <div className="grid_layout_header">
            <Header />
            <Menu className="menu"/>
          </div>
          <div className="grid_layout_content">
              <Route exact path="/" component={Main} />
              <Route path="/price" component={Price} />
              <Route path="/location" component={WayTo} />
              <Route path="/faq" component={Faq} />
              <Route path="/gallary" component={Gallary} />
          </div>
          <div className="grid_layout_footer">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
