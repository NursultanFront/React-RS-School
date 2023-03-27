import React, { Component, LegacyRef } from 'react';

interface Values {
  id: number;
  brand: string;
}
interface IProps {
  id: string;
  errorMessage: string;
  showError: boolean;
  refProp: LegacyRef<HTMLSelectElement>;
  options: {
    empty: string | undefined;
    defaultValue: string;
    values: Values[];
  };
}

export default class MySelect extends Component<IProps> {
  render() {
    const { refProp, options, errorMessage, showError, id } = this.props;
    return (
      <>
        <select defaultValue="" name="select" ref={refProp} data-testid={id}>
          <option value="" disabled>
            {options.defaultValue}
          </option>
          {options.values.map((option) => (
            <option key={option.id} value={option.brand}>
              {option.brand}
            </option>
          ))}
        </select>
        <p className="errors">{showError && errorMessage}</p>
      </>
    );
  }
}
