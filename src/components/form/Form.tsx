import React, { Component } from 'react';

interface InputForm {
  text: string | undefined;
  date: string | undefined;
  checkBox: boolean | undefined;
  file: number | undefined;
  dropDown: string | undefined;
  radio: string | undefined;
}

interface ErorrsValidation {
  showError: boolean;
  errorText: string;
}

interface State {
  showError: boolean;
  showAproove: boolean;
  errors?: ErorrsValidation[] | [];
}

export default class Form extends Component<Record<string, unknown>, State> {
  state: State = {
    showError: false,
    showAproove: false,
    errors: [],
  };

  public inputForm = {
    inputText: React.createRef<HTMLInputElement>(),
    inputDate: React.createRef<HTMLInputElement>(),
    inputCheckBox: React.createRef<HTMLInputElement>(),
    inputFile: React.createRef<HTMLInputElement>(),
    inputDropdown: React.createRef<HTMLSelectElement>(),
    inputRadio: React.createRef<HTMLInputElement>(),
  };

  validation = (value: InputForm) => {
    console.log(value);
  };

  getForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(this.inputForm.inputText.current?.value);
    // console.log(this.inputForm.inputDate.current?.value);
    // console.log(this.inputForm.inputCheckBox.current?.checked);
    // console.log(this.inputForm.inputFile.current?.files?.length);
    // console.log(this.inputForm.inputDropdown.current?.value);
    // console.log(this.inputForm.inputRadio.current?.value);

    const inputForm: InputForm = {
      text: this.inputForm.inputText.current?.value,
      date: this.inputForm.inputDate.current?.value,
      checkBox: this.inputForm.inputCheckBox.current?.checked,
      file: this.inputForm.inputFile.current?.files?.length,
      dropDown: this.inputForm.inputDropdown.current?.value,
      radio: this.inputForm.inputRadio.current?.value,
    };

    this.validation(inputForm);
  };
  render() {
    return (
      <>
        <div>Forms</div>
        <form onSubmit={this.getForm}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="input-text">
              <input type="text" id="input-text" ref={this.inputForm.inputText} />
              <p>{this.state.showError}</p>
            </label>
            <label htmlFor="input-date">
              <input type="date" name="" id="input-date" ref={this.inputForm.inputDate} />
            </label>
            <label htmlFor="input-checkbox">
              <input
                type="checkbox"
                name=""
                id="input-checkbox"
                ref={this.inputForm.inputCheckBox}
              />
            </label>
            <label>
              <select defaultValue="HTML" name="select" ref={this.inputForm.inputDropdown}>
                <option value="HTML">Значение 1</option>
                <option value="CSS" selected>
                  Значение 2
                </option>
                <option value="JS">Значение 3</option>
              </select>
            </label>
            <label htmlFor="input-file">
              <input type="file" name="" id="input-file" ref={this.inputForm.inputFile} />
            </label>

            <label htmlFor="first">
              First
              <input
                type="radio"
                name="a"
                id="first"
                ref={this.inputForm.inputRadio}
                value="first"
              />
            </label>
            <label htmlFor="second">
              Second
              <input
                type="radio"
                name="a"
                id="second"
                ref={this.inputForm.inputRadio}
                value="second"
              />
            </label>
          </div>

          <button type="submit">Send</button>
        </form>
      </>
    );
  }
}
