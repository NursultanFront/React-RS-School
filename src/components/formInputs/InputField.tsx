import { Inputs } from '../form/form.interface';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

type ValidationSchema = {
  required: boolean;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  pattern?: RegExp;
  validate: {
    firstLetter: (value: string) => boolean | string;
  };
};

interface IProps {
  value?: string;
  name: Path<Inputs>;
  type: string;
  id: string;
  children?: string;
  errors: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  validationSchema?: ValidationSchema;
  required: boolean;
}

export const InputField = (props: IProps) => {
  console.dir(props);
  return (
    <>
      <label htmlFor={props.id}>
        {props.children}
        <input
          data-testid={props.id}
          id={props.id}
          type={props.type}
          {...props.register(props.name, props.validationSchema)}
          value={props.value}
        />
      </label>
      {props.errors && props.errors[props.name]?.type === 'minLength' && (
        <span className="error">{props.errors[props.name]?.message}</span>
      )}
      {props.errors && props.errors[props.name]?.type === 'required' && (
        <span className="error">Field text is required</span>
      )}
      {props.errors && props.errors[props.name]?.type === 'maxLength' && (
        <span className="error">{props.errors[props.name]?.message}</span>
      )}
      {props.errors &&
        props.errors[props.name]?.type === 'firstLetter' &&
        props.name === 'text' && <span className="error">{props.errors[props.name]?.message}</span>}
      {props.errors && props.errors[props.name]?.type === 'validateFile' && props.name === 'text'}
    </>
  );
};
