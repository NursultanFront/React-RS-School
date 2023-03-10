import React from 'react';
import SearchIcon from '../../assets/search.svg';
import './search.css';

interface State {
  inputValue: string;
}

class SearchBar extends React.Component<Record<string, unknown>, State> {
  state: State = { inputValue: '' };

  public getInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: event.target.value });
  };

  componentDidMount(): void {
    this.setState({ inputValue: localStorage.getItem('input-value') ?? '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('input-value', this.state.inputValue);
  }

  render() {
    return (
      <div className="search">
        <h1 className="search-title">Search Something</h1>
        <label className="input-wrapper">
          <img
            src={SearchIcon}
            alt="Search icon"
            height={20}
            width={20}
            className="input-search-icon"
          />
          <input
            data-testid="input-text-search"
            className="input-search"
            type="text"
            value={this.state.inputValue}
            onChange={this.getInputText}
            placeholder="Search"
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
