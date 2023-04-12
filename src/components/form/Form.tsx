import { useEffect, useState } from 'react';
import MySelect from '../formInputs/MySelect';
import { InputField } from '../formInputs/InputField';
import { useForm } from 'react-hook-form';
import { Inputs, OptionEnum, Options, Product } from './form.interface';
import { FileInput } from '../formInputs/FileInput';
import { CheckboxInput } from '../formInputs/CheckboxInput';
import RadioButton from '../formInputs/RadioButton';

import './form.css';
interface Props {
  count: number;
  getProducts: (value: Product, count: number) => void;
}

const Form = (props: Props) => {
  const [showSucces, setShowSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },

    reset,
  } = useForm<Inputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const options: Options = {
    defaultValue: 'Choose your brand',
    values: [
      { id: 1, brand: OptionEnum.Samsung },
      { id: 2, brand: OptionEnum.Apple },
      { id: 3, brand: OptionEnum.Xiaomi },
    ],
  };

  const radioOptions = [
    { id: 1, value: 'Black' },
    { id: 2, value: 'White' },
  ];

  const validationSchema = {
    required: 'Field text is required',
    minLength: {
      value: 3,
      message: 'Please enter a minimum of 3 characters',
    },
    maxLength: {
      value: 10,
      message: 'Please enter a maximum of 10 characters',
    },
    validate: {
      firstLetter: (value: string) =>
        value[0] === value[0].toUpperCase() || 'First letter must be uppercase',
    },
  };

  const fileValidateScheme = {
    required: 'Field text is required',
    validate: {
      acceptedFormat: (files: FileList | null) =>
        (files && ['image/jpeg', 'image/jpg', 'image/png'].includes(files[0].type)) ||
        'Please choose right format',
    },
  };

  const onSubmit = (data: Inputs) => {
    setShowSuccess(true);
    props.getProducts(
      {
        brand: data.options,
        color: data.color,
        date: data.date,
        id: props.count + 1,
        img: URL.createObjectURL(data.file![0]),
        name: data.text,
      },
      props.count + 1
    );

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [reset, isSubmitSuccessful]);

  return (
    <div className="d-center">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <InputField
          id="text"
          type="text"
          name="text"
          errors={errors}
          register={register}
          required
          validationSchema={validationSchema}
          className="input-text"
        />
        <InputField
          id="date"
          type="date"
          name="date"
          errors={errors}
          register={register}
          required
          validationSchema={validationSchema}
          className="input-text"
        />
        <FileInput
          errors={errors}
          id="file"
          register={register}
          required
          className="input-text"
          validationSchema={fileValidateScheme}
        />

        <RadioButton
          errors={errors}
          required
          name="color"
          register={register}
          options={radioOptions}
          errorMessage="Please choose one of the color"
          className="input-text"
        />

        <MySelect
          name="options"
          id="select"
          errors={errors}
          register={register}
          options={options}
          required
          className="input-text"
        />

        <CheckboxInput
          id="check"
          name="check"
          errors={errors}
          register={register}
          required
          className="input-text"
        >
          I consent to my personal data field, list of extra presents
        </CheckboxInput>

        <button disabled={showSucces} data-testid="btn" type="submit">
          Submit
        </button>
        {showSucces && <p className="success">Form submitted</p>}
      </form>
    </div>
  );
};

export default Form;
