import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import SearchBar from './SearchBar';

describe('Testing SearchBar', () => {
  it('renders headline', () => {
    render(<SearchBar />);
    const someText = screen.getByText(/search/i);
    expect(someText).toBeInTheDocument();
  });

  it('test input placeholder', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/Search/i);
    expect(input).toBeInTheDocument();
  });

  it('testing svg', () => {
    render(<SearchBar />);
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', '/src/assets/search.svg');
    expect(logo).toHaveAttribute('alt', 'Search icon');
  });

  it('test input change', () => {
    render(<SearchBar />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, {
      target: { value: '123' },
    });
    expect(input).toContainHTML('123');
  });
});

const setLocalStorage = (id: string, data: { data: string }) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};

describe('Set local storage item', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  test('data is added into local storage', () => {
    const mockId = '111';
    const mockJson = { data: 'json data' };
    setLocalStorage(mockId, mockJson);
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
  });

  test('data in local storage which is overwritten', () => {
    const mockId = '222';
    const mockOldData = { data: 'json data' };
    const mockNewData = { data: ' new data' };

    window.localStorage.setItem(mockId, JSON.stringify(mockOldData));
    expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockOldData));

    setLocalStorage(mockId, mockNewData);
    window.localStorage.setItem(mockId, JSON.stringify(mockNewData));
  });
});
