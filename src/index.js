import React from 'react';
import ReactDOM from 'react-dom/client';
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      {/* <Route path='/contact/:name/:age/:designation' element={<Contact />} /> */}
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<h1>page not found</h1>} />
    </Routes>
  </BrowserRouter>
);
