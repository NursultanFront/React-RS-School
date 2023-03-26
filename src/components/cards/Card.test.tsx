import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import { IProduct } from 'data/cards';

import Cards from './Cards';

const oneProduct: IProduct[] = [
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

const allProduct: IProduct[] = [
  {
    brand: 'Apple',
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

describe('Testing all cards', () => {
  it('test list', () => {
    render(<Cards products={allProduct} />);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});

describe('Test once card', () => {
  it('testing brand', () => {
    render(<Cards products={oneProduct} />);
    expect(screen.getByText(/apple/i)).toBeInTheDocument();
  });

  it('testing alt text', () => {
    render(<Cards products={oneProduct} />);

    const altText = screen.getByAltText('views');
    expect(altText).toBeInTheDocument();
  });
});
