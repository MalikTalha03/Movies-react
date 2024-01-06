import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from 'react-router-dom';
import Movies from './components/Movies';

function App() {
  return (
    <>
    <Movies />
      /*<BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>*/
    </>
  );
}

export default App;
