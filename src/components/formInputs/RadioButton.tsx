import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface RadioInputProps<T extends FieldValues> {
  name: Path<T>;
  options: { id: number; value: string }[];
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  required: boolean;
  className?: string;
  errorMessage: string;
}

const RadioInput = <T extends FieldValues>(props: RadioInputProps<T>) => {
  return (
    <>
      <div className={props.className}>
        {props.options &&
          props.options.map((item) => {
            const inputName = item.value.toLowerCase();
            return (
              <label key={item.id} htmlFor={inputName}>
                {item.value}
                <input
                  data-testid={inputName}
                  id={inputName}
                  type="radio"
                  {...props.register(props.name, {
                    required: props.errorMessage,
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
