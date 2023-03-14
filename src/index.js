import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import Footer from './components/Footer';
import  Overview  from './pages/info/overview';
import  Brand  from './pages/info/brand';
import  Privilege  from './pages/complex/privilege';
import  Specialize  from './pages/complex/specialize';
import  Premium  from './pages/premium/premium';
import  Premium2  from './pages/premium/premium2';
import  Premium3  from './pages/premium/premium3';
import  Cg  from './pages/unit/cg';
import  UnitP  from './pages/unit/unitP';
import  Unit  from './pages/unit/unit';
import  Vr360  from './pages/unit/vr360';
import News from './pages/prcenter/news';
import Video from './pages/prcenter/video';
import Register from './pages/register/register';
import Location from './pages/register/location';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<App />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/info" element={<Brand />} />
          <Route path="/specialize" element={<Specialize />} />
          <Route path="/privilege" element={<Privilege />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/premium2" element={<Premium2 />} />
          <Route path="/premium3" element={<Premium3 />} />
          <Route path="/cg" element={<Cg />} />
          <Route path="/unitP" element={<UnitP />} />
          <Route path="/unit" element={<Unit />} />
          <Route path="/vr360" element={<Vr360 />} />
          <Route path="/news" element={<News />} />
          <Route path="/video" element={<Video />} />
          <Route path="/register" element={<Register />} />
          <Route path="/location" element={<Location />} />
        </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
