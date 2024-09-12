import React from 'react'
import './herostyle.css'
import 'animate.css';
import OMD from './omd.jpg';
import OMD2 from './omd2.jpg';
import OMD3 from './omd3.jpg';
import OMD4 from './omd-intro.png';
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
       <p className='intro-p'>Andersson and Hensfelt is a small IT company based in Lund, led by Alinia Andersson and Emelie Hensfelt. We are dedicated, creative, and passionate about programming. A testament to our commitment is the app One More Date, 
         which we developed early in our studies to become system developers. The app is available for download on both the App Store and Google Play.
          We are always eager to tackle new challenges and bring innovative ideas to life.
</p>
        </div>
     </div>
        <div className='one-more-date-container  animate__animated animate__fadeIn'>
                <h1 className='our-apps-h1'>Introducing our first app release:</h1>
                <h2 className='coming-soon'>ONE MORE DATE</h2>
                <img src={OMD4} alt="omdicon" className='omd4-icon'/>
           <button className='btn btn-light mb-3 app-details-btn' onClick={handleNavigate}>TECHNICAL DETAILS <MdKeyboardArrowRight /></button>
        <p className='omd-p'>ONE MORE DATE offers a fun way to explore your personal limits in the world of dating.
       It’s ideal for breaking the ice, getting to know new people or for adding excitement to a pre-party.
        </p>
             <div className='icons-outer-wrapper'>
             <div className='icons-wrapper bg-light'>
      <p className='app-header'>DOWNLOAD NOW ON GOOGLE PLAY</p>
     <FaGooglePlay className='icon-size'/>
             </div>
             <div className='icons-wrapper bg-light'>
                  <p className='app-header'>DOWNLOAD NOW ON APP STORE</p>
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