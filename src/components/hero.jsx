import React from 'react'
import './herostyle.css'
import 'animate.css';
import OMD from './omd.jpg';
import OMD2 from './omd2.jpg';
import OMD3 from './omd3.jpg';
import { FaGooglePlay } from "react-icons/fa";
import { GrAppleAppStore } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Flower from './flwr.png';

const hero = () => {
          const navigate = useNavigate(); 

  const handleNavigate = () => {
    navigate('/apps'); 
  };

  return (
    <>
    <div className='outer-container-hero  animate__animated animate__slideInLeft animate__slow  '>
    
        <div className='hero-names-container'>
         <h1 className='header-names '>ANDERSSON & HENSFELT   <img src={Flower} alt="flower" className='flower-hero'/></h1>
       
        </div>
     </div>
        <div className='one-more-date-container  animate__animated animate__fadeIn'>
                <h1 className='our-apps-h1'>OUR APPS</h1>
                <h2 className='coming-soon'>ONE MORE DATE</h2>
        <p>Don't miss out on our very first app release!</p>
           <button className='btn btn-light mb-3 app-details-btn' onClick={handleNavigate}>APP DETAILS <MdKeyboardArrowRight /></button>
        <p className='omd-p'>ONE MORE DATE offers a fun way to explore your personal limits in the world of dating.
       It’s ideal for breaking the ice, getting to know new people or for adding excitement to a pre-party.
   
        </p>
             <div className='icons-outer-wrapper'>
             <div className='icons-wrapper bg-light'>

      <p>DOWNLOAD NOW<br/> ON GOOGLE PLAY</p>
     <FaGooglePlay className='icon-size'/>
  
             </div>
             <div className='icons-wrapper bg-light'>
                  <p>DOWNLOAD NOW <br/>ON APP STORE</p>
     <GrAppleAppStore className='icon-size'/>
             </div>
                </div>
        <div className='img-container'>

        <img src={OMD} alt="omd" className='omd-img'/>
         <img src={OMD2} alt="omd" className='omd-img'/>
         <img src={OMD3} alt="omd" className='omd-img'/>
        </div>
        </div>


     </>
  )
}

export default hero