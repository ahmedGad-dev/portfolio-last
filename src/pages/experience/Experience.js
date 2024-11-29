import React from 'react'
import turing1 from '../../assets/images/turing-react.webp'
import turing2 from '../../assets/images/front-end-turing.webp'
import turing3 from '../../assets/images/redux-turing.webp'
import linkedin1 from '../../assets/images/css-badge.webp'
import linkedin2 from '../../assets/images/linkedIn-badge.webp'
import linkedin3 from '../../assets/images/react-js-certificate.webp'
import freeCodeCamp from '../../assets/images/free-code-camp.webp'
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
            <h3 className='employer'>CREATION.LTD</h3>
            <div className="job-title">REACT/NEXT FRONT END DEVELOPER</div>
            <span className='period'>JULY 2024 - PRESENT </span>
              <ul className='skills'>
                <li>In creation we work on an invitation maker app it has a huge state as it allows users to make a whole design on an invitation including choosing themes, many colors features, texts, pictures of card and background,
                   even the ability to track those invitations and add other cohosts to it it's coming live soon.
                </li>
                <li>React, Redux toolkit, RTK query, tailwind CSS, react hook form, Chadcn</li>
                <li>SaaS applications & dashboards</li>
                <li>Attention to the most simplest details for working in the design and marketing field</li>
                <li>Make progressive web apps</li>
                <li>Unit testing (jest)</li>
                <li>CI/CD</li>
              </ul>
          </div> 

        <div className="information-block mb-8 text-start">
            <h3 className='employer'>E2E COUNTY TRAVWARE SOLUTIONS</h3>
            <div className="job-title">REACT/NEXT FRONT END DEVELOPER</div>
            <span className='period'>OCT 2023 - JULY 2024 </span>
              <ul className='skills'>
                <li>Developing Booking engines and ERB systems that contains complex 
                  mathematical equations and features as they were working in the tourism and travel domain.</li>
                <li>Apply Performance optimizations for products</li>
                <li>Singular page applications with NEXT.js routes</li>
                <li>Server side rendering (SSR)</li>
                <li>Make progressive web apps</li>
                <li>Unit and integration testing (jest)</li>
                <li>Docker</li>
                <li>CI/CD</li>
                <li>Form Generators</li>
              </ul>
          </div> 

          <div className="information-block mb-8 text-start">
            <h3 className='employer'>Dracode</h3>
            <div className="job-title">REACT/NEXT FRONT END DEVELOPER</div>
            <span className='period'>NOV 2022 - AUGUST 2023</span>
              <ul className='skills'>
                <li>
                   Dracode is a software house developing all kinds of various projects using cutting edge modern technologies like react, 
                  redux, javascript, tailwind CSS and others to develop high quality SPA applications.
                  </li>
              </ul>
          </div> 

          <div className="information-block mb-8 text-start">
            <h3 className='employer'>Circles Systems</h3>
            <div className="job-title">Front end web developer</div>
            <span className='period'>OCT 2021 - JULY 2022</span>
            <ul className='skills'>
              <li>Develop and maintain SaaS projects</li>
              <li>HTML/CSS/JS</li>
              <li>Performance optimizations</li>
              <li>SEO optimization</li>
              <li>Unit testing</li>
              <li>MVC</li>
              <li>Deploy web apps to production </li>
              <li>configuring web pack and babel</li>
              <li>AWS</li>
              <li>CMS</li>
            </ul>
          </div>

          <div className="information-block mb-8 text-start">
            <h3 className='employer'>Freelance</h3>
            <div className="job-title">Full Stack Web Developer</div>
            <span className='period'>MAY 2021 - PRESENT</span>
            <ul className="skills">
              <li>Building Full Stack Web Apps</li>
              <li>React/Redux</li>
              <li>CSS/Tailwind</li>
              <li>Web API's</li>
              <li>Node/Express</li>
              <li>PWA</li>
              <li>Word Press</li>
              <li>CMS</li>
              <li>Hosting & CPanel</li>
              <li>Firebase</li>
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
         <figure className="gallery__item gallery__item--7"><LazyLoadImage src={freeCodeCamp} alt="Gallery" className="gallery__img"/></figure>
        </div>


    </div>
  </section>  
  )
}

export default Experience