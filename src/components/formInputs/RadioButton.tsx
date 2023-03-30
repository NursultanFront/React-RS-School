import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface RadioInputProps<T extends FieldValues> {
  name: Path<T>;
  options: { id: number; value: string; radioName: string }[];
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required: boolean;
  className?: string;
}

const RadioInput = <T extends FieldValues>(props: RadioInputProps<T>) => {
  return (
    <>
      <div className={props.className}>
        {props.options &&
          props.options.map((item) => {
            return (
              <label key={item.id} htmlFor={item.radioName}>
                {item.value}
                <input
                  data-testid={item.radioName}
                  id={item.radioName}
                  type="radio"
                  {...props.register(props.name, {
                    required: 'Please choose one of the color',
                  })}
                  value={item.value}
                />
              </label>
            );
          })}
      </div>
      {props.errors && (
        <span className="errors">{props.errors[props.name]?.message?.toString()}</span>
      )}
    </>
  );
};

export default RadioInput;
