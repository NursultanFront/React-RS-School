import { Inputs } from '../form/form.interface';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface ValidationSchema {
  required: string;
  validate: {
    acceptedFormat: (file: FileList | null) => boolean | string;
  };
}

interface IProps {
  name: Path<Inputs>;
  id: string;
  children?: string;
  errors: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  validationSchema: ValidationSchema;
  required: boolean;
}

export const FileInput = (props: IProps) => {
  console.log(props.errors);
  return (
    <>
      <label htmlFor={props.id}>
        {props.children}
        <input
          data-testid={props.id}
          id={props.id}
          type="file"
          {...props.register(props.name, {
            required: 'Field text is required',
            validate: {
              acceptedFormat: (files: FileList | null) =>
                (files && ['image/jpg', 'image/png'].includes(files[0].type)) ||
                'Please choose right format',

              // (files && ['image/jpg', 'image/png'].includes(files[0].type)) ||
              // 'Please choose right format',
            },
          })}
        />
      </label>
      {props.errors && props.errors[props.name]?.type === 'required' && (
        <span className="error">Field text is required</span>
      )}
    </>
  );
};
