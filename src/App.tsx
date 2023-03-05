import React from 'react';
import SearchBar from './components/search-bar/SearchBar';
import './App.css';
import Cards from './components/cards/Cards';

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Cards></Cards>
    </div>
  );
}

export default App;
