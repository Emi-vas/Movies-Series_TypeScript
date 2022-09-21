import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import MainPage from './page/MainPage';
import Movies from './page/Movies';
import Series from './page/Series';
import './styles/style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<MainPage type="movie" />} />
        <Route path='/series' element={<MainPage type="tv" />} />
    </Routes>
  </BrowserRouter>
);

