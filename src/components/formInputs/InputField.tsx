import React, { Component, LegacyRef } from 'react';

interface IProps {
  type: string;
  id?: string | number;
  refProp: LegacyRef<HTMLInputElement>;
  errorMessage: string;
  showError?: boolean;
}

interface State {
  showError: boolean;
}

export class InputField extends Component<IProps, State> {
  render() {
    return (
      <>
        <input type={this.props.type} ref={this.props.refProp} />
        <p>{this.props.showError && this.props.errorMessage}</p>
      </>
    );
  }
}
