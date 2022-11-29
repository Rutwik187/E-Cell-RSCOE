import React from 'react'
import './Footer.css'
import './FooterPhone.css'

import { HashLink } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';

import Twitter from '../../Images/Icons/Twitter.svg'
// import Facebook from '../../Images/Icons/Facebook.svg'
import Discord from '../../Images/Icons/Discord.svg'
import LinkedIn from '../../Images/Icons/LinkedIn.svg'
import Insta from '../../Images/Icons/Insta.svg'
// import Gmail from '../../Images/Icons/Gmail.svg'
import Telegram from '../../Images/Icons/Telegram.svg'

export default function Footer() {
  return (
    <div id='Footer'>
      <div className='FooterHeadingOut'>
        <h2 className='SectionHeading'>Get In Touch</h2>
        <span className='WordUnderline'></span>
      </div>
      <form className="FooterForm">
        <label htmlFor="FName">Name</label>
        <input type="text" placeholder='Enter Your Name' name="FName" id="FName" />
        <label htmlFor="FEmail">Email</label>
        <input type="text" placeholder='Enter Your Email' name="FEmail" id="FEmail" />
        <label htmlFor="FMessage">Message</label>
        <textarea name="FMessage" placeholder='Type Your Message' id="FMessage"></textarea>
        <button>SEND</button>
      </form>
      <div className="FooterBack">
        <div className="FooterLeft">
          <h2>E-Cell</h2>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          <h4>CONTACT US</h4>
          <div className='FooterInputOut'>
            <a href="mailto:ecellrscoe1@gmail.com">ecellrscoe1@gmail.com</a>
            <a href="tel:+91976-375-3522">+919763753522</a>
            {/* <input type="text" placeholder='ENTER YOUR EMAIL' />
            <button>SEND</button> */}
          </div>
          {/* <div className="FooterLinksOut">
            <HashLink className='FooterLinks' to='/'>Home</HashLink>
            <HashLink className='FooterLinks' to='/'>Service</HashLink>
            <HashLink className='FooterLinks' to='/'>Resource</HashLink>
            <HashLink className='FooterLinks' to='/'>Contact</HashLink>
            <HashLink className='FooterLinks' to='/'>About</HashLink>
          </div> */}
        </div>
        <div className="FooterBottom">
          <div className="FooterBottomL"></div>
          <div className="FooterBottomC">
            <a href="#" className="BottomLink">
              <img src={Twitter} alt="E-Cell RSCOE Twitter" />
            </a>
            <a href="#" className="BottomLink">
              <img src={Discord} alt="E-Cell RSCOE Discord" />
            </a>
            <a href="#" className="BottomLink">
              <img src={LinkedIn} alt="E-Cell RSCOE LinkedIn" />
            </a>
            <a href="#" className="BottomLink">
              <img src={Insta} alt="E-Cell RSCOE Instagram" />
            </a>
            <a href="#" className="BottomLink">
              <img src={Telegram} alt="E-Cell RSCOE Telegram" />
            </a>
          </div>
          <div className="FooterBottomR"></div>
        </div>
      </div>
    </div>
  )
}
