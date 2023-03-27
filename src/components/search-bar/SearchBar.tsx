import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import SearchIcon from '../../assets/search.svg';
import './search.css';

interface State {
  inputValue: string;
}

// class SearchBar extends React.Component<Record<string, unknown>, State> {
//   state: State = { inputValue: '' };

//   public getInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
//     this.setState({ inputValue: event.target.value });
//   };

//   componentDidMount(): void {
//     this.setState({ inputValue: localStorage.getItem('input-value') ?? '' });
//   }

//   componentWillUnmount(): void {
//     localStorage.setItem('input-value', this.state.inputValue);
//   }

//   render() {
//     return (
//       <div className="search">
//         <h1 className="search-title">Search Something</h1>
//         <label className="input-wrapper">
//           <img
//             src={SearchIcon}
//             alt="Search icon"
//             height={20}
//             width={20}
//             className="input-search-icon"
//           />
//           <input
//             data-testid="input-text-search"
//             className="input-search"
//             type="text"
//             value={this.state.inputValue}
//             onChange={this.getInputText}
//             placeholder="Search"
//           />
//         </label>
//       </div>
//     );
//   }
// }

const SearchBar = () => {
  const [inputValue, setInputValue] = useState<State['inputValue']>('');

  const value = useRef<string>('');

  const getInputText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    value.current = inputValue;
  };

  useEffect(() => {
    setInputValue(localStorage.getItem('input-value') ?? '');

    return () => {
      localStorage.setItem('input-value', value.current);
    };
  }, []);

  return (
    <div>
      <div className="search">
        <h1 className="search-title">Search Something</h1>{' '}
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
            value={inputValue}
            onChange={getInputText}
            placeholder="Search"
          />
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
