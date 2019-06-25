import React, { Component } from 'react';

class Contacts extends Component {
  render(){
    return(
        <div className={this.props.className} >
          <a className="phone_link" href="tel:+79218779921"> +7 (921) 877-99-21 </a><br/>
          <a className="email_link" href="mailto:hyggecamp.ru@gmail.com">hyggecamp.ru@gmail.com</a>
        </div>
    );
  }
}

export default Contacts;
