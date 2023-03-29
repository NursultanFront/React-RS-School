import { Inputs, Options } from '../form/form.interface';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';

type ValidationSchema = {
  required: string;
  minLength: { value: number; message: string };
};

interface IProps {
  id: string;
  options: Options;
  name: Path<Inputs>;
  errors?: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  validationSchema?: ValidationSchema;
  required?: boolean;
}

export const MySelect = (props: IProps) => {
  return (
    <>
      <select
        {...props.register(props.name)}
        defaultValue=""
        name={props.name}
        data-testid={props.id}
      >
        <option value="" disabled>
          {props.options.defaultValue}
        </option>
        {props.options.values.map((option) => (
          <option key={option.id} value={option.brand}>
            {option.brand}
          </option>
        ))}
      </select>
    </>
  );
};

export default MySelect;
