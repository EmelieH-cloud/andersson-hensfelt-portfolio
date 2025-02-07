import React from 'react'
import './herostyle.css'
import 'animate.css';
import OMD from './mobile.png'
import GOOGLE from './googlebtn.png'
import IOS from './appstore.svg'
import { Link } from 'react-router-dom';
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
         <h1 className='header-names  '>ANDERSSON & HENSFELT</h1>
       <p className='intro-p'>Andersson and Hensfelt is a small IT company based in Lund,
        founded by Alinia Andersson and Emelie Hensfelt. We are a dedicated, creative and passionate duo,
         driven by our love for programming.
       
</p>
        </div>
     </div>
        <div className='one-more-date-container  animate__animated animate__fadeIn'>
         <div className='omd-textcontainer'>
              <p className="release-p">APP RELEASE</p>
                <h1 className='our-apps-h1'>
                  ONE MORE DATE</h1>
                   <div className='img-cont'>
             <img src={OMD} alt="mobile" className='omd-img'/>
  <p className='omd-p'>ONE MORE DATE offers a perfect, fun way to explore your personal limits in the world of dating.
       It’s ideal for breaking the ice, getting to know new people or for adding excitement to a pre-party.<br/><br/>
              <Link to="/apps" className='m-4'>Find out more</Link>
       <div className='download-btn-cont'>
    
         <a href="https://play.google.com/store/apps/details?id=com.anderssonhensfelt.onemoredate" target="_blank" rel="noopener noreferrer">
        <img src={GOOGLE} alt="Google" className='download' />
      </a>
      <a href="https://apps.apple.com/us/app/one-more-date/id6651834743" target="_blank" rel="noopener noreferrer">
        <img src={IOS} alt="iOS" className='download' />

      </a>
       </div>
                 
        </p>
            
           
          </div>

        
          </div>
          
     
         
   
        </div>


     </>
  )
}

export default hero