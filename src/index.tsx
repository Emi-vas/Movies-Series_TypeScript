import ReactDOM from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BackPortfolio from './components/BackPortfolio';
import Home from './page/Home';
import MainPage from './page/MainPage';
import './styles/style.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <BackPortfolio />
    <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/movies' element={<MainPage type="movie" />} />
        <Route path='/series' element={<MainPage type="tv" />} />
    </Routes>
  </BrowserRouter>
);

