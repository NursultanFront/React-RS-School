import { InputFile } from '../../components/formInputs/InputFile';
import React, { Component } from 'react';
import Form from '../../components/form/Form';
import { InputField } from '../../components/formInputs/InputField';

interface Props {
  message?: string;
}

interface Input {
  inputTextError: boolean;
  inputDateError: boolean;
  inputFileError: boolean;
}

interface State {
  formState: boolean;
  inputState: Input;
}

export default class FormsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      formState: false,
      inputState: {
        inputTextError: false,
        inputDateError: false,
        inputFileError: false,
      },
    };
  }

  form = React.createRef<HTMLFormElement>();
  inputText = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();

  checkState = () => {
    const state = Object.values(this.state.inputState).every((item) => item === false);
    console.log(Object.values(this.state.inputState).every((item) => item === false));
    console.log(this.state.inputState);
    console.log(state);
    if (state) {
      this.setState((prevState: State) => {
        return {
          ...prevState,
          formState: true,
        };
      });
    }
  };

  getForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    await this.removeValidation();
    await this.validation();
    await this.checkState();

    if (this.state.formState) {
      this.form.current?.reset();
    }
  };

  removeValidation = () => {
    this.setState((prevState: State) => {
      return {
        ...prevState,
        inputState: { inputTextError: false, inputDateError: false, inputFileError: false },
      };
    });
  };

  validation = () => {
    if (this.inputText.current?.value == '') {
      this.setState((prevState: State) => {
        return { ...prevState, inputState: { ...prevState.inputState, inputTextError: true } };
      });
    }

    if (this.inputDate.current?.value == '') {
      this.setState((prevState: State) => {
        return { ...prevState, inputState: { ...prevState.inputState, inputDateError: true } };
      });
    }

    if (this.inputFile.current?.files?.length == 0) {
      this.setState((prevState: State) => {
        return { ...prevState, inputState: { ...prevState.inputState, inputFileError: true } };
      });
    }
  };
  render() {
    return (
      <>
        <div>
          <form ref={this.form} onSubmit={this.getForm}>
            <InputField
              showError={this.state.inputState.inputTextError}
              errorMessage="Validate"
              type="text"
              refProp={this.inputText}
            ></InputField>
            <InputField
              showError={this.state.inputState.inputDateError}
              errorMessage="Validate"
              type="date"
              refProp={this.inputDate}
            ></InputField>
            <InputFile
              type="file"
              showError={this.state.inputState.inputFileError}
              errorMessage="Validate"
              refProp={this.inputFile}
            ></InputFile>

            <div>
              <button type="submit"></button>
            </div>

            <p>{this.state.formState && 'Проверка прошла'}</p>
          </form>
        </div>
      </>
    );
  }
}
