import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter></AppRouter>
    </BrowserRouter>
  );
}

export default App;
