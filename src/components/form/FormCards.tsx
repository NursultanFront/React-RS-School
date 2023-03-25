import React, { Component } from 'react';

interface Product {
  id: string | number | undefined;
  date: string | undefined;
  brand: string | undefined;
  color: string | undefined;
  img: string | undefined;
}

interface Props {
  count: number;
  products: Product[];
}

export default class FormCards extends Component<Props> {
  render() {
    const { count, products } = this.props;
    return (
      <ul>
        <h2 className="d-center">{count == 0 ? 'There is no cards' : null}</h2>
        {products &&
          products.map((item) => {
            return <li key={item.id}>{item.brand}</li>;
          })}
      </ul>
    );
  }
}
