import React from 'react'
import './about.scss'
import image2 from '../../assets/images/Dashboard.png'
import image1 from '../../assets/images/sema-decor.webp'
import image3 from '../../assets/images/semi.webp'
import {GrInstagram} from 'react-icons/gr'
import {FaFacebookF, FaTelegramPlane, FaGithub, FaLinkedin} from 'react-icons/fa'
import {RiWhatsappFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <section className="section-about mt-3 md:mt-12" id='about'>
      <div className="mb-4 md:mb-16 lg:mb-24">
          <h2 className="heading-secondary text-center uppercase">
              any project    
              <div className="underline"></div>
          </h2>
       </div>

       <div className="row-self-defined">
           <div className="col-1-of-2">
              <h3 className="heading-tertiary mb-3">Ahmed Gad</h3>
               <p className="paragraph">
                  I have been developing on the web for more than 3 years, I love and  
                  passionate about web design and development. I always make sure to
                  produce creative designs and unique user experience in my web apps.
                  I build modern, fast, secure, well tested, highly performing web apps
                  mostly using react and redux along with node javascript and sql DB or
                  Even using firebase.<br/>
                  My goal is to join a team of professional developers where we will add
                  to each other knowledge and build great web applications.
               </p>
               <h3 className="heading-tertiary u-margin-bottom-small">feel free to contact me on social media</h3>
               <div className="social flex flex-row  self-center">
                <a href='https://wa.me/01009860198' target='_blank' rel="noreferrer"> <RiWhatsappFill className='icon' title='WhatsApp'/></a>
                <a href='https://www.linkedin.com/in/ahmed-gad-0980221b5/' target='_blank' rel="noreferrer"><FaLinkedin className='icon' title='LinkedIn'/></a>
                <a href='https://github.com/ahmedGad-dev' target='_blank' rel="noreferrer"><FaGithub className='icon' title='Github'/> </a>
                <a href='https://www.instagram.com/ahmedgad220' target='_blank' rel="noreferrer"><GrInstagram className='icon' title='Instagram'/></a>     
                <a href='https://t.me/ahmedGad_Dev' target='_blank' rel="noreferrer"><FaTelegramPlane className='icon' title='Telegram'/></a>
                <a href='https://m.facebook.com/100000715726616/' target='_blank' rel="noreferrer"><FaFacebookF className='icon' title='Facebook'/></a>
               </div>
               <div className='flex flex-row justify-center'>
                <Link to='/experience' className="pill-btn">See CV</Link>
               </div>
            </div>
            <div className="col-1-of-2">
               <div className="composition">
                 <img src={image1} alt="1" className="composition__photo composition__photo--p1"/>
                 <img src={image2} alt="2" className="composition__photo composition__photo--p2"/>
                 <img src={image3} alt="3" className="composition__photo composition__photo--p3"/>
               </div>
            </div>
       </div>                
    </section> 
  )
}

export default About