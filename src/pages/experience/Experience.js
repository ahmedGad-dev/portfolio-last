import React from 'react'
import turing1 from '../../assets/images/turing-react.webp'
import turing2 from '../../assets/images/front-end-turing.webp'
import turing3 from '../../assets/images/redux-turing.webp'
import linkedin1 from '../../assets/images/css-badge.webp'
import linkedin2 from '../../assets/images/linkedIn-badge.webp'
import linkedin3 from '../../assets/images/react-js-certificate.webp'
import { LazyLoadImage } from "react-lazy-load-image-component";
import './experience.scss'
import Cv from '../../components/cv/CV'

const Experience = () => {
  return (
   <section className='mt-12'>
    <div className='flex flex-col lg:flex-row '>
      <div className="side-bar flex flex-col w-full lg:w-1/3 justify-center align-center items-center">
        <div className="flex flex-row justify-around items-center w-full">    
          <h3>Download my CV here</h3>   
          <Cv/>    
        </div>
        <div className="details p-12">
          <div className="information-block mb-8 text-start">
            <h3 className='employer'>Freelance</h3>
            <div className="job-title">Full Stack Web Developer</div>
            <span className='period'>May 2022 </span>
            <ul className="skills">
              <li>Building Full Stack Web Apps</li>
              <li>React/Redux</li>
              <li>UI/UX</li>
              <li>Web API's</li>
              <li>Node/Express</li>
              <li>PWA</li>
            </ul>
          </div>
          
          <div className="information-block mb-8 text-start">
            <h3 className='employer'>UDCO Systems</h3>
            <div className="job-title">React Developer</div>
            <span className='period'>Oct 2020 - May 2023 </span>
              <ul className='skills'>
                <li>Design, develop, testing react web apps </li>
                <li>Apply Performance optimizations for products</li>
                <li>work on Back End with Node express server or Firebase</li>
                <li>Make progressive web apps</li>
                <li>Unit and integration testing (jest)</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>AWS</li>
                <li>CMS</li>
                <li>Wordpress</li>
                <li>Hosting & CPanel</li>
              </ul>
          </div>

          <div className="information-block mb-8 text-start">
            <h3 className='employer'>Circles Systems</h3>
            <div className="job-title">Front end web developer</div>
            <span className='period'>Jan 2020 - Oct 2020</span>
            <ul className='skills'>
              <li>Design, develop and test UI/UX</li>
              <li>Implement Functions and logic with time and complexity optimizations</li>
              <li>Performance optimizations</li>
              <li>SEO optimization</li>
              <li>Unit testing</li>
              <li>MVC building approach</li>
              <li>Deploy web apps to production </li>
              <li>configuring web pack and babel</li>
              <li>AWS</li>
              <li>CMS</li>
            </ul>
          </div>
        </div>
      </div>

     <div className="gallery w-full h-auto lg:w-2/3">
      <figure className="gallery__item gallery__item--1"><LazyLoadImage src={turing1} alt="Gallery" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--2"><LazyLoadImage src={turing3} alt="Gallery" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--3"><LazyLoadImage src={turing2} alt="Gallery" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--4"><LazyLoadImage src={linkedin1} alt="Gallery" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--5"><LazyLoadImage src={linkedin2} alt="Gallery" className="gallery__img"/></figure>
      <figure className="gallery__item gallery__item--6"><LazyLoadImage src={linkedin3} alt="Gallery" className="gallery__img"/></figure>
     </div>
    </div>
  </section>
  )
}

export default Experience