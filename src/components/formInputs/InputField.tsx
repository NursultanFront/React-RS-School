import React, { Component, LegacyRef } from 'react';

interface IProps {
  text?: string;
  name?: string;
  type: string;
  id?: string | undefined;
  refProp: LegacyRef<HTMLInputElement>;
  value?: string;
  errorMessage?: string;
  showError?: boolean;
  children?: string;
  labelText?: string;
}

interface State {
  showError: boolean;
}

export class InputField extends Component<IProps, State> {
  render() {
    const { type, refProp, errorMessage, showError, name, value, children, id, labelText } =
      this.props;
    return (
      <>
        <label htmlFor={id}>
          <p>{labelText}</p>
          {children}
          <input data-testid={id} id={id} type={type} ref={refProp} name={name} value={value} />
          <p className="errors">{showError && errorMessage}</p>
        </label>
      </>
    );
  }
}
