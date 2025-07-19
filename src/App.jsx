import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./Navbar";

// Import all 4 pages
import Home from './pages/home';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import PdfGenerator from './pages/PDFgenerator';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pdf" element={<PdfGenerator />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
