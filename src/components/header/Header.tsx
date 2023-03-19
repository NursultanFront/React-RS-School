import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from '../../helper/withRouter';
import { WithRouterProps } from '../../helper/withRouter';

class Header extends Component<WithRouterProps> {
  getLocation = () => {
    const pathname = this.props.location.pathname;
    if (pathname == '/') {
      return 'home';
    }

    return pathname.slice(1);
  };

  render() {
    return (
      <header className="header">
        <div className="header__wrapper">
          <div className="header__links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
          </div>

          <p>
            <b>{this.getLocation()}</b>
          </p>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
