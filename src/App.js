import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import MainPage from './Components/MainPage.tsx';

function App() {
  return (
    <Router>
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/" element={<MainPage />} />
          
        </Routes>
      </Router>
  );
}

export default App;
