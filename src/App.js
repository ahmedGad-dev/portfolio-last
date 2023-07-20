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
    <div className="App">
     <Fragment>
      <ScrollToTop>  
       <Routes>      
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>} />
          <Route path='github' element={<Github/>} />
          <Route path='experience' element={<Experience/>} />
        </Route>        
       </Routes> 
      </ScrollToTop>      
      <Footer/> 
     </Fragment>  
    </div>
  );
}

export default App;
