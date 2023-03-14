import Header from '@/components/header/Header';
import { Outlet } from 'react-router-dom';
import './App.css';
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
