import React from 'react'
import './ourappsstyle.css'
import Icon from './omd-icon.png';

const Ourapps = () => {
  return (
    <div className='our-apps-wrapper'>
        <h1 className='omd-header'>One More Date?</h1>
        <img src={Icon} alt="icon" className='icon-img'/>
        <p className='about-omd'>The application is developed using Blazor MAUI Hybrid,
           a cross-platform framework that allows building web and
            native applications with .NET. The app leverages Blazor
             for its web-based components, using Razor syntax for
              front-end UI design and C# for business logic. MAUI
               (Multi-platform App UI) enables deployment across multiple platforms,
                including iOS, Android, Windows, and macOS, all from a single codebase.
                 The hybrid architecture allows seamless integration of web and native functionalities,
                  ensuring high performance and a responsive user experience on various devices.
                   The app utilizes .NET 6, offering modern development features and improved runtime efficiency.</p>
    </div>
  )
}

export default Ourapps;