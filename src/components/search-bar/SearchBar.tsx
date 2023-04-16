import { useEffect, useRef, useState } from 'react';
import SearchIcon from '../../assets/search.svg';
import './search.css';
import { useAppDispatch } from '../../redux-hooks/redux-hooks';
import { setSearchChar, setSearch } from '../../store/character/character';

interface IProps {
  search: string;
}

interface State {
  inputValue: string;
}

const SearchBar = (props: IProps) => {
  const [inputValue, setInputValue] = useState<State['inputValue']>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const valueInput = useRef<string>(props.search ?? '');

  const dispatch = useAppDispatch();

  const getInputText = (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setInputValue(event.target.value);
      valueInput.current = event.target.value;
    }
  };

  const getData = async () => {
    dispatch(setSearchChar(inputValue.toLowerCase()));
    dispatch(setSearch(inputValue));
  };

  const searchChar = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') {
      return;
    }

    if (valueInput.current.length == 0) {
      setErrorMessage(true);
      return;
    }
    setErrorMessage(false);
    getInputText();
    getData();
  };

  useEffect(() => {
    setInputValue(valueInput.current);
  }, []);

  return (
    <div>
      <div className="search">
        <h1 className="search-title">Search character</h1>
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
            onKeyDown={searchChar}
            placeholder="Search"
          />
        </label>
        <p style={{ marginTop: '20px', color: '#ffffff' }}>
          {errorMessage && 'Please type something'}
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
