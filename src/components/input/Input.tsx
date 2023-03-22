import React, { Component } from 'react';

export class Input extends Component {
  public obj = {
    id: 3,
    name: 'birthday',
    type: 'date',
    placeholder: 'Birthday',
    label: 'Birthday',
  };
  render() {
    const { label, id, ...inputProps } = this.obj;
    return (
      <label>
        <input {...inputProps} />
        <p></p>
      </label>
    );
  }
}

export default Input;
