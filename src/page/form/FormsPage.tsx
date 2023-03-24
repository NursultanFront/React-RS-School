import Cards from 'components/cards/Cards';
import React, { Component } from 'react';
import Form from '../../components/form/Form';
import type { IProduct } from 'data/cards';

interface Props {
  message?: string;
}

export default class FormsPage extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <>
        <Form></Form>
        {/* <Cards></Card> */}
      </>
    );
  }
}
