import Cards from 'components/cards/Cards';
import React, { Component } from 'react';
import Form from '../../components/form/Form';

interface Props {
  message?: string;
}

interface Product {
  id?: string | number;
  data?: Date;
  brand?: string;
  color?: string;
  img?: string;
}

interface State {
  products: Product[];
}

export default class FormsPage extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  state: State = {
    products: [],
  };

  getProducts = (value: Product) => {
    console.log(value);
    this.setState((prevState: State) => {
      return {
        ...prevState,
        products: [...prevState.products, value],
      };
    });
  };

  render() {
    return (
      <>
        <Form getProducts={this.getProducts}></Form>
        {/* <Cards></Card> */}
      </>
    );
  }
}
