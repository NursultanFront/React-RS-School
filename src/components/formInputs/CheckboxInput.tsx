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
}

export const CheckboxInput = <T extends FieldValues>(props: IProps<T>) => {
  return (
    <>
      <div className={props.className}>
        <label htmlFor={props.id}>
          {props.children}
          <input
            data-testid={props.id}
            id={props.id}
            type="checkbox"
            {...props.register(props.name, {
              required: 'Field text is required',
            })}
            value={props.value}
          />
        </label>
      </div>
      {props.errors && (
        <span className="errors">{props.errors[props.name]?.message?.toString()}</span>
      )}
    </>
  );
};
