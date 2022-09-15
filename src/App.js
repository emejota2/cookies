import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Lector from './components/Lector';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/lector' element={<Lector />} />
      </ Routes>
    </ Router>
  );
}

export default App;
