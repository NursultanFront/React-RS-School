import MySelect from '../formInputs/MySelect';
import React, { Component } from 'react';
import { InputField } from '../formInputs/InputField';

interface Product {
  name: string | undefined;
  id: string | number | undefined;
  date: string | undefined;
  brand: string | undefined;
  color: string | undefined;
  img: string | undefined;
}

interface Values {
  id: number;
  brand: string;
}

interface Options {
  empty: string | undefined;
  defaultValue: string;
  values: Values[];
}

interface Input {
  inputTextError: boolean;
  inputDateError: boolean;
  inputFileError: boolean;
  inputRadioError: boolean;
  inputSelectError: boolean;
  inputCheckboxError: boolean;
}

interface State {
  formState: boolean;
  inputState: Input;
}

interface Props {
  count: number;
  getProducts: (value: Product, count: number) => void;
}

export default class Form extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state: State = {
    formState: false,
    inputState: {
      inputTextError: false,
      inputDateError: false,
      inputFileError: false,
      inputRadioError: false,
      inputSelectError: false,
      inputCheckboxError: false,
    },
  };

  inputsDefault: Input = {
    inputTextError: false,
    inputDateError: false,
    inputFileError: false,
    inputRadioError: false,
    inputSelectError: false,
    inputCheckboxError: false,
  };

  form = React.createRef<HTMLFormElement>();
  inputText = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();
  inputRadioBlack = React.createRef<HTMLInputElement>();
  inputRadioWhite = React.createRef<HTMLInputElement>();
  inputSelect = React.createRef<HTMLSelectElement>();
  inputCheckbox = React.createRef<HTMLInputElement>();

  options: Options = {
    empty: this.inputSelect.current?.value,
    defaultValue: 'Choose your phone',
    values: [
      { id: 1, brand: 'Samsung' },
      { id: 2, brand: 'Apple' },
      { id: 3, brand: 'Xiaomi' },
    ],
  };

  createCards = (value: State['formState']) => {
    if (value) {
      const imagePreview = this.inputFile.current?.files;
      const letter = this.inputText.current?.value;
      if (imagePreview && letter) {
        this.props.getProducts(
          {
            name: letter[0].toUpperCase() + letter.slice(1),
            brand: this.inputSelect.current?.value,
            color: this.inputRadioBlack.current?.value ?? this.inputRadioWhite.current?.value,
            img: URL.createObjectURL(imagePreview[0]),
            date: this.inputDate.current?.value,
            id: this.props.count + 1,
          },
          this.props.count + 1
        );
      }
      this.clearForm();
      setTimeout(() => {
        this.setState({ formState: false });
      }, 3000);
    }
  };
  radioCheck = () => {
    const inputRadio = [this.inputRadioWhite, this.inputRadioBlack];

    const radios = inputRadio.some((item) => item.current?.checked === true);
    return radios;
  };

  clearForm = () => {
    this.form.current?.reset();
  };

  checkState = (value: State['inputState']) => {
    const state = Object.values(value).every((item) => item === false);

    this.setState(
      (prevState: State) => {
        return {
          ...prevState,
          formState: state,
        };
      },
      () => this.createCards(this.state.formState)
    );
  };

  removeValidation = () => {
    this.setState((prevState: State) => {
      return {
        ...prevState,
        inputState: { ...this.inputsDefault },
      };
    });
  };

  validation = () => {
    const validate = {
      ...this.inputsDefault,
    };

    if (this.inputText.current?.value.trim() == '') {
      validate.inputTextError = true;
    }

    if (this.inputDate.current?.value == '') {
      validate.inputDateError = true;
    }

    if (this.inputFile.current?.files?.length == 0) {
      validate.inputFileError = true;
    }

    if (!this.radioCheck()) {
      validate.inputRadioError = true;
    }

    if (this.inputSelect.current?.value == '') {
      validate.inputSelectError = true;
    }

    if (!this.inputCheckbox.current?.checked) {
      validate.inputCheckboxError = true;
    }

    this.setState(
      (prevState: State) => {
        return { ...prevState, inputState: { ...validate } };
      },
      () => this.checkState(this.state.inputState)
    );
  };

  onSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.removeValidation();
    this.validation();
  };
  render() {
    return (
      <>
        <div className="d-center">
          <form ref={this.form} onSubmit={this.onSubmit} className="form">
            <InputField
              id="text"
              showError={this.state.inputState.inputTextError}
              errorMessage="Please fill out all fields "
              type="text"
              refProp={this.inputText}
            ></InputField>
            <InputField
              id="date"
              showError={this.state.inputState.inputDateError}
              errorMessage="Please fill out all fields "
              type="date"
              refProp={this.inputDate}
            ></InputField>
            <InputField
              id="file"
              type="file"
              showError={this.state.inputState.inputFileError}
              errorMessage="Please choose the file"
              refProp={this.inputFile}
            ></InputField>
            <div>
              <InputField
                id="black"
                name="color"
                type="radio"
                refProp={this.inputRadioBlack}
                value="Black"
              >
                Black
              </InputField>
              <InputField
                id="white"
                name="color"
                type="radio"
                refProp={this.inputRadioWhite}
                value="White"
              >
                White
              </InputField>
              <p className="errors">
                {this.state.inputState.inputRadioError && 'Please choose one of them'}
              </p>
            </div>
            <MySelect
              id="select"
              showError={this.state.inputState.inputSelectError}
              errorMessage="Please choose your brand"
              refProp={this.inputSelect}
              options={this.options}
            ></MySelect>
            <InputField
              id="check"
              type="checkbox"
              errorMessage="Please fill the checkbox"
              showError={this.state.inputState.inputCheckboxError}
              refProp={this.inputCheckbox}
            >
              I consent to my personal data field, list of extra presents
            </InputField>
            <div>
              <button disabled={this.state.formState} data-testid="btn" type="submit">
                Submit
              </button>
            </div>

            <p className="success">{this.state.formState && 'Submit succesful'}</p>
          </form>
        </div>
      </>
    );
  }
}
