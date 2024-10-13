import React from 'react'
import './ourappsstyle.css'
import Icon from './cardview.png';
import Icon2 from './deckview.png';
import { Link } from 'react-router-dom';
import Icon3 from './playersview.png';

const Ourapps = () => {
  return (
    <div className='our-apps-wrapper'>
      <div className='bg-light apps-cont'>
        <h1 className='omd-header'>One More Date?</h1>
        <p>One more date is a mobile game available for both android and IOS.</p>
             <Link to="/policy"> Privacy Policy</Link>.
               <Link to="/support"> Support</Link>.
        <div className='images-wrapper'>
     <img src={Icon} alt="icon" className='icon-img'/>
    <img src={Icon2} alt="icon" className='icon-img'/>
   <img src={Icon3} alt="icon" className='icon-img'/>
        </div>
   
   <div>
  <p className='about-omd'>
  Imagine you're on a date with someone who seems absolutely perfect – attractive, charming and even makes you laugh. But then, suddenly something happens. It turns out that your date doesn’t believe in the moon landing. Is this a dealbreaker for you, or would you consider going on One More Date?
</p>

<p className='about-omd'>
  One More Date is the perfect game to spark lively discussions and break the ice at every party!
</p>

<p className='about-omd'>
  The game contains a variety of statements, such as:
  <ul className='list-unstyled'>
    <li>"Your date only brushes their teeth once a day"</li>
    <li>"Your date was born as a different gender than they are today"</li>
  </ul>
</p>

<p className='about-omd'>
  It is up to you to decide whether you'd continue dating the person or if you want to move on to someone new.
</p>

<p className='about-omd'>
  One More Date promises plenty of laughs and, occasionally, a few heated discussions. It’s a perfect game for a girls night, an afterwork, or getting to know new people on a deeper level.
</p>
</div>
    </div>
    </div>
  )
}

export default Ourapps;