import React, {Fragment} from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Github from './pages/Github';
import Footer from './components/footer/Footer';
import ScrollToTop from './hoc/ScrollToTop'
import Experience from './pages/experience/Experience';

function App() {
  return (

      <ScrollToTop> 
       <Navbar/>
       <Routes>      
        <Route path='/' element={<HomePage/>}/>
        <Route path='github' element={<Github/>}/>
        <Route path='experience' element={<Experience/>}/>       
       </Routes>       
       <Footer/> 
      </ScrollToTop>   
   
  );
}

export default App;
