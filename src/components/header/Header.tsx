import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

interface IHeaderItems {
  route: string;
  name: string;
}

export default class Header extends Component {
  public headerItems: IHeaderItems[] = [
    {
      route: '/',
      name: 'Home',
    },
    {
      route: '/about',
      name: 'About',
    },
  ];
  render() {
    return (
      <header>
        {this.headerItems.map((item, index) => {
          return (
            <NavLink key={index} to={item.route}>
              {item.name}
            </NavLink>
          );
        })}
      </header>
    );
  }
}
