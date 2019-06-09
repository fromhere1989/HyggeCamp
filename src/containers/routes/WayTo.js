import React, { Component } from 'react';

class WayTo extends Component {
  render() {
    return(
      <div className="location">
      <span>
        <br/><h2>На машине:</h2><br/>
        По Приозерскому шоссе до деревни Раухала или до деревни Мийнала, <br/>
        после съезда налево по указателям "Hygge Camp" до деревни <br/>
        Парконмяки 6 км.<br/>
        <br/><h2>Ссылка на яндекс карты:</h2><br/>
        <a className="location_yandexLink" href="https://yandex.ru/maps/-/CCGB5I0m">https://yandex.ru/hyggecamp</a><br/>
        <br/><h2>Общественным транспортом:</h2><br/>
        1. От станции метро Озерки на автобусе;<br/>
        2. От Финляндского вокзала на поезде Ласточка до станции <br/>
        Лахденпохья, далее 8 км на такси или позвоните нам заранее и <br/>
        мы заберём вас со станции;<br/>
        3. От Ладожского вокзала на поезде до станции Хуухканмяки, оттуда 3 км <br/>
        по живописной дороге до посёлка Парконмяки.
      </span>
        <iframe className="location_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15195.655457370165!2d30.196096060569573!3d61.57056554711546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46999bb60bc7400b%3A0xf4aae4fc3fb0914c!2z0JrQtdC80L_QuNC90LMt0L7RgtC10LvRjCDQpdGO0LPQs9C1!5e0!3m2!1sru!2sru!4v1560072038841!5m2!1sru!2sru"></iframe>
        </div>
    );
  }
}

export default WayTo;
