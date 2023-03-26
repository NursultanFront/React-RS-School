import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Form from './Form';

const count = 0;
const getProducts = vi.fn();

describe('Testing form', () => {
  window.URL.createObjectURL = vi.fn();

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it('Testing function', () => {
    const { debug } = render(<Form count={count} getProducts={getProducts} />);
    const btn = screen.getByTestId('btn');

    fireEvent.click(btn);
    waitFor(() => {
      expect(getProducts).toHaveBeenCalledOnce();
    });
  });

  it('testing file', async () => {
    const user = userEvent.setup();
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    render(<Form count={count} getProducts={getProducts} />);

    const input = screen.getByLabelText(/upload/i) as HTMLInputElement;

    await user.upload(input, file);

    expect(input.files).toHaveLength(1);
  });

  it('testing all form', async () => {
    render(<Form count={count} getProducts={getProducts} />);

    const input = screen.getByTestId('file') as HTMLInputElement;
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    const text = screen.getByTestId('text');

    const date = screen.getByTestId('date');
    const radioBlack = screen.getByTestId('black');
    const radioWhite = screen.getByTestId('white');
    const select = screen.getByTestId('select') as HTMLSelectElement;
    const checkbox = screen.getByTestId('check');

    const btn = screen.getByTestId('btn');

    const user = userEvent.setup();
    await user.type(text, 'Hello');
    await user.type(date, '2023-03-12');
    await user.upload(input, file);
    await user.click(radioBlack);
    await user.selectOptions(select, 'Apple');
    await user.click(checkbox);
    expect(radioWhite).not.toBeChecked();
    expect(radioBlack).toBeChecked();
    await user.click(btn);

    expect(getProducts).toHaveBeenCalledOnce();

    expect(text).toHaveValue('');
    expect(radioWhite).not.toBeChecked();
    expect(radioBlack).not.toBeChecked();
    expect(checkbox).not.toBeChecked();
  });
});
