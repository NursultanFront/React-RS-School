import MySelect from '../formInputs/MySelect';
import { InputField } from '../formInputs/InputField';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Inputs, OptionEnum, Options, Product } from './form.interface';
import { FileInput } from '../formInputs/FileInput';

interface Props {
  count: number;
  getProducts: (value: Product, count: number) => void;
}

const Form = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const options: Options = {
    defaultValue: 'Choose your phone',
    values: [
      { id: 1, brand: OptionEnum.Samsung },
      { id: 2, brand: OptionEnum.Apple },
      { id: 3, brand: OptionEnum.Xiaomi },
    ],
  };

  const validationSchema = {
    required: true,
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

  const fileValidationSchema = {
    required: 'Field text is required',
    validate: {
      acceptedFormat: (files: string) =>
        (files.length > 0 && files[0].startsWith('image')) || 'Please choose right format',
    },
  };

  const onSubmit = (data: Inputs) => {
    console.log(data);
  };

  return (
    <div className="d-center">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* <InputField
          id="text"
          type="text"
          name="text"
          errors={errors}
          register={register}
          required
          validationSchema={validationSchema}
        /> */}
        {/* <InputField
          id="date"
          type="date"
          name="date"
          errors={errors}
          register={register}
          required
        /> */}
        {/* <InputField
          id="file"
          type="file"
          errors={errors}
          register={register}
          name="file"
          required
        ></InputField> */}
        <FileInput
          errors={errors}
          id="file"
          name="file"
          register={register}
          validationSchema={fileValidationSchema}
          required
        ></FileInput>

        {/* <div>
          <InputField
            id="black"
            errors={errors}
            register={register}
            name="color"
            type="radio"
            value="Black"
            required
          >
            Black
          </InputField>
          <InputField
            id="white"
            name="color"
            register={register}
            errors={errors}
            type="radio"
            value="White"
            required
          >
            White
          </InputField>
        </div>

        <MySelect
          name="options"
          id="select"
          errors={errors}
          register={register}
          options={options}
          required
        ></MySelect>

        <InputField
          id="check"
          type="checkbox"
          name="check"
          errors={errors}
          register={register}
          required
        >
          I consent to my personal data field, list of extra presents
        </InputField> */}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
