import './App.css';
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
