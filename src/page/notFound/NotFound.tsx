import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <h2>404 error</h2>
        <div>
          There is nothing here go <Link to="/">away</Link>
        </div>
      </>
    );
  }
}
