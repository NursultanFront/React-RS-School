import { Inputs } from '../form/form.interface';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

type ValidationSchema = {
  required: string;
  minLength?: { value: number; message: string };
  maxLength?: { value: number; message: string };
  validate: {
    firstLetter: (value: string) => boolean | string;
  };
};

interface IinputTextProps<T extends FieldValues> {
  value?: string;
  name: Path<T>;
  type: string;
  id: string;
  children?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required: boolean;
  validationSchema: ValidationSchema;
  className?: string;
}

export function InputField<T extends FieldValues>(props: IinputTextProps<T>) {
  console.log(props);
  return (
    <>
      <label htmlFor={props.id}>
        {props.children}
        <input
          className={props.className}
          data-testid={props.id}
          id={props.id}
          type={props.type}
          {...props.register(props.name, props.validationSchema)}
          value={props.value}
        />
      </label>
      {props.errors && (
        <span className="errors">{props.errors[props.name]?.message?.toString()}</span>
      )}
    </>
  );
}
