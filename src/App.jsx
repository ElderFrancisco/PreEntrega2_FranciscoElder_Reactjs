import './App.css';
import Navbar from './components/Navbar';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Contacto from './components/contacto';
import Pokemon from './components/pokemon';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/pokemon' element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
