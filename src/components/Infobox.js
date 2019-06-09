import React, { Component } from 'react';
import boat from '../../public/images/boat.png';
import img1 from '../../public/images/img1.webp';
import img2 from '../../public/images/img2.webp';
import img3 from '../../public/images/img3.webp';
import img4 from '../../public/images/img4.webp';
import img5 from '../../public/images/img5.webp';
import img6 from '../../public/images/img6.webp';


class Infobox extends Component {
  render() {
    return(
      <div className="infobox">
        <div className="container container1">
          <span className="container_text container1_text">
            <h2 className="container1_title">Размещение</h2><br/>
            Мы предлагаем гостям размещение в просторных шатрах, по уровню комфорта
            сравнимых с номером в отеле. Все шатры размещены на деревянных настилах
            и оборудованы дровяной печью, которая позволяет поддерживать комфортную
            температуру ранней весной и осенью. В распоряжении гостей дрова, пледы,
            свежее постельное белье и полотенца. Каждый шатёр имеет собственную
            лаундж зону с грилем и уличной мебелью. Интерьеры шатров украшены в
            скандинавском стиле
          </span>
          <img className="container1_img" src={img1}/>
        </div>
        <div className="container container2">
          <img className="container2_img" src={img2}/>
          <span className="container_text container2_text">
            <h2 className="container2_title">Территория кемпинг-отеля</h2><br/>
            На территории кемпинг-отеля находится лобби бар, СПА зона с деревянной
            купелью, совместный санузлел c туалетами и душем, шатёр для проведения
            мероприятий, кинотеатр под открытым небом и зона отдыха с гамаками и
            общим костром
          </span>
        </div>
        <div className=" container3">
          <div className="container3_1">
            <span className="container_text container3_text">
              <h2 className="container3_title">Природа</h2><br/>
              Мы находимся в живописном хвойном лесу на берегу горного озера Пайкъярви. В
              окрестностях кемпинг-отеля много природных достопримечательностей - Гора Филина,
              Змеиная Гора, Ладожские Шхеры. В часе езды - Горный парк Рускеала
            </span>
            <img className="container3_img1" src={img3}/>
          </div>
          <div className="container3_2">
            <img className="container3_img2" src={img4}/>
            <img className="container3_img3" src={img5}/>
          </div>
        </div>
        <div className=" container4">
          <span className="container_text container4_text">
            <h2 className="container4_title">Развлечения</h2><br/>
            В наших краях кипит жизнь. Помимо лесных прогулок, купания в озере и просмотра
            фильмов под открытым небом вы найдёте массу интересных занятий. <br/>
            Экскурсии в древние монастыри, заповедники, каякинг по Ладожским шхерам, мастер
            классы от местных мастеров столярного дела и много другое! позвоните нам для того,
            чтобы узнать подробнее про все развлечения и забронировать экскурсии в
            республике Карелия!
          </span>
          <img className="container4_img" src={img6}/>
        </div>
      </div>
    );
  }
}

export default Infobox;
