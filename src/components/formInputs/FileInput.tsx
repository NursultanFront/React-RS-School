import { Inputs } from '../form/form.interface';
import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

// interface ValidationSchema {
//   required: string;
//   validate: {
//     acceptedFormat: (file: FileList | null) => boolean | string;
//   };
// }

interface IProps {
  name: Path<Inputs>;
  id: string;
  children?: string;
  errors: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  // validationSchema?: ValidationSchema;
  required: boolean;
}

export const FileInput = (props: IProps) => {
  return (
    <>
      <label htmlFor={props.id}>
        {props.children}
        <input
          data-testid={props.id}
          id={props.id}
          type="file"
          {...props.register('file', {
            required: 'Field text is required',
            validate: {
              acceptedFormat: (files: FileList | null) =>
                (files && ['image/jpeg', 'image/jpg', 'image/png'].includes(files[0].type)) ||
                'Please choose right format',
            },
          })}
        />
      </label>
      {props.errors && <span className="errors">{props.errors['file']?.message?.toString()}</span>}
    </>
  );
};
