import { Options } from '../form/form.interface';

import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface IProps<T extends FieldValues> {
  value?: string;
  name: Path<T>;
  id: string;
  children?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required: boolean;
  className?: string;
  options: Options;
}

export const MySelect = <T extends FieldValues>(props: IProps<T>) => {
  return (
    <>
      <select
        {...props.register(props.name, {
          required: 'Please choose one of the brand',
        })}
        defaultValue=""
        name={props.name}
        data-testid={props.id}
        className={props.className}
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
      {props.errors && (
        <span className="errors">{props.errors[props.name]?.message?.toString()}</span>
      )}
    </>
  );
};

export default MySelect;
