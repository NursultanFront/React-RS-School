import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('renders headline', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    screen.debug();

    // check if App components renders headline
  });
});
