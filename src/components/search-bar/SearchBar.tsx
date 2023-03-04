import React from 'react';
import SearchIcon from '../../assets/search.svg';
import './search.css';
interface State {
  inputValue: string;
}

class SearchBar extends React.Component<Record<string, unknown>, State> {
  state: State = { inputValue: '' };

  componentDidMount(): void {
    this.setState({ inputValue: localStorage.getItem('input-value') ?? '' });
  }

  componentWillUnmount(): void {
    localStorage.setItem('input-value', this.state.inputValue);
  }

  render() {
    return (
      <div>
        <label className="input-wrapper">
          <img src={SearchIcon} alt="Поиск" height={20} width={20} className="input-search-icon" />
          <input
            className="input-search"
            type="text"
            value={this.state.inputValue}
            onChange={(event) => this.setState({ inputValue: event.target.value })}
          />
        </label>
      </div>
    );
  }
}

export default SearchBar;
