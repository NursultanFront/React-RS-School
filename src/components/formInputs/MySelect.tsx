import React, { Component, LegacyRef } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

type Inputs = {
  example: string;
  exampleRequired: string;
};

type ValidationSchema = {
  required: string;
  minLength: { value: number; message: string };
};

interface Values {
  id: number;
  brand: string;
}
interface IProps {
  id?: string;
  errorMessage?: string;
  showError?: boolean;
  refProp?: LegacyRef<HTMLSelectElement>;
  options: {
    defaultValue: string;
    values: Values[];
  };

  errors?: FieldErrors<Inputs>;
  register?: UseFormRegister<Inputs>;
  validationSchema: ValidationSchema;
  required?: boolean;
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
