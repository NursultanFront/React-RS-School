import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
  render() {
    return (
      <>
        <header>
          <Link to="/">Home</Link>
        </header>
        <div>What about us</div>
      </>
    );
  }
}
