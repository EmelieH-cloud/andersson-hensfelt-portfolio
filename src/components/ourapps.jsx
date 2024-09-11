import React from 'react'
import './ourappsstyle.css'
import Icon from './omd-icon.png';

const Ourapps = () => {
  return (
    <div className='our-apps-wrapper'>
        <h1 className='omd-header'>One More Date?</h1>
        <img src={Icon} alt="icon" className='icon-img'/>
    </div>
  )
}

export default Ourapps;