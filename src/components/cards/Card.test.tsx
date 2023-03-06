import { render, screen } from '@testing-library/react';

import Cards from './Cards';

describe('App', () => {
  it('renders headline', () => {
    render(<Cards />);
  });
});
