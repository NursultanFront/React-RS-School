import { Inputs } from '../form/form.interface';
import { FieldErrors, Path, UseFormRegister } from 'react-hook-form';
import { ReactNode } from 'react';

type ValidationScheme = {
  required: string;
  validate: {
    acceptedFormat: (files: FileList | null) => string | boolean;
  };
};

interface IProps {
  name: Path<Inputs>;
  id: string;
  children?: ReactNode;
  errors: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  required: boolean;
  className?: string;
  validationSchema: ValidationScheme;
}

export const FileInput = (props: IProps) => {
  return (
    <>
      <label htmlFor={props.id}>
        {props.children}
        <input
          className={props.className}
          data-testid={props.id}
          id={props.id}
          type="file"
          {...props.register('file', props.validationSchema)}
        />
      </label>
      {props.errors && <span className="errors">{props.errors['file']?.message?.toString()}</span>}
    </>
  );
};
