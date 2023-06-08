import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Navbar from "./Components/navbar";
import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
import Donate from './pages/donate';


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

