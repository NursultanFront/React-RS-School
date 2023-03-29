import { Inputs } from '../form/form.interface';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

type ValidationSchema = {
  required: string;
  minLength: { value: number; message: string };
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
    </>
  );
};
