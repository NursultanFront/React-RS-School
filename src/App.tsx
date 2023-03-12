import React from 'react';
import SearchBar from './components/search-bar/SearchBar';
import './App.css';
import Cards from './components/cards/Cards';
import { products } from './data/cards';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/about">About</Link>
      </header>
      <SearchBar></SearchBar>
      <Cards products={products}></Cards>
    </div>
  );
}

export default App;
