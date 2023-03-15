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
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <p>
          And now you are in <b>{this.getLocation()}</b> here right now
        </p>
      </header>
    );
  }
}

export default withRouter(Header);
