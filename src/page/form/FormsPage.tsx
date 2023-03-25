import React, { Component } from 'react';
import Form from '../../components/form/Form';
import FormCards from '../../components/form/FormCards';

interface Props {
  message?: string;
}

interface Product {
  id: string | number | undefined;
  date: string | undefined;
  brand: string | undefined;
  color: string | undefined;
  img: string | undefined;
}

interface State {
  count: number;
  products: Product[];
}

export default class FormsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state: State = {
    count: 0,
    products: [],
  };

  componentDidMount(): void {
    const card = localStorage.getItem('cards');
    if (typeof card === 'string') {
      const parse = JSON.parse(card);
      this.setState({ products: parse });
    }

    const countCards = localStorage.getItem('countCards');
    this.setState({ count: Number(countCards) });
  }

  componentDidUpdate(): void {
    localStorage.setItem('cards', JSON.stringify(this.state.products));
    localStorage.setItem('countCards', JSON.stringify(this.state.count));
  }

  getProducts = (value: Product, count: number) => {
    this.setState((prevState: State) => {
      return {
        ...prevState,
        count,
        products: [...prevState.products, value],
      };
    });
  };

  render() {
    return (
      <>
        <Form getProducts={this.getProducts} count={this.state.count}></Form>
        <FormCards count={this.state.count} products={this.state.products}></FormCards>
      </>
    );
  }
}
