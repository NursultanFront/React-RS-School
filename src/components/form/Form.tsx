import MySelect from '../formInputs/MySelect';
import { InputField } from '../formInputs/InputField';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Inputs, OptionEnum, Options, Product } from './form.interface';

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

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
        />
        <InputField
          id="date"
          type="date"
          name="date"
          errors={errors}
          register={register}
          required
        />
        <InputField
          id="file"
          type="file"
          errors={errors}
          register={register}
          name="file"
          required
        ></InputField>

        <div>
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
        </InputField>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
