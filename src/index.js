import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './pages/home';
import Media from './pages/media';
import Correios from './pages/Correios';
import Concessionaria from './pages/Concessionaria';
import Sorveteria from './pages/sorvete';
import Imdb from './pages/imdb';
import Pokemon from './pages/pokemon';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route path='/Media' element={<Media/>} />
        <Route path='/Correios' element={<Correios/>} />
        <Route path='/Concessionaria' element={<Concessionaria/>} />
        <Route path='/Sorveteria' element={<Sorveteria/>} />
        <Route path='/Imdb' element={<Imdb/>} />
        <Route path='/Pokemon' element={<Pokemon/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
