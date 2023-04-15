import { api } from '../../api/index';
import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import SearchIcon from '../../assets/search.svg';
import './search.css';
import { Character } from 'api/character/types';
import { useAppDispatch, useAppSelector } from '../../redux-hooks/redux-hooks';

interface IProps {
  getChar: (value: Character[]) => void;
}

interface State {
  inputValue: string;
}

const SearchBar = (props: IProps) => {
  const [inputValue, setInputValue] = useState<State['inputValue']>('');
  const [errorMessage, setErrorMessage] = useState<boolean>(false);
  const valueInput = useRef<string>(localStorage.getItem('input-value') ?? '');

  const dispatch = useAppDispatch();
  const { data, error, loading } = useAppSelector((state) => state.char);

  const getInputText = (event?: React.ChangeEvent<HTMLInputElement>) => {
    if (event && event.target) {
      setInputValue(event.target.value);
      valueInput.current = event.target.value;
    }
  };

  const getData = async () => {
    try {
      props.setError(false);
      props.setLoading(true);
      const { results } = await api.character.searchName(inputValue.toLowerCase());
      localStorage.setItem('characters', JSON.stringify(results));
      props.setLoading(false);
      props.getChar(results);
    } catch (error) {
      props.setError(true);
    }
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

    return () => {
      localStorage.setItem('input-value', valueInput.current);
    };
  }, []);

  return (
    <div>
      <div className="search">
        <h1 className="search-title">Search character</h1>
        <form>
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
        </form>
        <p style={{ marginTop: '20px', color: '#ffffff' }}>
          {errorMessage && 'Please type something'}
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
