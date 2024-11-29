import React from 'react'
import './features.scss'
import '../../sass/grid.scss'
import { ReactComponent as ReactIcon } from '../../assets/svg/react.svg'
import { ReactComponent as Jest } from '../../assets/svg/jest.svg'
import { ReactComponent as Redux } from '../../assets/svg/redux.svg'
import { SiNextdotjs } from "react-icons/si";

const Features = () => {
  return (
    <section className="section-features from-primary to-secondary bg-gradient-to-br">
        <div>
          <h1 className='services uppercase text-center text-2xl sm:text-5xl lg:text-7xl mb-2'>Skills</h1>  
          <div className="underline services"></div> 
        </div>  
                
      <div className="row-self-defined row-self-defined__updated">
        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <ReactIcon className='feature-box__icon' />
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">React</h3>
                <p className="feature-box__text">
                    <ul>
                     <li>Hooks</li>
                     <li>React Router V6</li>
                     <li>Context API</li>
                     <li>React Redux</li>
                     <li>Material UI</li>
                     <li>React Hook Form</li>
                   </ul>
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <SiNextdotjs className='feature-box__icon' />
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">Next JS</h3>
                 <p className="feature-box__text">
                   <ul>
                    <li>Server Side Pages</li>
                    <li>Next 14</li>
                    <li>SEO Optimization</li>
                    <li>App Router</li>
                    <li>Page Router</li>  
                    <li>Form Generators</li>           
                   </ul>
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <Redux className='feature-box__icon' /> 
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">RTK</h3>
                <p className="feature-box__text">
                  <ul>
                    <li>Redux Toolkit</li>
                    <li>Store & Reducers</li> 
                    <li>State Managemnt</li> 
                    <li>RTK Query</li>                  
                    <li>RTK Slices</li>                
                    <li>Old Redux</li>                          
                  </ul>
                </p>
            </div>
        </div>

        <div className="col-1-of-4">
            <div className="feature-box flex flex-col jutsify-center align-center">
                <div className='flex self-center align-center items-center justify-center gap-3'>
                    <Jest className='feature-box__icon' />
                </div>
                <h3 className="heading-tertiary u-margin-bottom-small m-2">TESTING</h3>
                <p className="feature-box__text">
                   <ul>
                    <li>Lighthouse</li>
                    <li>Jest</li>
                    <li>Unit Testing</li>
                    <li>React/Redux dev tool</li>
                    <li>Integration Testing</li>  
                    <li>PWA</li>                                   
                   </ul>
                </p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Features