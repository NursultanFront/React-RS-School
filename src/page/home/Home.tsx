import React, { Component } from 'react';
import Cards from '../../components/cards/Cards';
import SearchBar from '../../components/search-bar/SearchBar';
import { products } from '../../data/cards';

export default class Home extends Component {
  render() {
    return (
      <>
        <SearchBar></SearchBar>
        <Cards products={products}></Cards>
      </>
    );
  }
}
