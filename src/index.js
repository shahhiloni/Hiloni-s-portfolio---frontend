import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// common component
import Header from './CommonComponent/Header';
import Navbar from './CommonComponent/Navbar';
import Footer from "./CommonComponent/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>  
<Header />
<Navbar/>
<App />
<Footer />
</BrowserRouter>

);