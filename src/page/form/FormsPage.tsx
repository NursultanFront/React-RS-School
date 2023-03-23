import { InputFile } from '../../components/formInputs/InputFile';
import React, { Component } from 'react';
import Form from '../../components/form/Form';
import { InputField } from '../../components/formInputs/InputField';

interface State {
  inputTextError: boolean;
  inputDateError: boolean;
  inputFileError: boolean;
}

export default class FormsPage extends Component<Record<string, unknown>, State> {
  state: State = {
    inputTextError: false,
    inputDateError: false,
    inputFileError: false,
  };

  form = React.createRef<HTMLFormElement>();
  inputText = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();

  checkState = () => {
    return Object.values(this.state).every((item) => item === false);
  };

  getForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.removeValidation();
    this.validation();
    if (this.checkState()) {
      this.form.current?.reset();
    }
  };

  removeValidation = () => {
    this.setState({ inputDateError: false, inputTextError: false, inputFileError: false });
  };

  validation = () => {
    if (this.inputText.current?.value == '') {
      this.setState({ inputTextError: true });
    }

    if (this.inputDate.current?.value == '') {
      this.setState({ inputDateError: true });
    }

    if (this.inputFile.current?.files?.length == 0) {
      this.setState({ inputFileError: true });
    }
  };
  render() {
    return (
      <>
        <div>
          <form ref={this.form} onSubmit={this.getForm}>
            <InputField
              showError={this.state.inputTextError}
              errorMessage="Validate"
              type="text"
              refProp={this.inputText}
            ></InputField>
            <InputField
              showError={this.state.inputDateError}
              errorMessage="Validate"
              type="date"
              refProp={this.inputDate}
            ></InputField>
            <InputFile
              type="file"
              showError={this.state.inputFileError}
              errorMessage="Validate"
              refProp={this.inputFile}
            ></InputFile>

            <div>
              <button type="submit"></button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
