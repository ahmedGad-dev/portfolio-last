import React, { Suspense } from 'react';
import Header from '../components/header/Header';
import Projects from '../components/projects/Projects'
import Features from '../components/features/Features';
import Repos from '../components/repos/Repos';
import About from '../components/about/About';
import Certifications from '../components/certifications/Certifications';
import Loading from '../components/Loading';

function HomePage(){
  return (
    <div>
      <Header /> 
      <Projects />
      <Features />
       <Suspense fallback={<Loading/>}>
         <Repos hommePage/>
       </Suspense>     
      <About/>
      <Suspense fallback={<Loading/>}>
        <Certifications/>
      </Suspense>       
    </div>
  )
}

export default HomePage