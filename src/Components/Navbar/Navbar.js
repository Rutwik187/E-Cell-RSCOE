import React from 'react'
import './Navbar.css'

import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import HomeIcon from '../../Images/Icons/Home.svg'
import AboutUs from '../../Images/Icons/AboutUs.svg'
import Events from '../../Images/Icons/Events.svg'
import OurTeam from '../../Images/Icons/OurTeam.svg'
import EcellLogo from '../../Images/Icons/EcellLogo.png'

import Twitter from '../../Images/Icons/Twitter.svg'
// import Facebook from '../../Images/Icons/Facebook.svg'
import Discord from '../../Images/Icons/Discord.svg'
import LinkedIn from '../../Images/Icons/LinkedIn.svg'
import Insta from '../../Images/Icons/Insta.svg'
// import Gmail from '../../Images/Icons/Gmail.svg'
import Telegram from '../../Images/Icons/Telegram.svg'



export default function Navbar() {
  const location = useLocation();
  return (
    <div className='Navbar'>
      <div className='LeftNav'>
        <div style={(location.pathname === '/' && location.hash === '#WelcomeSection') || (location.pathname === '/' && location.hash === '') ? { borderBottom: '0.2vw solid #00ADB5' } : { borderBottom: '0.2vw solid rgba(0, 0, 0, 0)' }}>
          <img src={HomeIcon} style={(location.pathname === '/' && location.hash === '#WelcomeSection') || (location.pathname === '/' && location.hash === '') ? { filter: 'invert(51%) sepia(91%) saturate(1569%) hue-rotate(143deg) brightness(88%) contrast(101%)' } : { filter: 'none' }} alt="E-Cell RSCOE" />
          <HashLink className='NavLinks' to='/#WelcomeSection' style={(location.pathname === '/' && location.hash === '#WelcomeSection') || (location.pathname === '/' && location.hash === '') ? { color: '#00ADB5', fontWeight: '600' } : { color: 'white', fontWeight: '400' }}>Home</HashLink>
        </div>
        <div style={(location.pathname === '/' && location.hash === '#AboutUs') ? { borderBottom: '0.2vw solid #00ADB5' } : { borderBottom: '0.2vw solid rgba(0, 0, 0, 0)' }}>
          <img src={AboutUs} style={(location.pathname === '/' && location.hash === '#AboutUs') ? { filter: 'invert(51%) sepia(91%) saturate(1569%) hue-rotate(143deg) brightness(88%) contrast(101%)' } : { filter: 'none' }} alt="E-Cell RSCOE" />
          <HashLink className='NavLinks' to='/#AboutUs' style={(location.pathname === '/' && location.hash === '#AboutUs') ? { color: '#00ADB5', fontWeight: '600' } : { color: 'white', fontWeight: '400' }}>About Us</HashLink>
        </div>
        <div style={(location.pathname === '/' && location.hash === '#Events') ? { borderBottom: '0.2vw solid #00ADB5' } : { borderBottom: '0.2vw solid rgba(0, 0, 0, 0)' }}>
          <img src={Events} style={(location.pathname === '/' && location.hash === '#Events') ? { filter: 'invert(51%) sepia(91%) saturate(1569%) hue-rotate(143deg) brightness(88%) contrast(101%)' } : { filter: 'none' }} alt="E-Cell RSCOE" />
          <HashLink className='NavLinks' to='/#Events' style={(location.pathname === '/' && location.hash === '#Events') ? { color: '#00ADB5', fontWeight: '600' } : { color: 'white', fontWeight: '400' }}>Events</HashLink>
        </div>
        <div style={(location.pathname === '/OurTeam' && location.hash === '') ? { borderBottom: '0.2vw solid #00ADB5' } : { borderBottom: '0.2vw solid rgba(0, 0, 0, 0)' }}>
          <img src={OurTeam} style={(location.pathname === '/OurTeam' && location.hash === '') ? { filter: 'invert(51%) sepia(91%) saturate(1569%) hue-rotate(143deg) brightness(88%) contrast(101%)' } : { filter: 'none' }} alt="E-Cell RSCOE" />
          <HashLink className='NavLinks' to='/OurTeam' style={(location.pathname === '/OurTeam' && location.hash === '') ? { color: '#00ADB5', fontWeight: '600' } : { color: 'white', fontWeight: '400' }}>Our Team</HashLink>
        </div>
      </div>
      <div className="CenterNav">
        <div>
          <img src={EcellLogo} alt="E-Cell RSCOE" />
        </div>
        <HashLink className='CenterNavText' to='/#WelcomeSection'>E-Cell RSCOE</HashLink>
      </div>
      <div className='RightNav'>
        <a href='#' className='RightNavLink'>
          <img src={Twitter} alt="E-Cell RSCOE Twitter" />
        </a>
        <a href='#' className='RightNavLink'>
          <img src={Discord} alt="E-Cell RSCOE Discord" />
        </a>
        <a href='#' className='RightNavLink'>
          <img src={LinkedIn} alt="E-Cell RSCOE LinkedIn" />
        </a>
        <a href='#' className='RightNavLink'>
          <img src={Insta} alt="E-Cell RSCOE Instagram" />
        </a>
        <a href='#' className='RightNavLink'>
          <img src={Telegram} alt="E-Cell RSCOE Telegram" />
        </a>
      </div>
    </div>
  )
}
