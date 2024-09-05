import React from 'react'
import './herostyle.css'
import 'animate.css';
import OMD from './omd.jpg';

const hero = () => {
  return (
    <div className='outer-container-hero  animate__animated animate__slideInLeft animate__slow  '>
        
        <div className='hero-names-container'>
         <h1 className='header-names '>ANDERSSON & HENSFELT</h1>
         <h3 className='two-minds-one-passion'>Two Minds, One Passion</h3>
         <p>We are two passionate Swedish developers dedicated to crafting engaging mobile applications. At Andersson & Hensfelt, we blend our technical expertise with boundless creativity to turn innovative ideas into reality. With a shared vision for each project, we meticulously design and develop apps that not only meet but exceed user expectations. </p>
        <h2 className='coming-soon'>ONE MORE DATE</h2>
        <p>Don't miss out on our very first app release.</p>
         <img src={OMD} alt="omd" className='omd-img'/>
        </div>
  
     </div>
  )
}

export default hero