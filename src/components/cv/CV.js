import React from 'react';
import Tilt from 'react-parallax-tilt';
import './cv.scss';
import {ReactComponent as Attachment} from '../../assets/svg/attachment.svg'
import {ReactComponent as FilesEmpty} from '../../assets/svg/files-empty.svg'


const CV = () => {
  return (
    <div className='cv'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
        <div className="Tilt-inner pa3">
         {/* <img style={{paddingTop: '5px'}} alt='cv' src={filesEmpty} width='150px' height= '150px' title='CV'/>*/}
         <Attachment className='cv-icon cv-icon__attachment'/>  
           <a target='_blank' href='https://drive.google.com/file/d/1zypyWEwWOxs3cagGQugCY6L2E3kBcXAh/view?usp=drive_link'>
            <FilesEmpty className='cv-icon cv-icon__files'/> 
           </a>
        </div>
      </Tilt>
    </div>
  );
}

export default CV;