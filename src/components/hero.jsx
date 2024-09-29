import React from 'react'
import './herostyle.css'
import 'animate.css';
import OMD from './firstv.png';
import OMD2 from './secondview.png';
import OMD4 from './omdfirst.png';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const hero = () => {
          const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/apps'); 
  };

  return (
    <>
    <div className='outer-container-hero  animate__animated animate__slideInLeft animate__slow  '>
        <div className='hero-names-container'>
         <h1 className='header-names '>ANDERSSON & HENSFELT</h1>
       <p className='intro-p'>Andersson and Hensfelt is a small IT company based in Lund,
        founded by Alinia Andersson and Emelie Hensfelt. We are a dedicated, creative and passionate duo,
         driven by our love for programming.
         A testament to our passion is the app One More Date, 
         which we developed early in our studies to become system developers.
          The app is available now for download on both the App Store and Google Play.
</p>
        </div>
     </div>
        <div className='one-more-date-container  animate__animated animate__fadeIn'>
                <h1 className='our-apps-h1'>ONE MORE DATE</h1>
                     
                <img src={OMD4} alt="omdicon" className='omd4-icon'/>
    
                 <p className='omd-p'>ONE MORE DATE offers a fun way to explore your personal limits in the world of dating.
       It’s ideal for breaking the ice, getting to know new people or for adding excitement to a pre-party.
        </p>
          
           <button className='btn btn-light mb-3 app-details-btn' onClick={handleNavigate}>TELL ME MORE<MdKeyboardArrowRight /></button>
       
          
        <div className='img-container'>

        <img src={OMD} alt="omd" className='omd-img'/>
         <img src={OMD2} alt="omd" className='omd-img'/>
        </div>
        </div>


     </>
  )
}

export default hero