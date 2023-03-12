import React from 'react';
import SearchBar from './components/search-bar/SearchBar';
import './App.css';
import Cards from './components/cards/Cards';
import { products } from 'data/cards';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Cards products={products}></Cards>
    </div>
  );
}

export default App;
