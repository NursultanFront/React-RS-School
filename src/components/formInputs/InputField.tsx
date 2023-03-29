import { LegacyRef } from 'react';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

type Inputs = {
  text: string;
  date: string;
};

type ValidationSchema = {
  required: string;
  minLength: { value: number; message: string };
};

interface IProps {
  name: Path<Inputs>;
  type: string;
  id: string;
  value?: string;
  errorMessage?: string;
  showError?: boolean;
  children?: string;
  errors?: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  validationSchema: ValidationSchema;
  required?: boolean;
}

export const InputField = (props: IProps) => {
  console.log(props.errors);
  return (
    <>
      <label htmlFor={props.id}>
        {props.children}
        <input
          data-testid={props.id}
          id={props.id}
          type={props.type}
          value={props.value}
          {...props.register(props.name, props.validationSchema)}
        />
      </label>
    </>
  );
};
