import { Routes, Route } from 'react-router-dom';

import './App.css';

import { AuthContextProvider } from './context/AuthContext';

import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import BestSellers from './pages/BestSellers';

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/best-sellers' element={<BestSellers />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
