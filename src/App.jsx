import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Agreement from './pages/Agreement';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/agreement" element={<Agreement />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;