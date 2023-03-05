import React, { Component } from 'react';
import IphoneImage from '../../assets/1.jpg';
import Iphone10Image from '../../assets/2.jpg';
import BlackBerryPhone from '../../assets/3.jpg';
import ChinesePhone from '../../assets/4.jpg';
import HuaweiPhone from '../../assets/5.jpg';
import MacbookLaptop from '../../assets/6.png';
import './cards.css';

export class Cards extends Component {
  products = [
    {
      id: 1,
      title: 'iPhone 9',
      descr: 'An apple mobile which is nothing like apple',
      views: 549,
      likes: 94,
      brand: 'Apple',
      images: IphoneImage,
    },
    {
      id: 2,
      title: 'iPhone X',
      descr:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      views: 899,
      brand: 'Apple',
      likes: 34,
      images: Iphone10Image,
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      descr: "Samsung's new variant which goes beyond Galaxy to the Universe",
      views: 1249,
      likes: 36,
      brand: 'Samsung',
      images: BlackBerryPhone,
    },
    {
      id: 4,
      title: 'OPPOF19',
      descr: 'OPPO F19 is officially announced on April 2021.',
      views: 280,
      likes: 123,
      brand: 'OPPO',
      images: ChinesePhone,
    },
    {
      id: 5,
      title: 'Huawei P30',
      descr:
        'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      views: 499,
      likes: 32,
      brand: 'Huawei',
      images: HuaweiPhone,
    },
    {
      id: 6,
      title: 'MacBook Pro',
      descr: 'MacBook Pro 2021 with mini-LED display may launch between September, November',
      views: 1749,
      likes: 83,
      brand: 'Apple',
      images: MacbookLaptop,
    },
  ];

  render() {
    return (
      <ul className="cards-wrapper">
        {this.products.map((item) => {
          return (
            <li key={item.id} className="card-item">
              <img className="card-img" src={item.images} alt="card-img" width={295} height={300} />
              <div className="card-content">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-brand">{item.brand}</p>
                <p className="card-descr">
                  {item.descr} Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
                  veniam dolorem, necessitatibus animi a perferendis quos quae soluta modi sunt,
                  amet neque accusamus dicta, maiores magnam repellat maxime nobis nisi!
                </p>
                <div className="card-info">
                  <div>
                    <img src="" alt="" />
                    <div>{item.likes}</div>
                  </div>
                  <div>
                    <img src="" alt="" />
                    <div>{item.views}</div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Cards;
