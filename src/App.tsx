import React from 'react';
import SearchBar from './components/search-bar/SearchBar';
import './App.css';
import Cards from './components/cards/Cards';
import { products } from './data/cards';
import Header from './components/header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
}

export default App;
