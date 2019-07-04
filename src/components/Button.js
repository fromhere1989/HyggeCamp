import React, { Component } from 'react';
import { BrowserRouter, Link }  from 'react-router-dom';

class Button extends Component {

  handleClick() {
    const wrapper = document.getElementById('form');
    wrapper.classList.toggle('showForm')
  }

  render(){
    return(
      <div className={this.props.className}>
        <button className="button" onClick={() => this.handleClick()}>
          {this.props.name}
        </button>
        <div id="form" className="form" >
        <div className="form_background" onClick={() => this.handleClick()}></div>
          <div className="form_box">
            <div className="form_border">
              <div className="form_cancel" onClick={() => this.handleClick()}>&#10006;</div>
              <div className="form_content">
                <span className="form_text">Для того, чтобы забронировать шатёр или<br/>
                мероприятие, позвоните по номеру телефона<br/>
                <a className="phone_link" href ="tel:+79218779921">+7-921-877-99-21</a>  или оставьте заявку ниже:</span>
                <form className="form_main">
                    <input type="text" name="name" id="name" className="form_name form_item"
                    tabIndex="1" placeholder="Имя" />
                    <input type="text" name="email" id="email" className="form_email form_item"
                    tabIndex="1" placeholder="Email" />
                    <input type="number" name="phone" id="phone" className="form_phone form_item"
                    tabIndex="1" placeholder="Телефон" />
                  <button className="form_button form_item">ОТПРАВИТЬ</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Button;
