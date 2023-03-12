import { render, screen } from '@testing-library/react';
import { IProduct } from 'data/cards';

import Cards from './Cards';

const products: IProduct[] = [
  {
    brand: 'sdsa',
    descr: 'sdsa',
    eyeIcon: 'sas',
    id: 1,
    images: '111',
    likeIcon: 'sdsa',
    likes: 111,
    title: 'sddsad',
    views: 55,
  },
  {
    brand: 'Apple',
    descr: 'sdsa',
    eyeIcon: 'sas',
    id: 2,
    images: '111',
    likeIcon: 'sdsa',
    likes: 111,
    title: 'sddsad',
    views: 55,
  },
];

describe('App', () => {
  it('test list', () => {
    render(<Cards products={products} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('testing brand', () => {
    render(<Cards products={products}></Cards>);
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
  });
});
