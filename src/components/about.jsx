import React from 'react'
import './aboutusstyle.css'
import Signatur1 from './signatur1.png';
import Signatur2 from './signatur2.png';

const about = () => {
  return (
    <div className='about-us-wrapper'>
      <h2 className='about-header  animate__animated  animate__slideInDown'>Meant to Be</h2>
      <p className='our-story-p  animate__animated  animate__slideInRight'>

Saying that things are "meant to be" might seem a bit cheesy, but when it comes to our story (Emelie and Alinia),
 it’s hard not to wonder if fate didn’t play a small role in it after all. 
<br></br><br></br>In the fall of 2023, we both ,unaware of each other, walked into the same classroom,
 at the same school, with the same goal: to become really good at programming. 
But it didn’t stop there. Later that same week, we ran into each other in the courtyard
 outside our apartments. It turned out that we were neighbors.<br></br><br></br>
You might think fate had done its part at that point, but the most
 important discovery came a bit later. Not only did we share the same school
  class and parking garage, we also shared the same sense of humor, drive, and
   passion for creation. As you can see, the stars were just aligned a little too
    perfectly for us to let it pass by. A few months later, the registration certificate
     for our company Andersson & Hensfelt landed in the mailbox, and we had developed our first app.
</p>

<p className='our-story-p  animate__animated  animate__slideInRight'>
  <h5 className='honolulu-header'>The Honolulu Flower</h5>
  One day, when we were both deeply immersed and frustrated by a bug we had been working on for a long time, 
  Emelie suddenly burst out, "That's where we’re going!" She had been scrolling around on Google Maps and was
   now pointing at what seemed to be an island in the middle of nowhere. It turned out to be Honolulu, Hawaii.<br></br><br></br>
    Why Emelie specifically pointed to Honolulu, she can't explain, but what we do know is that after that moment,
     we decided that one day we would travel to Honolulu and celebrate our successes. When it came time to decide
      on a logo for Andersson & Hensfelt, it was obvious that it had to be an Hawaiian flower. It’s there as a
       reminder of where we’re headed.<br></br><br></br>
<span className='fw-bold'>Saying that things are "meant to be" might seem a bit cheesy, but when we sit in Honolulu, toasting with our coconut drinks,
 it will be hard not to believe that fate played a small role in it all. </span>

</p>
<div className='signature-wrapper'>
<img src={Signatur1} alt="signatur2" className='signatur-img'/>
<img src={Signatur2} alt="signatur2"className='signatur-img'/>
</div>

    </div>
  )
}

export default about