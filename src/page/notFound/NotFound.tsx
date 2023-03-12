import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <div>
          There is nothing here go <Link to="/">away</Link>
        </div>
      </>
    );
  }
}
